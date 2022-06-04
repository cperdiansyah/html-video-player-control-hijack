// Add this code to the console bar in google dev tools so that seek video can run

// Check your video player id by inspecting the element on the video
const id_video_player = '#movie_player'

var video = document.querySelector(id_player);

function allowMove() {
  $('input[id$="btnNext"]').removeAttr('disabled');
  $('input[id$="videoFlag"]').val("1");
}

function getpos() {
  if (!(video.seeking)) {
    curpos = video.currentTime;
  }
  console.log(curpos)
}
onesecond = setInterval('getpos()', 1000);

function setPos() {
  var ct = video.currentTime;
  if (ct > curpos) {
    video.currentTime = curpos;
  }
}
