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
    var x = localStorage.getItem('level');
    window.location.href = "scene" + x;
    localStorage.setItem('level', parseInt(x) + 1)
}

function lastSlide() {
    var x = localStorage.getItem('level');
    window.location.href = "scene" + (parseInt(x) - 1);
}

function pauseMenu() {
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 27) {
            document.getElementById("_pausegame").style.cssText = "opacity:30%;";
        }
    });
}