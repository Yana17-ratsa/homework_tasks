// Шосте завдання в домашці (модуль 7)

//TODO:

// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.



// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.



// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// 1. Розміри першого <div> елемента мають бути 30px на 30px.
// 2. Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// 3. Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.


// console.log("hi");
// const inputNumber = document.querySelector("input");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const divParent = document.querySelector("div#boxes");

// divParent.style.display = "flex";
// divParent.style.gap = "14px";
// divParent.style.flexWrap = "wrap";
    

// let numberOfBoxes;

// const clickCreateHandle = () => {
//     numberOfBoxes = parseInt(inputNumber.value);

//     if (numberOfBoxes > 0 && numberOfBoxes < 100) {
//         createBoxes(numberOfBoxes);
//     }
// }



// function clickDestroyHandle() {
//     divParent.innerHTML = "";
// }

// function createBoxes(amount) {
//     let markup = "";

//     for (let i = 0, size = 30; i < amount; i += 1, size += 10) {

//         markup += `<div class="js-div-daughter" style ="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;
//     }
//     divParent.insertAdjacentHTML("beforeend", markup);

//     console.log();
// }


// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
// }
  
// createBtn.addEventListener("click", clickCreateHandle);
// destroyBtn.addEventListener("click", clickDestroyHandle);








