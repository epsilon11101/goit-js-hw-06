const slide = document.getElementById("font-size-control");
const span = document.getElementById("text");

slide.addEventListener("input", () => {
  span.style.fontSize = `${slide.value}px`;
});
