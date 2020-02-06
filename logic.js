//Document element constiables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');


  //track quiz state
  let currentQuestion = 0;
  let time = questions.length * 15;
  let timer;