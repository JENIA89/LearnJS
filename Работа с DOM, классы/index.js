let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");

// К box1 мы добавляем объект classList и у данного объекта есть набор методов, которые мы можем использовать.
// Метод add() в данном случае добавляет класс red
box1.classList.add("red");

// метод remove() удаляет, в данном случаем класс blue
// box2.classList.remove("blue");

// метод contains() проверяет, содержится ли какй-нибудь класс у элемента
let hasClass = box2.classList.contains("blue");
console.log(hasClass);
// получаем значение True т.к он есть

// Тут мы можем поиграть с JS!!! Напишем условие, если класс blue есть, то мы его удаляем, если его нет, то добавляем
if (hasClass) {
  box2.classList.remove("blue");
} else {
  box2.classList.add("blue");
}
