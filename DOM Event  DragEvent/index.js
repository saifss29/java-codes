const div = document.querySelector("div");
const p = document.querySelector("p");

p.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text", e.target.id);
});
p.addEventListener("dragover", function (e) {
  e.preventDefault();
});
p.addEventListener("drop", function (e) {
  let id = e.dataTransfer.getData("text");
  div.appendChild(document.getElementById(id));
  e.preventDefault();
});
