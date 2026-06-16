// document
//   .querySelectorAll(".mybutton")[0]
//   .addEventListener("click", function () {
//     let text = this.innerHTML;
//     document.querySelector("h1").innerHTML = "" + "you have clicked1";
//   });

// document
//   .querySelectorAll(".mybutton")[1]
//   .addEventListener("click", function () {
//     let text = this.innerHTML;
//     document.querySelector("h1").innerHTML = "" + "you have clicked2";
//   });

// document
//   .querySelectorAll(".mybutton")[2]
//   .addEventListener("click", function () {
//     let text = this.innerHTML;
//     document.querySelector("h1").innerHTML = "" + "you have clicked3";
//   });

// to simplify the same code

let len = document.querySelectorAll(".mybutton").length;

for (var i = 0; i < len; i++) {
  document
    .querySelectorAll(".mybutton")
    [i].addEventListener("click", function () {
      let text = this.innerHTML;
      document.querySelector("h1").innerHTML = "" + "is clicked";
    });
}
