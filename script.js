document.addEventListener("DOMContentLoaded", function() {
    var himawarinoyakusoku = document.getElementById("sunflowersong");
    var playpause = false;

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
        document.getElementById("sunflowerimage").classList.add("sunfloweranimation");
        document.getElementById("sunflowerimage").classList.toggle("pause");
        himawarinoyakusoku.play();
        toggleplay();
    }

    document.getElementById("playbutton").onclick = function(){
        himawarinoyakusoku.play();
    }

    document.getElementById("pausebutton").onclick = function(){
        himawarinoyakusoku.pause();
    }
});
