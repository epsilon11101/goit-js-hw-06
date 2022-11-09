const input = document.getElementById("name-input");
const p_name = document.getElementById("name-output");

input.addEventListener("input", () => {
  p_name.textContent = input.value === "" ? "Anonymous" : input.value;
});
