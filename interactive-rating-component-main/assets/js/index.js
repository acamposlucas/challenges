const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");

const button = document.getElementById("submit");

button.addEventListener("click", () => {
  showHiddenBox(), showRating();
});

function showHiddenBox() {
  box1.style.display = "none";
  box2.style.display = "grid";
}

function showRating() {
  const inputValue = document.querySelector(
    'input[name="ratings"]:checked'
  ).value;
  const selectedInput = document.getElementById("selectedInput");

  selectedInput.innerHTML = inputValue;
}
