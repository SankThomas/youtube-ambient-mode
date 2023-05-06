const videoOne = document.querySelector(".video-1");
const videoTwo = document.querySelector(".video-2");

videoOne.addEventListener("play", () => {
  videoTwo.play();
});

videoOne.addEventListener("pause", () => {
  videoTwo.pause();
});

videoOne.addEventListener("repeat", () => {
  videoTwo.repeat();
});
