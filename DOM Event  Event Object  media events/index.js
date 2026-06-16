const video = document.querySelector("video");
video.addEventListener("canplay", function () {
  console.log("canplay");
});
video.addEventListener("play", function () {
  console.log("play");
});
video.addEventListener("playing", function () {
  console.log("playing");
});

video.addEventListener("pause", function () {
  console.log("pause");
});
video.addEventListener("ended", function () {
  console.log("Thanks for watching");
});
video.addEventListener("volumechange", function () {
  console.log("volumechange");
});

window.addEventListener("load", function () {
  console.log("load");
});
window.addEventListener("unload", function () {
  console.log("unload");
});
window.addEventListener("scroll", function () {
  console.log("scroll");
});
window.addEventListener("resize", function () {
  const width = window.outerWidth;
  const height = window.outerHeight;
  console.log(`height:${height} width:${width}`);
});
const details = document.querySelector("details");
details.addEventListener("toggle", function (e) {
  console.log(e.target.open);
});
