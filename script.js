(function () {
  //Document element constiables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  function buildQuiz() {
    //store answer choices
    const output = [];

    //Code for Questions, loop through each one
    questions.forEach((currentQuestion, questionNumber) => {

      //we want to store the list of answer choices
      const choices = [];

      //each available answer
      for (choice in currentQuestion.choices) {
        //radio HTML buttons
        choices.push(
          `<label><input type="radio" name="title${questionNumber}" value="${choice}">${choice} : ${currentQuestion.choices[choice]}</label>`
        );
      }

      //add question and answers to output
      output.push(
        `div class="slide">
         <div class="title"> ${currentQuestion.title} </div>
         <div class="choices"> ${choices.join("")} </div>`
      );
    });

    const q = output.join("\n");

    //quiz container for HTML
     quizContainer.innerHTML = q;
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
      if (userAnswer === currentQuestion.answer) {
        //add to the number of correct answers
        numCorrect++;

        //color answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      } else {
        //wrong or blank
        //color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show correct answer totoal
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
  }

  //slideshow features for single question per page
  function slideShow(n){
    slides[currentSlide].classlist.remove('active-slide');
      slides[n].classlist.add('active-slide');
        currentSlide = n;

        if (currentslide === 0 ) {
          prevButton.style.display = 'none';
        } else {
          prevButton.style.display = 'inline-block';
        }

        if (currentSlide === slides.length - 1) {
          nextButton.style.display = 'none';
          submitButton.style.display = 'inline-block';
            } else {
              nextButton.style.display = 'inline-block';
              submitButton.style.display = 'none';
            }
  }

  function showNext() {
    showSlide(currentSlide + 1);
  }

  function showPrev(){
    showSlide(currentSlide - 1);
  }

  // display quiz right away
  buildQuiz();

  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const slides = document.getElementById('.slide');
    let currentSlide = 0;
    
    showSlide(0);
  
  //on submit, show results
  submitButton.addEventListener("click", showResults);
  prevButton.addEventListener('click' , showPrev);
  nextButton.addEventListener('click' , showNext);
})();

// //Timer
// var counter = 15;
// var interval = setInterval(function(){
//     document.getElementById('counter').innerHTML=counter;
//     counter--;
//     if (counter === 0){
//         clearInterval(interval);
//         alert("You're out of time!");
//     }
// }, 1000);
// function timer(){
//     alert("Times up!");
// }
