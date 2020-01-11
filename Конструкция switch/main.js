// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


let browser = prompt('Каким браузером вы пользуетесь ?');

if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'FireFoxe' || browser == 'Safari' || browser == 'Opera') {
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}




// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

let number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;

    case 1:
        alert('Вы ввели число 1');
        break;

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}




// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

let result;
let num = +prompt('Введите число соответствующее вашей любимой поре года: 1-Зима 2-Весна 3-Лето 4-Осень', '');

switch (num) {
    case 1:
        result = 'Зима';
        break;

    case 2:
        result = 'Весна';
        break;

    case 3:
        result = 'Лето';
        break;

    case 4:
        result = 'Осень';
        break;
}