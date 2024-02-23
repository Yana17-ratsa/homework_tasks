// П'яте завдання в домашці (модуль 7)

//TODO:

// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

const changeButton = document.querySelector("button.change-color");

const output = document.querySelector("span.color");

changeButton.addEventListener("click", clickHandle);

function clickHandle(event) {
    const body = document.body.style;
    body.backgroundColor = getRandomHexColor();
    output.textContent = body.backgroundColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


  //TODO: Yaaaaaay! ready!