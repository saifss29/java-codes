var photoes = ["imgaes/madara.jpg", "images/naruto.jpg", "images/sasuke.jpg"];
var imgTag = document.querySelector("img");

var count = 0;
function next() {
  count++;

  if (count >= photoes.length) {
    count = 0;
    imgTag.src = photoes[count];
  } else {
    imgTag.src = photoes[count];
  }
}

function prev() {
  count--;

  if (count < 0) {
    count = photoes.length - 1;
    imgTag.src = photoes[count];
  } else {
    imgTag.src = photoes[count];
  }
}
