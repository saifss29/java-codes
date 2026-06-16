// ANS from chatgpt

for (let i = 0; i < 3; i++) {
  document
    .querySelectorAll(".button")
    [i].addEventListener("click", function () {
      let text = this.innerHTML;
      console.log(text);

      audioPlay(text);
      animePlay(text);
    });
}

document.addEventListener("keypress", function (event) {
  let every = event.key;
  audioPlay(every);
  animePlay(every);
});

function audioPlay(text) {
  switch (text) {
    case "a":
      new Audio("sounds/a.mp3").play();
      break;

    case "b":
      new Audio("sounds/b.mp3").play();
      break;

    case "c":
      new Audio("sounds/c.mp3").play();
      break;
  }
}

function animePlay(text) {
  let select = document.querySelector("." + text);
  select.classList.add("anim");

  setTimeout(function () {
    select.classList.remove("anim");
  }, 1000);
}
