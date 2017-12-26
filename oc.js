// ==UserScript==
// @name         Pre-roll ad remover for OC.kg
// @version      0.1
// @description  Automatically skips pre-roll adds on oc.kg
// @author       veronix
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        http://*.oc.kg/*
// ==/UserScript==

console.log('add remover script started');
waitForKeyElements('video',() => {
    console.log('video ready');

    videojs("my_video_1").ready(function(){
        var player = this;
        player.autoplay(true);

        function skip() {
            var dur = player.duration();
            console.log("duration of ad: " + dur);
            player.currentTime(dur);
        }

        player.on('play', function() {
            if (player.src().includes('background')) {
                console.log('ad == true');
                skip();
            }
            console.log('playing');
        });
    });

});
