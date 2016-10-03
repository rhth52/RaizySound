var myAudio = new Audio();
myAudio.src = "sound.mp3";

var isPlaying = false;

function playSound()
{
    myAudio.play();
    isPlaying = true;
    chrome.browserAction.setBadgeText({text: "on"});
}

function pauseMP3()
{
    myAudio.pause();
    isPlaying = false;
    chrome.browserAction.setBadgeText({text: "off"});
}

myAudio.addEventListener('ended', function()
{
    this.currentTime = 0;
    playMP3();
}
, false);
