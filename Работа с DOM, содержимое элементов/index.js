let div = document.querySelector("#playground");
let p = document.querySelectorAll("text");
let h1 = document.querySelector("h1");
let input = document.querySelector("input");
// С помощью св-ва 'innerHTML' меняем сщдержимое нашего div прямо в скрипте

div.innerHTML = '<h2 style="color:red;">I changed div</h2>';
console.log(div);

// С помощью св-ва 'textContent' мы можем вывести содержимое тега h1 в консоль
console.log(h1.textContent);

// Так же  с помощью св-ва 'textContent' мы можем изменить содержимое тега h1

h1.textContent = "Changed from JS";
console.log(h1);

// Выводим значения input в консоль
console.log(input.value);
