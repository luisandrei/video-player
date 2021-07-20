const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress');
const $mute = document.querySelector('#mute')


$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$backward.addEventListener('click',handleBackward)
$forward.addEventListener('click',handleForward)


function handlePlay(){
  $video.play()
  $play.hidden = true;
  $pause.hidden = false;
}
function handlePause(){
  $video.pause()
  $play.hidden = false;
  $pause.hidden = true;
}
function handleBackward(){
  $video.currentTime = $video.currentTime  - 10;
  //$video.currentTime -= 10;

}
function handleForward(){
  $video.currentTime = $video.currentTime  + 10;
  //$video.currentTime += 10;
}

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$mute.addEventListener('click', handleMute);

function handleLoaded(){
  $progress.max = $video.duration;
}
function handleTimeUpdate(){
  $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput);

function handleInput(){
  $video.currentTime = progress.value;
}

function handleMute() {
  $video.muted = !$video.muted;
}