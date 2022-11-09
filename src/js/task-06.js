const input = document.getElementById("validation-input");
let len = parseInt(input.getAttribute("data-length"));
input.addEventListener("blur", () => {
  let class_before = input.className;
  let class_name = input.value.length > len ? "invalid" : "valid";

  if (class_before) {
    input.classList.remove(class_before);
  }
  input.classList.add(class_name);
});
