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

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
function longest(s1, s2) {
  let arr = Array.from(new Set(s1 + s2));
  return arr.sort().join("");
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
function isIsogram(str) {
  return str.length == new Set(str.toLowerCase()).size;
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number
function persistence(num) {
  let times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
function findUniq(arr) {
  arr.sort();
  if (arr[0] == arr[1]) {
    return arr[arr.length - 1];
  }

  return arr[0];
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
function createPhoneNumber(numbers) {
  let result = numbers.concat();
  result.splice(0, 0, "(");
  result.splice(4, 0, ")");
  result.splice(5, 0, " ");
  result.splice(9, 0, "-");

  return result.join("");
}


// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
function duplicateEncode(word){
  let result = '';
   
  let myWord = word.toLowerCase();
   
   for (var i = 0; i < myWord.length; i++) {
     
     if (myWord.indexOf(myWord[i]) === myWord.lastIndexOf(myWord[i])) {
       
       result += "("; 
       
     } else {     
       
       result += ")";   
     }
   }

  //  ВАРИАНТ 2
  function duplicateEncode(word){
    let result = '';
     
    let myWord = word.toLowerCase();
     
    myWord.split('').map((item,i) => (myWord.indexOf(item) ==  myWord.lastIndexOf(item)) ? result += '(' : result += ')').join('')
    
      return result;
     }


//      A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7
function digital_root(n) {
  return (n.toString().length == 1) ? n : 
  digital_root(Number(n).toString().split('').reduce((current, i)=> Number(current) + Number(i),0 ))
    
    
  }


//   Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
function pigIt(str){

  return str.split(' ').map(word => word.substr(1) + word[0] + 'ay').join(' ');
}


// На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые для простоты названы буквами от a до m.

// Цвета, используемые принтером, записываются в управляющую строку. Например, «хорошая» управляющая строка будет aaabbbbhaijjjm, что означает, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a ...

// Иногда возникают проблемы: возникает недостаток цветов, техническая неисправность и «плохая» контрольная строка, например aaaxbbbbyyhwawiwjjjwwm с письмами не от а до м.

// Вы должны написать функцию printer_error, которая для данной строки будет выводить коэффициент ошибок принтера в виде строки, представляющей рациональное число, числитель которого равен числу ошибок, а знаменатель - длине управляющей строки. Не уменьшайте эту дробь до более простого выражения.

// Строка имеет длину, большую или равную единице, и содержит только буквы от a до z.
let str = 'aaaxbbbbyyhwawiwjjjwwm';

function printer_error(str){

  let mistakeLetters = []
      
   str.split('')
   .map((item, i)=> (item == 'n' || item == 'o' || item == 'p' ||item == 'q' || item == 'r' || item == 's' || item == 't' || item == 'u' || item == 'v' || item == 'w' || item == 'x' || item == 'z') ? mistakeLetters.push(item) : undefined) 
  
  let result = mistakeLetters.length + '/' + str.length;
  
  
  return result;
  
  }

  // ВАРИАНТ 2

  function printer_error(str){

    let mistakeLetters = str.match(/n|o|p|q|r|s|t|u|v|w|x|z/g);
    
    let result = mistakeLetters.length +'/' + str.length;
    
    return result;
   }
