// Третє завдання в домашці (модуль 7)


//TODO:
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".



const inputName = document.querySelector("input#name-input");
const spanName  = document.querySelector("span#name-output");

inputName.addEventListener("input", handleInput)

function handleInput(event) {
    console.log(event.currentTarget.value);

    const valueTarget = event.currentTarget.value.trim();

    if(valueTarget === "") {
        spanName.textContent = "Anonymous";
    } else {
    spanName.textContent = valueTarget;
    }

    return spanName
}