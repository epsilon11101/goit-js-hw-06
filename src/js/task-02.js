const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

ingredients.map((ing) => {
  let li = document.createElement("li");
  li.textContent = ing;
  li.classList = "item";
  ul.append(li);
});
