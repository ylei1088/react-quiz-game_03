import he from "he";

// This will eventually come from a server!
let triviaData = [
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "Rhinoplasty is a surgical procedure on what part of the human body?",
    correct_answer: "Nose",
    incorrect_answers: ["Ears", "Chin", "Neck"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the game Half-Life, which enemy is showcased as the final boss?",
    correct_answer: "The Nihilanth",
    incorrect_answers: ["Dr. Wallace Breen", "G-Man", "The Gonarch"],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question: "By what name was the author Eric Blair better known?",
    correct_answer: "George Orwell",
    incorrect_answers: ["Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these online games was originally named LindenWorld in it&#039;s early development?",
    correct_answer: "SecondLife",
    incorrect_answers: ["ActiveWorlds", "IMVU", "HabboHotel"],
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "hard",
    question:
      "TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "medium",
    question:
      "To the nearest whole number, how many radians are in a whole circle?",
    correct_answer: "6",
    incorrect_answers: ["3", "4", "5"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In WarioWare: Smooth Moves, which one of these is NOT a Form?",
    correct_answer: "The Hotshot",
    incorrect_answers: ["The Discard", "The Elephant", "The Mohawk"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which Pokemon generation did the fan-named &quot;Masuda Method&quot; first appear in? ",
    correct_answer: "Diamond/Pearl",
    incorrect_answers: ["Ruby/Sapphire", "Black/White", "X/Y"],
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who was Firestorm&#039;s rival during the original run of UK Robot Wars?",
    correct_answer: "Panic Attack",
    incorrect_answers: ["Razer", "Chaos 2", "Hypno Disc"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of Rivers Cuomo&#039;s wife?",
    correct_answer: "Kyoko Ito",
    incorrect_answers: ["Yoko Ono", "Kyary Pamyu Pamyu", "LiSA"],
  },
];

triviaData = triviaData.map((item) => {
  return {
    ...item,
    question: he.decode(item.question),
    correct_answer: he.decode(item.correct_answer),
    incorrect_answers: item.incorrect_answers.map((incorrect) =>
      he.decode(incorrect)
    ),
  };
});

// triviaData = triviaData.slice(0, 2);

export default triviaData;
