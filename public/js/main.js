const playIconCont = document.getElementById("playIcon");
const muteIconCont = document.getElementById("muteIcon");
const audioPlayerCont = document.getElementById("audioContainer");
const seekSlider = document.getElementById("seekSlider");
const volumeSlider = document.getElementById("volumeSlider")
const audio = document.querySelector("audio");
const durationCont = document.getElementById("duration");
const currentTimeCont = document.getElementById("currentTime");
const outputCont = document.getElementById("volumeOutput");

let playState = "play";
let muteState = "unmute";
/* vs code HATES all of these but why???
function togglePlayPause(){
    if (playState === "play"){
        i class = "fa-solid fa-pause";
        playState = "pause";
    }else{
        i class = "fa-solid fa-play";
        playState = "play";
    }
}

function toggleMute(){
    if (muteState === "unmute"){
        i class = "fa-solid fa-volume";
        muteState = "mute";
    }else{
        i class = "fa-solid fa-volume-xmark";
        muteState = "unmute";
    }
} */

const showRangeProgress = (rangeInput) => {
    if(rangeInput === seekSlider) audioPlayerCont.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
    else audioPlayerCont.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
}

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});
volumeSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    durationCont.textContent = calculateTime(audio.duration);
}

const setSliderMax = () => {
    seekSlider.max = Math.floor(audio.duration);
}

const displayBufferedAmount = () => {
    const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));}