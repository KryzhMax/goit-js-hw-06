const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const potato = document.createElement("li");
potato.classList.add("item", "potato");
potato.textContent = "Potatoes";

const mushroom = document.createElement("li");
mushroom.classList.add("item", "mushroom");
mushroom.textContent = "Mushrooms";

const garlic = document.createElement("li");
garlic.classList.add("item", "garlic");
garlic.textContent = "Garlic";

const tomato = document.createElement("li");
tomato.classList.add("item", "tomato");
tomato.textContent = "Tomatoes";

const herbs = document.createElement("li");
herbs.classList.add("item", "herbs");
herbs.textContent = "Herbs";

const condiments = document.createElement("li");
condiments.classList.add("item", "condiments");
condiments.textContent = "Condiments";

const list = document.querySelector("#ingredients");
list.append(potato, mushroom, garlic, tomato, herbs, condiments);
console.log(list);
