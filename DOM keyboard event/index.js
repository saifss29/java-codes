// const textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown", function () {
//   console.log("keydown");
// });

// textarea.addEventListener("keypress", function () {
//   console.log("keypress");
// });
// textarea.addEventListener("keyup", function () {
//   console.log("keyup");
// });
// textarea.addEventListener("keypress", function (e) {
//   console.log(e.keyCode);
// });
// textarea.addEventListener("keypress", function (e) {
//   console.log(e.code);
// });
// textarea.addEventListener("keypress", function (e) {
//   console.log(e.shiftKey);
// });
// textarea.addEventListener("keypress", function (e) {
//   console.log(e.ctrlKey);
// });
// textarea.addEventListener("keydown", function (e) {
//   if (e.repeat) {
//     alert("do not repeat");
//   }
// });

// //FOCUS EVENT
// // const input = document.querySelector("input");
// // input.addEventListener("blur", function (e) {
// //   // console.log(e.target.value);
// //   input.value = e.target.value.toUpperCase();

// //   //   console.log("blur has occured");
// // });
// // input.addEventListener("focus", function () {
//   //   input.style.backgroundColor = "orange";
//   //   input.style.padding = "2rem";
//   //   console.log("focus has occured");
// });
// // input.addEventListener("focusin", function () {
// //   console.log("focusin has occured");
// // });
// // input.addEventListener("focusout", function () {
// //   console.log("focusout has occured");
// // });

// CLIPBOARD EVENT
const input = document.querySelector("input");
const p = document.querySelector("p");
input.addEventListener("copy", function () {
  p.innerText("you have copied");
});
input.addEventListener("paste", function () {
  p.innerText("you have pasted");
});
input.addEventListener("cut", function () {
  p.innerText("you have cut");
});
