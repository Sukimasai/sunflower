var himawarinoyakusoku = document.getElementById("sunflowersong");
var playpause = true;

function toggleplay(){
    if (playpause) {
        himawarinoyakusoku.pause();
        document.getElementById("sunflowerimage").classList.add("pause");
    } else {
        himawarinoyakusoku.play();
        document.getElementById("sunflowerimage").classList.remove("pause");
    }

    himawarinoyakusoku.onplay = function(){
        playpause = true;
    }

    himawarinoyakusoku.onpause = function(){
        playpause = false;
    }
}

document.getElementById("sunflowerbutton").onclick = function() {
    toggleplay();
}

document.getElementById("playbutton").onclick = function(){
    himawarinoyakusoku.play();
}

document.getElementById("pausebutton").onclick = function(){
    himawarinoyakusoku.pause();
}
