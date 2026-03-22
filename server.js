const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const allQuestions = require('./questions');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

// ── Game state ────────────────────────────────────────────────────────────────
// rooms[code] = {
//   code, hostId, players: { id: { name, score, answered } },
//   questions: [], currentQ: 0, status: 'lobby'|'question'|'answer'|'finished',
//   questionTimer: null, firstCorrect: null
// }
const rooms = {};

const QUESTIONS_PER_GAME = 10;
const QUESTION_TIME_MS   = 20000; // 20 seconds per question
const ANSWER_REVEAL_MS   = 4000;  // show answer for 4 seconds before next

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return rooms[code] ? generateCode() : code;
}

function pickQuestions() {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, QUESTIONS_PER_GAME);
}

function playerList(room) {
  return Object.values(room.players).map(p => ({
    id: p.id,
    name: p.name,
    score: p.score
  })).sort((a, b) => b.score - a.score);
}

function sendQuestion(room) {
  const q = room.questions[room.currentQ];
  room.status = 'question';
  room.firstCorrect = null;

  // Reset answered flags
  Object.values(room.players).forEach(p => { p.answered = false; });

  const payload = {
    questionIndex: room.currentQ,
    total: QUESTIONS_PER_GAME,
    question: q.question,
    options: q.options,
    category: q.category,
    timeLimit: QUESTION_TIME_MS
  };

  io.to(room.code).emit('question', payload);

  // Auto-advance after time limit
  room.questionTimer = setTimeout(() => {
    revealAnswer(room);
  }, QUESTION_TIME_MS);
}

function revealAnswer(room) {
  if (room.status !== 'question') return;
  clearTimeout(room.questionTimer);
  room.status = 'answer';

  const q = room.questions[room.currentQ];
  io.to(room.code).emit('reveal', {
    correctAnswer: q.answer,
    firstCorrect: room.firstCorrect,
    scores: playerList(room)
  });

  setTimeout(() => {
    room.currentQ++;
    if (room.currentQ < QUESTIONS_PER_GAME) {
      sendQuestion(room);
    } else {
      endGame(room);
    }
  }, ANSWER_REVEAL_MS);
}

function endGame(room) {
  room.status = 'finished';
  io.to(room.code).emit('gameOver', { scores: playerList(room) });
}

// ── Socket events ─────────────────────────────────────────────────────────────
io.on('connection', (socket) => {

  // Host creates a room
  socket.on('createRoom', ({ hostName }, cb) => {
    const code = generateCode();
    rooms[code] = {
      code,
      hostId: socket.id,
      hostName: hostName || 'Host',
      players: {},
      questions: [],
      currentQ: 0,
      status: 'lobby',
      questionTimer: null,
      firstCorrect: null
    };
    socket.join(code);
    socket.roomCode = code;
    socket.isHost = true;
    cb({ code });
  });

  // Player joins a room
  socket.on('joinRoom', ({ code, playerName }, cb) => {
    const room = rooms[code.toUpperCase()];
    if (!room) return cb({ error: 'Room not found. Check your code!' });
    if (room.status !== 'lobby') return cb({ error: 'Game already started!' });
    if (Object.keys(room.players).length >= 20) return cb({ error: 'Room is full!' });

    const trimmedName = (playerName || '').trim().slice(0, 20);
    if (!trimmedName) return cb({ error: 'Please enter your name!' });

    // Check name uniqueness
    const nameTaken = Object.values(room.players).some(
      p => p.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (nameTaken) return cb({ error: 'That name is taken, try another!' });

    room.players[socket.id] = { id: socket.id, name: trimmedName, score: 0, answered: false };
    socket.join(code.toUpperCase());
    socket.roomCode = code.toUpperCase();
    socket.isHost = false;

    // Tell the joining player their info
    cb({ success: true, playerName: trimmedName, code: code.toUpperCase() });

    // Update lobby for everyone
    io.to(room.code).emit('lobbyUpdate', {
      players: playerList(room),
      hostName: room.hostName
    });
  });

  // Host starts the game
  socket.on('startGame', () => {
    const room = rooms[socket.roomCode];
    if (!room || socket.id !== room.hostId) return;
    if (Object.keys(room.players).length < 1) return;

    room.questions = pickQuestions();
    room.currentQ = 0;
    io.to(room.code).emit('gameStarting');
    setTimeout(() => sendQuestion(room), 2000);
  });

  // Player submits answer
  socket.on('submitAnswer', ({ answer }) => {
    const room = rooms[socket.roomCode];
    if (!room || room.status !== 'question') return;

    const player = room.players[socket.id];
    if (!player || player.answered) return;

    player.answered = true;
    const correct = answer === room.questions[room.currentQ].answer;

    if (correct) {
      if (!room.firstCorrect) {
        // Fastest correct answer: full points
        player.score += 1000;
        room.firstCorrect = player.name;
        socket.emit('answerResult', { correct: true, fastest: true, points: 1000 });
      } else {
        // Still correct but not first: half points
        player.score += 500;
        socket.emit('answerResult', { correct: true, fastest: false, points: 500 });
      }
    } else {
      socket.emit('answerResult', { correct: false, fastest: false, points: 0 });
    }

    // If everyone answered, reveal early
    const allAnswered = Object.values(room.players).every(p => p.answered);
    if (allAnswered) revealAnswer(room);
  });

  // Host kicks to next question manually
  socket.on('nextQuestion', () => {
    const room = rooms[socket.roomCode];
    if (!room || socket.id !== room.hostId) return;
    if (room.status === 'question') revealAnswer(room);
  });

  // Host restarts game in same room
  socket.on('restartGame', () => {
    const room = rooms[socket.roomCode];
    if (!room || socket.id !== room.hostId) return;
    Object.values(room.players).forEach(p => { p.score = 0; p.answered = false; });
    room.status = 'lobby';
    room.currentQ = 0;
    io.to(room.code).emit('gameRestarted', { players: playerList(room) });
  });

  // Cleanup on disconnect
  socket.on('disconnect', () => {
    const code = socket.roomCode;
    if (!code || !rooms[code]) return;
    const room = rooms[code];

    if (socket.isHost) {
      // Host left – end the game
      io.to(code).emit('hostLeft');
      clearTimeout(room.questionTimer);
      delete rooms[code];
    } else {
      delete room.players[socket.id];
      io.to(code).emit('lobbyUpdate', {
        players: playerList(room),
        hostName: room.hostName
      });
    }
  });
});

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Canada Trivia server running on http://localhost:${PORT}`));
