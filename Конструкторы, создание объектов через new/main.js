// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

function Calculator() {
    this.read = function (num1, num2) {
        this.num1 = +prompt('Введите num1');
        this.num2 = +prompt('Введите num2');
    };
    this.sum = function () {
        return this.num1 + this.num2;
    };
    this.mul = function () {
        return this.num1 * this.num2;
    };
}

let calculator = new Calculator();

calculator.read();
alert("Sum= " + calculator.sum());
alert("Mul= " + calculator.mul());






// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('Сколько нужно добавить?');
    };
}

let accumulator = new Accumulator(1);


accumulator.read();
accumulator.read();

alert(accumulator.value);