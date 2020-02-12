// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout
function printNumbers(from, to) {
  setInterval(() => (from <= to ? console.log(from++) : null), 1000);
}
// ВАРИАНТ 2
function printNumbers(from, to) {
  let current = from;

  setTimeout(function start() {
    alert(current);
    if (current < to) {
      setTimeout(start, 1000);
    }
    current++;
  }, 1000);
}
