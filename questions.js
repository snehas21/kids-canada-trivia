const questions = [
  // Geography
  {
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
    answer: "Ottawa",
    category: "Geography"
  },
  {
    question: "How many provinces does Canada have?",
    options: ["8", "9", "10", "13"],
    answer: "10",
    category: "Geography"
  },
  {
    question: "How many territories does Canada have?",
    options: ["1", "2", "3", "4"],
    answer: "3",
    category: "Geography"
  },
  {
    question: "What is the largest province in Canada by area?",
    options: ["Ontario", "British Columbia", "Alberta", "Quebec"],
    answer: "Quebec",
    category: "Geography"
  },
  {
    question: "What ocean is on the east coast of Canada?",
    options: ["Pacific Ocean", "Arctic Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "Atlantic Ocean",
    category: "Geography"
  },
  {
    question: "What ocean is on the west coast of Canada?",
    options: ["Pacific Ocean", "Arctic Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "Pacific Ocean",
    category: "Geography"
  },
  {
    question: "What is the capital of British Columbia?",
    options: ["Vancouver", "Victoria", "Kelowna", "Surrey"],
    answer: "Victoria",
    category: "Geography"
  },
  {
    question: "What is the capital of Quebec?",
    options: ["Montreal", "Quebec City", "Laval", "Gatineau"],
    answer: "Quebec City",
    category: "Geography"
  },
  {
    question: "Which province is Niagara Falls located in?",
    options: ["Quebec", "Manitoba", "Ontario", "Nova Scotia"],
    answer: "Ontario",
    category: "Geography"
  },
  {
    question: "What is the longest river in Canada?",
    options: ["St. Lawrence River", "Fraser River", "Mackenzie River", "Nelson River"],
    answer: "Mackenzie River",
    category: "Geography"
  },
  {
    question: "What is the tallest mountain in Canada?",
    options: ["Mount Robson", "Mount Logan", "Mount Columbia", "Mount Fairweather"],
    answer: "Mount Logan",
    category: "Geography"
  },
  {
    question: "Which Canadian province is the smallest by area?",
    options: ["New Brunswick", "Nova Scotia", "Prince Edward Island", "Newfoundland"],
    answer: "Prince Edward Island",
    category: "Geography"
  },
  {
    question: "What large body of water sits between Ontario and the USA?",
    options: ["Hudson Bay", "The Great Lakes", "Lake Winnipeg", "Georgian Bay"],
    answer: "The Great Lakes",
    category: "Geography"
  },
  {
    question: "What is the capital of Alberta?",
    options: ["Calgary", "Red Deer", "Edmonton", "Lethbridge"],
    answer: "Edmonton",
    category: "Geography"
  },
  {
    question: "Which territory has its capital at Whitehorse?",
    options: ["Northwest Territories", "Nunavut", "Yukon", "Manitoba"],
    answer: "Yukon",
    category: "Geography"
  },
  {
    question: "Which Canadian city has the largest population?",
    options: ["Ottawa", "Calgary", "Montreal", "Toronto"],
    answer: "Toronto",
    category: "Geography"
  },
  {
    question: "What is the capital of Nunavut?",
    options: ["Yellowknife", "Iqaluit", "Whitehorse", "Inuvik"],
    answer: "Iqaluit",
    category: "Geography"
  },
  {
    question: "Which province is known as the Prairie Province because of its flat farmland?",
    options: ["Saskatchewan", "Ontario", "Nova Scotia", "New Brunswick"],
    answer: "Saskatchewan",
    category: "Geography"
  },
  // History & Culture
  {
    question: "In what year did Canada become a country?",
    options: ["1776", "1812", "1867", "1901"],
    answer: "1867",
    category: "History"
  },
  {
    question: "What is Canada's national animal?",
    options: ["Moose", "Polar Bear", "Beaver", "Canada Goose"],
    answer: "Beaver",
    category: "Culture"
  },
  {
    question: "What are Canada's two official languages?",
    options: ["English and Spanish", "French and Spanish", "English and French", "English and Indigenous"],
    answer: "English and French",
    category: "Culture"
  },
  {
    question: "What is Canada's national bird?",
    options: ["Bald Eagle", "Loon", "Canada Goose", "Blue Jay"],
    answer: "Loon",
    category: "Culture"
  },
  {
    question: "What is the name of Canada's national police force?",
    options: ["RCMP", "OPP", "FBI", "CSIS"],
    answer: "RCMP",
    category: "History"
  },
  {
    question: "What day is Canada Day celebrated?",
    options: ["June 24", "July 1", "July 4", "August 1"],
    answer: "July 1",
    category: "Culture"
  },
  {
    question: "What sport is Canada's official summer sport?",
    options: ["Baseball", "Soccer", "Lacrosse", "Basketball"],
    answer: "Lacrosse",
    category: "Culture"
  },
  {
    question: "What is on the Canadian flag?",
    options: ["A beaver", "A maple leaf", "A moose", "A hockey stick"],
    answer: "A maple leaf",
    category: "Culture"
  },
  {
    question: "Who was the first Prime Minister of Canada?",
    options: ["Wilfrid Laurier", "John A. Macdonald", "Alexander Mackenzie", "Pierre Trudeau"],
    answer: "John A. Macdonald",
    category: "History"
  },
  {
    question: "What game was invented in Canada?",
    options: ["Football", "Baseball", "Basketball", "Soccer"],
    answer: "Basketball",
    category: "History"
  },
  {
    question: "What year did Canada host the Winter Olympics in Vancouver?",
    options: ["2006", "2008", "2010", "2012"],
    answer: "2010",
    category: "History"
  },
  {
    question: "What is the CN Tower located in?",
    options: ["Ottawa", "Montreal", "Calgary", "Toronto"],
    answer: "Toronto",
    category: "Culture"
  },
  {
    question: "Which Indigenous group is most associated with the Inuit art of carving?",
    options: ["Cree", "Mohawk", "Inuit", "Haida"],
    answer: "Inuit",
    category: "Culture"
  },
  {
    question: "What is the name of the train that crosses Canada coast to coast?",
    options: ["VIA Rail", "GO Train", "Rocky Mountaineer", "Canadian National"],
    answer: "VIA Rail",
    category: "Culture"
  },
  {
    question: "Who appears on the Canadian $10 bill?",
    options: ["Terry Fox", "Viola Desmond", "Tommy Douglas", "Emily Carr"],
    answer: "Viola Desmond",
    category: "History"
  },
  {
    question: "What is Canada's most popular winter sport?",
    options: ["Skiing", "Curling", "Snowboarding", "Hockey"],
    answer: "Hockey",
    category: "Culture"
  },
  // Science & Nature
  {
    question: "What are the Northern Lights also called?",
    options: ["Aurora Borealis", "Aurora Australis", "Solar Flares", "Polar Lights"],
    answer: "Aurora Borealis",
    category: "Science"
  },
  {
    question: "What tree's leaf is on the Canadian flag?",
    options: ["Oak", "Birch", "Maple", "Pine"],
    answer: "Maple",
    category: "Nature"
  },
  {
    question: "What is Canada's national flower?",
    options: ["Rose", "Trillium", "Dogwood", "Wild Rose"],
    answer: "Trillium",
    category: "Nature"
  },
  {
    question: "What large marine mammal lives in Canada's Arctic waters?",
    options: ["Walrus", "Blue Whale", "Narwhal", "Beluga Whale"],
    answer: "Narwhal",
    category: "Nature"
  },
  {
    question: "Which Canadian province is famous for its dinosaur fossils?",
    options: ["British Columbia", "Manitoba", "Alberta", "Nova Scotia"],
    answer: "Alberta",
    category: "Science"
  },
  {
    question: "What sweet food product is Canada famous for making from tree sap?",
    options: ["Honey", "Maple Syrup", "Molasses", "Corn Syrup"],
    answer: "Maple Syrup",
    category: "Nature"
  },
  {
    question: "What percentage of the world's freshwater does Canada have?",
    options: ["5%", "10%", "20%", "30%"],
    answer: "20%",
    category: "Science"
  },
  {
    question: "Which Canadian province has the Rocky Mountains?",
    options: ["Ontario", "Manitoba", "Alberta and British Columbia", "Quebec"],
    answer: "Alberta and British Columbia",
    category: "Geography"
  },
  // Fun & Misc
  {
    question: "What is the name of the famous Canadian comic strip character who loves Mondays?",
    options: ["Snoopy", "Garfield", "Calvin", "Archie"],
    answer: "Garfield",
    category: "Fun"
  },
  {
    question: "What popular Canadian coffee and donut chain is known as 'Timmies'?",
    options: ["Starbucks", "Second Cup", "Tim Hortons", "Coffee Time"],
    answer: "Tim Hortons",
    category: "Culture"
  },
  {
    question: "What is poutine made of?",
    options: ["Pasta, sauce and cheese", "Fries, gravy and cheese curds", "Rice, beans and salsa", "Bread, butter and jam"],
    answer: "Fries, gravy and cheese curds",
    category: "Culture"
  },
  {
    question: "Which province is poutine originally from?",
    options: ["Ontario", "Nova Scotia", "Quebec", "Manitoba"],
    answer: "Quebec",
    category: "Culture"
  },
  {
    question: "How many stars are on the Canadian flag?",
    options: ["0", "1", "5", "13"],
    answer: "0",
    category: "Culture"
  },
  {
    question: "What color are the stripes on the Canadian flag?",
    options: ["Blue", "Red", "Green", "Gold"],
    answer: "Red",
    category: "Culture"
  },
  {
    question: "Which Canadian city is known as 'Lotusland'?",
    options: ["Victoria", "Vancouver", "Toronto", "Halifax"],
    answer: "Vancouver",
    category: "Geography"
  },
  {
    question: "What is Canada's motto 'A Mari Usque Ad Mare' translated to?",
    options: ["Strong and Free", "From Sea to Sea", "True North Strong", "Unity in Diversity"],
    answer: "From Sea to Sea",
    category: "History"
  },
  {
    question: "Which province joined Canada last (in 1949)?",
    options: ["Prince Edward Island", "Manitoba", "Newfoundland and Labrador", "Saskatchewan"],
    answer: "Newfoundland and Labrador",
    category: "History"
  },
  {
    question: "What is the name of Canada's space arm used on the International Space Station?",
    options: ["CanadaArm", "Canadarm2", "SpaceArm", "RoboCanada"],
    answer: "Canadarm2",
    category: "Science"
  },
  // More Geography
  {
    question: "What is the capital of Manitoba?",
    options: ["Brandon", "Winnipeg", "Steinbach", "Thompson"],
    answer: "Winnipeg",
    category: "Geography"
  },
  {
    question: "What is the capital of Nova Scotia?",
    options: ["Truro", "Dartmouth", "Halifax", "Sydney"],
    answer: "Halifax",
    category: "Geography"
  },
  {
    question: "What is the capital of Saskatchewan?",
    options: ["Saskatoon", "Regina", "Moose Jaw", "Prince Albert"],
    answer: "Regina",
    category: "Geography"
  },
  {
    question: "Which province is known as 'La Belle Province' (The Beautiful Province)?",
    options: ["Ontario", "British Columbia", "Quebec", "New Brunswick"],
    answer: "Quebec",
    category: "Geography"
  },
  {
    question: "What is the name of the large bay on the north side of Ontario and Quebec?",
    options: ["Baffin Bay", "Hudson Bay", "James Bay", "Georgian Bay"],
    answer: "Hudson Bay",
    category: "Geography"
  },
  {
    question: "Which province has the Bay of Fundy, famous for the world's highest tides?",
    options: ["Prince Edward Island", "Nova Scotia", "New Brunswick", "Newfoundland"],
    answer: "New Brunswick",
    category: "Geography"
  },
  {
    question: "What is Canada's second largest city by population?",
    options: ["Ottawa", "Vancouver", "Calgary", "Montreal"],
    answer: "Montreal",
    category: "Geography"
  },
  // More History & Culture
  {
    question: "What year did the Canadian Pacific Railway link Canada coast to coast?",
    options: ["1867", "1885", "1901", "1920"],
    answer: "1885",
    category: "History"
  },
  {
    question: "What Canadian city hosted the 1976 Summer Olympics?",
    options: ["Toronto", "Vancouver", "Montreal", "Calgary"],
    answer: "Montreal",
    category: "History"
  },
  {
    question: "What is the name of the brave Canadian runner who ran across Canada to raise money for cancer research?",
    options: ["Steve Fonyo", "Rick Hansen", "Terry Fox", "Ben Johnson"],
    answer: "Terry Fox",
    category: "History"
  },
  {
    question: "What is a 'toonie'?",
    options: ["A Canadian $1 coin", "A Canadian $2 coin", "A Canadian cartoon character", "A type of Canadian donut"],
    answer: "A Canadian $2 coin",
    category: "Culture"
  },
  {
    question: "What bird is on the Canadian one-dollar coin (the 'loonie')?",
    options: ["Canada Goose", "Bald Eagle", "Common Loon", "Blue Jay"],
    answer: "Common Loon",
    category: "Culture"
  },
  {
    question: "Which famous annual rodeo and festival is held in Calgary every July?",
    options: ["The Calgary Stampede", "The Wild West Rodeo", "The Prairie Festival", "The Alberta Fair"],
    answer: "The Calgary Stampede",
    category: "Culture"
  },
  {
    question: "What is Canada's official winter sport?",
    options: ["Skiing", "Curling", "Snowshoeing", "Ice Hockey"],
    answer: "Ice Hockey",
    category: "Culture"
  },
  // More Science & Nature
  {
    question: "What famous national park in Alberta is known for its turquoise lakes and mountain scenery?",
    options: ["Jasper National Park", "Banff National Park", "Yoho National Park", "Kootenay National Park"],
    answer: "Banff National Park",
    category: "Nature"
  },
  {
    question: "What animal is on the Canadian 25-cent coin (quarter)?",
    options: ["Beaver", "Moose", "Caribou", "Bear"],
    answer: "Caribou",
    category: "Nature"
  },
  {
    question: "What is the name of the large Arctic territory created in 1999 as a homeland for the Inuit people?",
    options: ["Yukon", "Northwest Territories", "Nunavut", "Labrador"],
    answer: "Nunavut",
    category: "History"
  },
  {
    question: "Which Canadian province produces the most maple syrup in the world?",
    options: ["Ontario", "New Brunswick", "Quebec", "Nova Scotia"],
    answer: "Quebec",
    category: "Nature"
  }
];

module.exports = questions;
