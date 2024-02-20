const list = document.querySelector("#categories");
const liList = list.querySelectorAll(".item");
console.log(`Number of categories: ${liList.length}`);

const categories = liList.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});