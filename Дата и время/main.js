// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.
let date = new Date(2012, 1, 20, 3, 12);
alert(date);
// ВАРИАНТ 2
let date = new Date(Date.parse("2012-02-20T03:12"));
alert(date);

// Покажите день недели
// важность: 5
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"
let date = new Date(2012, 0, 3);

function getWeekDay(date) {
  let week = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return week[date.getDay()];
}

alert(getWeekDay(date));

// Какой день месяца был много дней назад?
// важность: 4
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date
function getDateAgo(date, days) {
  let copyDate = new Date(date);

  copyDate.setDate(copyDate.getDate() - days);
  return copyDate.getDate();
}

// Последнее число месяца?
// важность: 5
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// Сколько сегодня прошло секунд?
// важность: 5
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
function getSecondsToday() {
  let current = new Date();

  let today = new Date(
    current.getFullYear(),
    current.getMonth(),
    current.getDate()
  );

  let diff = current - today;
  return Math.round(diff / 1000);
}

// Сколько секунд осталось до завтра?
// важность: 5
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
function getSecondsToTomorrow() {
  let current = new Date();

  let tomorrow = new Date(
    current.getFullYear(),
    current.getMonth(),
    current.getDate() + 1
  );

  let dif = tomorrow - current;

  return Math.round(dif / 1000);
}
