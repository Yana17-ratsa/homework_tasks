// З 22.02.2024. Модуль 7 Заняття 2. Частина 2

//TODO: Заборона копіювання

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
console.log(event);
  //// перевіряємо, що була натиснута клавіша C і при цьому була затиснута або клавіша ctrl або клавіша command
    if((event.ctrlKey || event.metaKey) && event.code === "KeyC") {
        //alert("Ви скопіювали текси! Не робіть так!!!");
        event.preventDefault();
    } 
}

