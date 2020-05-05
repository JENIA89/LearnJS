let a = document.querySelector("a");

// С помощью метода getAttribute() получаем содержимое данной ссылки
let OldHref = a.getAttribute("href");

// Так же мы можем испльзовать метод 'attributes' который выводит объект где находятся все атрибуты
console.log(a.attributes);

// Если нам надо чтобы наша ссылка перестала всти на Google и допутим вела на Yandex
a.setAttribute("href", "https://ya.ru");
a.setAttribute("title", "Go to Yandex");
a.textContent = "Yandex";
