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
}

function Questions(){
    //current question
    let currentQuestion = questions[currentQuestion];

    //update with current question
    let titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;

    //clear old question choice
    choiceEL.innerHTML = '';

    //loop through choices
    currentQuestion.choices.forEach(function(choice, i){
        //create new button for each question
        const choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class' , 'choice');
        choiceBtn.setAttribute('value' , choice);

        choiceBtn.textContent = i + 1 + '. ' + choice;

        //click event for choice
        choiceBtn.onclick = questionClick;

        //display on page
        choiceEL.appendChild(choiceBtn);
    });
        
}

  function questionClick() {
      //check if user is wrong
      if (this.value !== questions[currentQuestion].answer) {
          //subtract time if wrong
          time -= 15;

          if (time < 0) {
              time = 0;
          }

          //update time on page
          timerEl.textContent = time;

          resultsContainer.textContent = 'Sorry, wrong.';
      } else
       {
           resultsContainer.textContent = 'You got it!';
       }

       //show right/wrong feedback on page for .5 sec
       resultsContainer.setAttribute('class' , 'feedback');
       setTimeout(function(){
           resultsContainer.setAttribute('class' , 'feedback hide');
       }, 1000);

       //next question
       currentQuestion++;

       //check if thats the last question
       if (currentQuestion === questions.length){
           quit();
       } else
       {
         getQuestion();
       }
  }


function quit() {
    //stop time
    clearInterval(timer);

    //show end page
    const endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');

    //final score
    let finalScoreEl = document.getElementById('finalScore');
    finalScoreEl.textContent = time;

    //hide questions
    quizContainerEl.setAttribute('class' , 'hide');
}

function clockTick() {
    //update time
    time--;
    timerEl.textContent = time;

    //check if user is out of time
    if (time <= 0) {
        quit();
    }
}

function highScore() {
    //get initials
    let initials = initialsEl.value.trim();

    //make sure its got letters
    if (initials !== '') {
        //get saved score from local storage
        let highScore = JSON.parse(window.localStorage.getItem('highscores')) || [];

        //format new score for current
        let newScore = {
            score: time,
            initials: initials
        };

        //save to local storage
        highScore.push(newScore);
        window.localStorage.setItem('highscores' , JSON.stringify(highScore));

        //show high scores page
        window.location.href = 'highscores.html';
    }
}