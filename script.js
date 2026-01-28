const questions = [
  {
    Question: "What software company is headquartered in Redmond, Washington?",
    Answers: [
      { text: "Amazon", correct: false },
      { text: "Microsoft", correct: true },
      { text: "Sony", correct: false },
      { text: "EA Games", correct: false },
    ],
  },
  {
    Question:
      "What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
    Answers: [
      { text: "Synonym", correct: false },
      { text: "Noun", correct: false },
      { text: "Antonym", correct: false },
      { text: "Palindrome", correct: true },
    ],
  },
  {
    Question: "What is the worlds largest retailer as of 2026?",
    Answers: [
      { text: "Asda", correct: false },
      { text: "Facebook Marketplace", correct: false },
      { text: "Walmart", correct: true },
      { text: "TK Maxx", correct: false },
    ],
  },
  {
    Question: "Which day of the week does the Jewish Sabbath begin?",
    Answers: [
      { text: "Friday", correct: true },
      { text: "Saturday", correct: false },
      { text: "Monday", correct: false },
      { text: "Thursday", correct: false },
    ],
  },
  {
    Question: "What phone company produced the 3310?",
    Answers: [
      { text: "Blackberry", correct: false },
      { text: "Nokia", correct: true },
      { text: "iPhone", correct: false },
      { text: "Sony Ericsson", correct: false },
    ],
  },
  {
    Question: "What company was initially known as Blue Ribbon Sports?",
    Answers: [
      { text: "Fred Perry", correct: false },
      { text: "Adidas", correct: false },
      { text: "Nike", correct: true },
      { text: "Reebok", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestionIndex = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}
