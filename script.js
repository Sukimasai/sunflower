var himawarinoyakusoku = document.getElementById("sunflowersong");

function toggleplay() {
    if (himawarinoyakusoku.paused) {
        himawarinoyakusoku.play();
        document.getElementById("sunflowerimage").classList.remove("pause");
    } else {
        himawarinoyakusoku.pause();
        document.getElementById("sunflowerimage").classList.add("pause");
    }
}

document.getElementById("sunflowerbutton").onclick = function() {
    toggleplay();
};

document.getElementById("playbutton").onclick = function() {
    himawarinoyakusoku.play();
    document.getElementById("sunflowerimage").classList.remove("pause");
};

document.getElementById("pausebutton").onclick = function() {
    himawarinoyakusoku.pause();
    document.getElementById("sunflowerimage").classList.add("pause");
};
