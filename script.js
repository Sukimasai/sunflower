var himawarinoyakusoku = document.getElementById("sunflowersong");
var playpause = false;

function toggleplay() {
    if (himawarinoyakusoku.paused) {
        himawarinoyakusoku.play();
        document.getElementById("sunflowerimage").classList.remove("pause");
        playpause = true;
    } else {
        himawarinoyakusoku.pause();
        document.getElementById("sunflowerimage").classList.add("pause");
        playpause = false;
    }
}

document.getElementById("sunflowerbutton").onclick = function() {
    toggleplay();
};

document.getElementById("playbutton").onclick = function() {
    himawarinoyakusoku.play();
    document.getElementById("sunflowerimage").classList.remove("pause");
    playpause = true;
};

document.getElementById("pausebutton").onclick = function() {
    himawarinoyakusoku.pause();
    document.getElementById("sunflowerimage").classList.add("pause");
    playpause = false;
};
