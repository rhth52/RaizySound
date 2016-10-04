var MP3 = new Audio();
MP3.src = "sound.mp3";

var isPlaying = false;

function playSound()
{
    MP3.play();
    isPlaying = true;
    chrome.browserAction.setBadgeText({text: "on"});
}

function pauseMP3()
{
    MP3.pause();
    isPlaying = false;
    chrome.browserAction.setBadgeText({text: "off"});
}

MP3.addEventListener('ended', function()
{
    this.currentTime = 0;
    playMP3();
}
, false);
