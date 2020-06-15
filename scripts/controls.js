//variable im using because im too lazy of always
//calling from sceneSaver lulw
var getSlide = {
    slide: sceneSaver.slide
}

function pauseGame() {
    if (document.getElementById("_pausegame").style.opacity != "100%") {
        document.getElementById("_pausegame").style.cssText = "opacity:100%;";
    } else {
        document.getElementById("_pausegame").style.cssText = "opacity:40%;";
    }
}

function nextSlide() {
    window.location.href = "scenes/scene" + getSlide.slide++;
    sceneSaver.slide++;
}

function lastSlide() {
    window.location.href = "scenes/scene" + getSlide.slide--;
    //not saving because i dont think the user would want to reset his game status lol
}

function pauseMenu() {
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 27) {
            document.getElementById("_gamearea").style.opacity = "10";
        }
    });
}