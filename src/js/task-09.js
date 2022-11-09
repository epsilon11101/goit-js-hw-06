function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.getElementsByClassName("change-color")[0];
const text = document.getElementsByClassName("color")[0];

button.addEventListener("click", () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  text.textContent = color;
});
