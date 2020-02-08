function displayHighScore() {
    //get scores from local storage
    let highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    //sort by score in descending order
    highScores.sort(function(a, b){
        return b.score - a.score;
    });

    highScores.forEach(function(score){
        //create list item for each high score displayed
        const liTag = document.createElement('li');
        liTag.textContent = score.initials + ' - ' + score.score;

        //display score to page
        let olEl = document.getElementById('highscores');
        olEl.appendChild(liTag);
    });
}

function clearHighScores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
}

document.getElementById('clear').onclick = clearHighScores;

//run function on page load

displayHighScore();