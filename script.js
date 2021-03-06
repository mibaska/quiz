var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

var quizTime = questions.length * 15;

var timer = document.querySelector("#timer");

var quizButton = document.querySelector("#quizButton");

var highscoreButton = document.querySelector("#highscoreButton");

var quizBox = document.querySelector("#quizBox");

quizButton.addEventListener("click", function(event) {
  event.preventDefault();

  quizBox.innerHTML = "";

  for(i = 0; i < questions.length; i++) {
    var question = document.createElement("h3");
    question.setAttribute("class", "text-center");
    question.textContent = questions[i].title;
    quizBox.appendChild(question);

    var choice1 = document.createElement("button");
    choice1.setAttribute("type", "button");
    choice1.setAttribute("class", "btn btn-secondary");
    choice1.textContent = questions[i].choices[0];
    quizBox.appendChild(choice1);
    var enter1 = document.createElement("br");
    quizBox.appendChild(enter1);

    var choice2 = document.createElement("button");
    choice2.setAttribute("type", "button");
    choice2.setAttribute("class", "btn btn-secondary");
    choice2.textContent = questions[i].choices[1];
    quizBox.appendChild(choice2);
    var enter2 = document.createElement("br");
    quizBox.appendChild(enter2);

    var choice3 = document.createElement("button");
    choice3.setAttribute("type", "button");
    choice3.setAttribute("class", "btn btn-secondary");
    choice3.textContent = questions[i].choices[2];
    quizBox.appendChild(choice3);
    var enter3 = document.createElement("br");
    quizBox.appendChild(enter3);

    var choice4 = document.createElement("button");
    choice4.setAttribute("type", "button");
    choice4.setAttribute("class", "btn btn-secondary");
    choice4.textContent = questions[i].choices[3];
    quizBox.appendChild(choice4);
  }
});