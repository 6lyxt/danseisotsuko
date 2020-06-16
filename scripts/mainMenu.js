function loadGame() {
    var x = localStorage.getItem('level');
    if(x == null){
        localStorage.setItem('level', '0');
    }
    window.location.href = "scenes/scene" + x + ".html";
}

function newGame(){
    localStorage.setItem('level', '0');
    loadGame();
}