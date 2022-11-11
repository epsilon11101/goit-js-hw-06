let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let val = document.getElementById("value");
val.innerText = counterValue;
increment.addEventListener("click", () => {
  val.innerText = ++counterValue;
});
decrement.addEventListener("click", () => {
  val.innerText = --counterValue;
});
