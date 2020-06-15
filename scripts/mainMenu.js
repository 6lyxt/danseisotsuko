function loadGame() {
    window.location.href = "scenes/scene" + level.number + ".html";
}

function newGame(){
    level.number = 1;
    loadGame();
}