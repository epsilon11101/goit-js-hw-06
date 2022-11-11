const input = document.querySelector('[type="number"]');
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const parent_div = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getInputValue() {
  return parseInt(input.value);
}

function createDivs(howmany) {
  const el = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < howmany; i++) {
    el.push(
      `<div id=${i} style="background-color:${getRandomHexColor()};max-width:${width}px;min-height:${height}px;"></div>`
    );
    width += 10;
    height += 10;
  }
  return el.join("");
}

function destroyDivs() {
  let remove_divs = [...boxes.children];
  remove_divs.map((e) => {
    let element = document.getElementById(e.getAttribute("id"));
    element.remove();
  });
}

create.addEventListener("click", () => {
  let value = getInputValue();
  if (boxes.children.length > 0) {
    destroyDivs();
  }
  if (value > 0 && value) {
    parent_div.insertAdjacentHTML("afterbegin", createDivs(value));
  }
});

destroy.addEventListener("click", () => {
  if (boxes.children.length > 0) {
    destroyDivs();
  }
});
