// Получаем доступ к элементам
let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let input = document.querySelector("input");

//   Меняем заголовок с помощью введенного в input значения
function buttonHandler() {
  console.log("clicked");
  h1.textContent = input.value;
}

// Второй способ передать функцию
// Меняем цвет заголовка и БГ при наведении на него мышью
h1.addEventListener("mouseenter", function () {
  console.log("Mouse has entered h1");
  this.style.color = "red";
  this.style.backgroundColor = "yellow";
});

// Возвращаем цвет заголовка и БГ после отвода мышки от него
h1.addEventListener("mouseleave", function () {
  console.log("Mouse has left h1");
  this.style.color = "black";
  this.style.backgroundColor = "transparent";
});

// С помощью метода addEventListener(), мы передаем какое либо событие нашей кнопке
button.addEventListener("click", buttonHandler);
