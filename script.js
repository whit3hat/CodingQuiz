//Document element variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//Functions
function buildQuiz(){
//function showResults()
//function timer()

//Displays Quiz
buildQuiz();
var output = [];
questions.forEach(
    (currentQuestion, questionNumber) => {
        var answers = [];
        for(choice in currentQuestion.answers){
            answers.push(
                <label>
                    <input type="radio" name="questions${questionNumber}" value="${choice}">
                        ${choice} :
                        ${currentQuestion.answers[choice]}
                    </input>
                </label>
            );
        }
    output.push(
       `<div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join('')}</div>`
    );
    }
);
quizContainer.innerHTML = output.join('');
}

//Code for Questions, loop through each one
myQuestions.forEach( (currentQuestion, questionNumber) => {

});

//store answer choices
var answers = [];

//each available answer
for(letter in currentQuestion.answers){

    answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion, answers[letter]}
        </label>`
    );
}

//add question and answers to output
output.push(
    `<div class="question">${currentQuestion, questions} </div>
    <div class="answers">${answers.join('')}</div>`
);

//quiz container for HTML
quizContainer.innerHTML = output.join('');

//show results loop
function showResults(){
    //gather answer container from quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    //keep track of answers
    let numCorrect = 0;
    //each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        //find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = 'input[name=question'+questionNumber+']:checked';
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
        //if correct
        if(userAnswer===currentQuestion.correctAnswer){
            //add to the number of correct answers
            numCorrect++;
            //color answers green
            answerContainer[questionNumber].style.color = 'lightgreen';
        }
        else{
            //color the answers red
            answerContainer[questionNumber].style.color = 'red';
        }
        });
        // show correct answer totoal
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length; 
}

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




//On Submit show quiz results
//submitButton.addEventListener('click', showResults);



