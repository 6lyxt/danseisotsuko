//variable im using because im too lazy of always
//calling from sceneSaver lulw
function pauseGame() {
    if (document.getElementById("_pausegame").style.opacity != "1") {
        document.getElementById("_pausegame").style.cssText = "opacity:100%;";
    } else {
        document.getElementById("_pausegame").style.cssText = "opacity:30%;";
    }
}

function nextSlide() {
    var slide = level.number + 1;
    window.location.href = "scenes/scene" + slide;
    level.number = level.number + 1;
}

function lastSlide() {
    window.location.href = "scenes/scene" + parseInt(level.number) - 1;
    //not saving because i dont think the user would want to reset his game status lol
}

function pauseMenu() {
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 27) {
            document.getElementById("_pausegame").style.cssText = "opacity:30%;";
        }
    });
}