// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {

    number1: 0,
    number2: 0,
    read() {
        this.number1 = prompt('Введите первое число', 0);
        this.number2 = prompt('Введите первое число', 0);
    },
    sum() {
        return Number(this.number1) + Number(this.number1);
    },
    mul() {
        return Number(this.number1) * Number(this.number1);
    }
};


calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Второй вариант

let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};