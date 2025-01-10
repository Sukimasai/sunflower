var himawarinoyakusoku = document.getElementById("sunflowersong");
var playpause = true;

function toggleplay(){
    if (playpause) {
        himawarinoyakusoku.pause();
    } else {
        himawarinoyakusoku.play();
    }

    himawarinoyakusoku.onplay = function(){
        playpause = true;
    }

    himawarinoyakusoku.onpause = function(){
        playpause = false;
    }
}

document.getElementById("sunflowerbutton").onclick = function() {
    document.getElementById("sunflowerimage").classList.toggle("sunfloweranimation");
    toggleplay();
}

document.getElementById("playbutton").onclick = function(){
    himawarinoyakusoku.play();
}

document.getElementById("pausebutton").onclick = function(){
    himawarinoyakusoku.pause();
}
