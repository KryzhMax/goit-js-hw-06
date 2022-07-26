const categoriesRef = document.querySelector("#categories");
console.log("Number of categories:", categoriesRef.children.length);

const listItems = document.querySelectorAll(".item");
listItems.forEach((element) => {
  const listTitle = element.firstElementChild;
  console.log(
    "Category:",
    listTitle.textContent,
    "Elements:",
    element.querySelectorAll("li").length
  );
});
