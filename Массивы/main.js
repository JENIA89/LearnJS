// 1)Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert
let arr = ["a", "b", "c"];
alert(arr);

// 2)С помощью массива arr из предыдущего номера выведите в консоль содержимое первого, второго и третьего элементов
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// 3)Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'
let arr = ["a", "b", "c", "d"];

let str = "";

for (let i = 0; i < arr.length; i++) {
  if (i == arr.length - 1) {
    str += arr[i];
  } else if (i % 2 === 0) {
    str += arr[i] + "+";
  } else {
    str += arr[i] + ", ";
  }
}
alert(str);

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.floor((styles.length - 1) / 2)] = "Классика";

alert(styles.shift());

styles.unshift("Рэп", "Регги");

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0»
function sumInput() {
  let numberArrey = [];

  while (true) {
    let value = prompt("Введите число", "0");

    if (value == "" || value == null || !isFinite(value)) break;

    numberArrey.push(+value);
  }

  let sum = 0;

  for (let number of numberArrey) {
    sum += number;
  }
  return sum;
}

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:

// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let item of arr) {
    currentSum += item;
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
}

// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите в консоль значение этой переменной

let arr = [2, 5, 3, 9];

let result = 0;
for (let i = 0; i < arr.length; i = i + 2) {
  arr[i + 1] ? (result += arr[i] * arr[i + 1]) : (result += arr[i]);
}
