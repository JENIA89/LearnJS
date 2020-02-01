// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

// ВАРИАНТ 2
function camelize(str) {
  let array = str.split("-");
  let myArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      myArray.push(array[i]);
    } else {
      myArray.push(array[i][0].toUpperCase(1) + array[i].slice(1));
    }
  }
  return myArray.join("");
}

// ВАРИАЕТ 3
function camelize(str) {
  let arr = str.split("-");
  let myArr = [];

  arr.forEach((item, index) => {
    index === 0 ?
      myArr.push(item) :
      myArr.push(item[0].toUpperCase() + item.slice(1));
  });
  return myArr.join("");
}

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

// ВАРИАНТ 2
function filterRange(arr, a, b) {
  let myArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      myArray.push(arr[i]);
    }
  }

  return myArray;
}

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  return arr.concat().sort();
}

// ВАРИАНТ 2
function copySorted(arr) {
  return arr.slice().sort();
}

// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.
function Calculator() {
  this.method = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function (str) {
    let culc = str.split(" ");

    a = +culc[0];
    oper = culc[1];
    b = +culc[2];

    if (!this.method[oper] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.method[oper](a, b);
  };

  this.addMethod = function (name, func) {
    this.method[name] = func;
  };
}

// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша

let vasya = {
  name: "Вася",
  age: 25
};
let petya = {
  name: "Петя",
  age: 30
};
let masha = {
  name: "Маша",
  age: 28
};

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

//  ВАРИАНТ 2
let vasya = {
  name: "Вася",
  age: 25
};
let petya = {
  name: "Петя",
  age: 30
};
let masha = {
  name: "Маша",
  age: 28
};

let users = [vasya, petya, masha];
let names = [];

users.forEach(item => names.push(item.name));

// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
let vasya = {
  name: "Вася",
  surname: "Пупкин",
  id: 1
};
let petya = {
  name: "Петя",
  surname: "Иванов",
  id: 2
};
let masha = {
  name: "Маша",
  surname: "Петрова",
  id: 3
};

let users = [vasya, petya, masha];

let usersMapped = users.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id
}));

// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя
function ortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// arr = [3, 1, 2]
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//   Получить средний возраст
//   важность: 4
//   Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

//   Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

//   Например:

//   let vasya = { name: "Вася", age: 25 };
//   let petya = { name: "Петя", age: 30 };
//   let masha = { name: "Маша", age: 29 };

//   let arr = [ vasya, petya, masha ];

//   alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
function getAverageAge(users) {
  return users.reduce((sum, current) => sum + current.age, 0) / users.length;
}

// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}