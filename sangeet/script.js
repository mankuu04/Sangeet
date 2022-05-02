 console.log("hello world");
// initialized the variable
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Brown Munde",
    filePath: "songs/1.mp3",
    coverPath: "covers/cover1.jpg",
  },
  {
    songName: "Excuses",
    filePath: "songs/2.mp3",
    coverPath: "covers/cover2.jpg",
  },
  {
    songName: "Insane",
    filePath: "songs/3.mp3",
    coverPath: "covers/cover3.jpg",
  },
  {
    songName: "Spaceship",
    filePath: "songs/4.mp3",
    coverPath: "covers/cover4.jpg",
  },
  {
    songName: "Toxic",
    filePath: "songs/5.mp3",
    coverPath: "covers/cover5.jpg",
  },
  { songName: "Goat", filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg" },
  {
    songName: "Ma belle",
    filePath: "songs/7.mp3",
    coverPath: "covers/cover7.jpg",
  },
  {
    songName: "Majhail",
    filePath: "songs/8.mp3",
    coverPath: "covers/cover8.jpg",
  },
  { songName: "War", filePath: "songs/9.mp3", coverPath: "covers/cover9.jpg" },

  {
    songName: "We Rollin",
    filePath: "songs/10.mp3",
    coverPath: "covers/cover10.jpg",
  },
  {
    songName: "Elevated",
    filePath: "songs/11.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Teeji Seat",
    filePath: "songs/12.mp3",
    coverPath: "covers/cover12.jpg",
  },
  {
    songName: "Kale Je Libaas Di",
    filePath: "songs/13.mp3",
    coverPath: "covers/cover13.jpg",
  },
  {
    songName: "Temporary Pyar",
    filePath: "songs/14.mp3",
    coverPath: "covers/cover14.jpg",
  },
  {
    songName: "Bijlee Bijlee",
    filePath: "songs/15.mp3",
    coverPath: "covers/cover15.jpg",
  },
  {
    songName: "Born To Shine",
    filePath: "songs/16.mp3",
    coverPath: "covers/cover16.jpg",
  },
  {
    songName: "LOVER",
    filePath: "songs/17.mp3",
    coverPath: "covers/cover17.jpg",
  },
  {
    songName: "G.O.A.T",
    filePath: "songs/18.mp3",
    coverPath: "covers/cover18.jpg",
  },
  {
    songName: "Putt Jatt Da",
    filePath: "songs/19.mp3",
    coverPath: "covers/cover19.jpg",
  },
  {
    songName: "5 Taara",
    filePath: "songs/20.mp3",
    coverPath: "covers/cover20.jpg",
  },
  
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();
// handle pause/play
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});
// listen to event
audioElement.addEventListener("timeupdate", () => {
  // update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
