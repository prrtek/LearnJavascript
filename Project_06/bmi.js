const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const bmi = weight / ((height * height) / 10000).toFixed(2);
  result.innerHTML = `${bmi}`;

  const sp = document.querySelector(".res");

  if (bmi > 24.9) {
    sp.innerHTML = "Overweight";
  } else if (bmi > 18.6 && bmi <= 24.9) {
    sp.innerHTML = "Normal";
  } else {
    sp.innerHTML = "Underweight";
  }
});
