//track quiz state
let currentQuestion = 0;
let time = questions.length * 15;
let timer;

//Document element constiables
  const quizContainerEl = document.getElementById('quizContainer');
  const timerEl = document.getElementById('time');
  const choiceEL = document.getElementById('choices');
  const submitButtonEl = document.getElementById('submit');
  const startButtonEl = document.getElementById('start');
  const initialsEl = document.getElementById('initials');
  const resultsContainer = document.getElementById('results');
  

//Quiz Function
function startQuiz(){
    //hide start screen
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute('class' , 'hide');

    //show questions
    quizContainerEl.removeAttribute('class');

    //timer
    timer = setInterval(clockTick, 1000);

    //show start time
    timerEl.textContent = time;

    getQuestion();
};

  