let myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function () {
  myVar.classList.add("shape");
});

myVar.addEventListener("mouseout", function () {
  myVar.classList.remove("shape");
});
