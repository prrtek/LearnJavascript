const body = document.querySelector("body");
const clr = document.querySelector("#grey");
const clr1 = document.querySelector("#white");
const clr2 = document.querySelector("#blue");
const clr3 = document.querySelector("#yellow");

clr.addEventListener("click", () => {
  body.style.backgroundColor = "grey";
});

clr1.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});

clr2.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

clr3.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});
