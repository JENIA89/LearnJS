// Тролли атакуют ваш раздел комментариев!
// Распространенный способ справиться с этой ситуацией - убрать все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку со всеми удаленными гласными.
// Например, строка «This site is for losers lol!» стал бы "Ths wbst s fr lsrs LL!"
// у не считается гласным.
function changeStr(str) {
  let myStr = str.toLowerCase().split("");

  myStr.forEach(function(item, index) {
    if (
      item == "a" ||
      item == "e" ||
      item == "i" ||
      item == "o" ||
      item == ""
    ) {
      myStr.splice(index, 1);
    }
  });

  return myStr.join("");
}

// ВАРИАНТ 2

function changeStr(str) {
  let myStr = str.toLowerCase().split("");

  for (let i = 0; i < myStr.length; i++) {
    let value = myStr[i];
    if (value == "a" || value == "i" || value == "o" || value == "e") {
      myStr.splice(i, 1);
      i--;
    }
  }
  return myStr.join("");
}

// В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вы должны вернуть самое высокое и самое низкое число.

// list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6") ----> "666 -123"

let list = "4 5 29 54 4 0 -123 666 -64 1 -3 6 -6";

let arr = list.split(" ").map(item => parseInt(item));

console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));
// ВАРИАНТ 2

let list = "4 5 29 54 4 0 -123 666 -64 1 -3 6 -6";

let arr = list.split(" ").map(item => parseInt(item));

let max = 0;
let min = 0;
for (let num of arr) {
  if (num > max) {
    max = num;
  } else if (num < min) {
    min = num;
  }
}

console.log(max);
console.log(min);

// Написать функцию
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(str) {
  return str
    .split("")
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join("-");
}
// Вариант 2

function accum(str) {
  let newStr = [];

  Array.from(str);

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      newStr.push(str[i].toUpperCase());
    } else {
      newStr.push(str[i].toUpperCase() + str[i].toLowerCase().repeat([i]));
    }
  }
  return newStr.join("-");
}

// Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

// Если функции передана правильная строка PIN, верните true, иначе верните false.
let pin = "4844";

function chekPin(str) {
  return (pin.length == 4 || pin.length == 6) && !isNaN(pin) ? true : false;
}

// Напишите функцию, которая возвращает минимальное и максимальное количество заданного массива.
minMaxArray = arr => {
  return [Math.min(...arr), Math.max(...arr)];
};

// ВАРИАНТ 2
let arr = [2342, 435, 3, -435, 525, 4, 6, 26, 6];

minMaxArray = arr => {
  let results = [];

  arr
    .sort((a, b) => a - b)
    .find(
      (item, index, array) =>
        results.push(arr[0]) && results.push(arr[arr.length - 1])
    );

  return results;
};

// ВАРИАНТ 3
minMaxArray = arr => {
  let array = [];

  array.push(Math.max.apply(null, arr));
  array.push(Math.min.apply(null, arr));

  return array;
};

// Написать функцию Simple, которая учитывая строку слов, возвращает длину самого короткого слова.

// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
let str = "hello my dear";

simple = str => {
  let shotStr = str.split(" ").map(item => item.length);

  return Math.min(...shotStr);
};

// Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как «Малыш каратэ» (2010) и «После Земли» (2013). Джейден также известен своей философией, которую он передает через Twitter. Когда он пишет в Твиттере, он известен почти всегда заглавными буквами каждого слова. Для простоты вам придется использовать каждое слово с заглавной буквы, посмотрите, как ожидаются сокращения в приведенном ниже примере.

// Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом. Строки являются реальными цитатами из Jaden Smith, но они не пишутся с большой буквы так же, как он их первоначально напечатал.
str = "привет Как дела? хорошо, А твои";

function schangtStr(str) {
  let newStr = str
    .split(" ")
    .map(item => item[0].toUpperCase() + item.toLowerCase().slice(1))
    .join(" ");

  return newStr;
}
// ВАРИАНТ 2 С ИСПОЛЬЗОВАНИЕМ  substring
function schangtStr(str) {
  let newStr = str
    .split(" ")
    .map(
      item =>
        item[0].toUpperCase() + item.toLowerCase().substring(1, item.length)
    )
    .join(" ");

  return newStr;
}

// Вы можете знать несколько довольно больших идеальных квадратов. Но как насчет следующего?
// Завершите метод findNextSquare, который находит следующий целочисленный идеальный квадрат после того, как передан в качестве параметра. Напомним, что целочисленный совершенный квадрат - это такое целое число n, что sqrt (n) также является целым числом.
// Если параметр сам по себе не является идеальным квадратом, то должно быть возвращено -1. Вы можете предположить, что параметр положительный.

// findNextSquare = (sq) => {

// return
// }
findNextSquare = sq => {
  let num = Math.sqrt(sq);

  return num % 1 ? -1 : (num + 1) ** 2;
};
