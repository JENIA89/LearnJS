// Доступ к элементам
// let div = document.getElementById("playground");
// console.log(div);
// let p = document.getElementsByClassName("text");
// console.log(p); /* Получаем псевдомассив */
// let h1 = document.getElementsByTagName("h1");
// console.log(h1);/* Получаем псевдомассив */

//  Ниже мы сделаем тоже самое, но используем более новые методы!
// class -> .class_name
// id -> #id
// tag -> tag_name

let div = document.querySelector("#playground");
console.log(div);

let p = document.querySelectorAll(".text");
console.log(p);
/* Получаем псевдомассив, querySelectorAll принимает точно такие же параметры как и querySelector, но уже возвращает коллекцию*/

let h1 = document.querySelector("h1");
console.log(h1);
// Получаем доступ к данному тегу
