function loadGame() {
    window.location.href = "scenes/scene" + saveConfig() + ".html";
}

function newGame(){
    //level.number = 1;
    loadGame();
}