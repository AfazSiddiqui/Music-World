let song = document.getElementById("songs");
let ctrlIcon = document.getElementById("control");
let progress = document.getElementById("move");

song.onloadeddata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playpause(){
  if(ctrlIcon.classList.contains("fa-pause")){
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
  else{
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    
    if(song.played){
      setInterval(()=>{
        progress.value = song.currentTime;
      },500);
    }
  }
}

progress.onchange = function(){
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}
