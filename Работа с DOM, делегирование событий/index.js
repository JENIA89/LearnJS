// Получаем доступ к параграфам
// let p = document.querySelectorAll("p");

// С помощью цикла for вешаем событие на каждый параграф
// for (let i = 0; i < p.length; i++) {
//   p[i].addEventListener("click", function (event) {
//     event.target.style.color = "blue";
//   });
// }
// Но!!! если параграфов слишком много это затруднит работу нашего приложения

document.getElementById("wrapper").addEventListener("click", function (event) {
  let tagName = event.target.tagName.toLowerCase();

  if (tagName === "p") {
    event.target.style.color = "blue";
  }

  if (event.target.classList.contains("color")) {
    event.target.style.color = "red";
  }
});
