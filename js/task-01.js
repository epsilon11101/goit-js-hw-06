let ul_cat = document.querySelectorAll("ul#categories li.item");

console.log(`Number of categories : ${ul_cat.length}`);

ul_cat.forEach((e, i) => {
  console.log(`Category [${i}]: ${e.firstElementChild.textContent}`);
  console.log(`Elements: ${e.lastElementChild.children.length} `);
});
