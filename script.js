(function() {
    function buildQuiz(){
//store answer choices
const output = [];

//Code for Questions, loop through each one
questions.forEach((currentQuestion, questionNumber) => {
 //we want to store the list of answer choices
 const choices = [];

//each available answer
for (choice in currentQuestion.choices){
    //radio HTML buttons
    choices.push(
       `<label>
        <input type="radio" name="question${questionNumber}" value="${choice}">
        ${choice} :
        ${currentQuestion.choices[choice]}
        </label>`
    );
}

//add question and answers to output
output.push(
    `<div class="question"> ${currentQuestion.title} </div>
    <div class="answers"> ${choices.join("")} </div>`
  );   
});

//quiz container for HTML
  quizContainer.innerHTML = output.join("");
}

//show results loop
function showResults() {
    //gather answer container from quiz
    const answerContainers = quizContainer.querySelectorAll(".choices");

    //keep track of answers
    let numCorrect = 0;

    //each question
    questions.forEach((currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=title${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        //if correct
        if(userAnswer === currentQuestion.answer) {
            //add to the number of correct answers
            numCorrect++;

            //color answers green
          answerContainer[questionNumber].style.color = 'lightgreen';
        } else {
            //wrong or blank
            //color the answers red
            answerContainer[questionNumber].style.color = 'red';
          }
        });

        // show correct answer totoal
        resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`; 
    }

//Document element constiables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();

//Timer
var counter = 15;
var interval = setInterval(function(){
    document.getElementById('counter').innerHTML=counter;
    counter--;
    if (counter === 0){
        clearInterval(interval);
        alert("You're out of time!");
    }
}, 1000);
function timer(){
    alert("Times up!");
}
