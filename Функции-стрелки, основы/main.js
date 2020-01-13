// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

let yes = () => alert('Вы согласились.');
let no = () => alert('Вы отменили выполнение.');


// ИЛИ

let ask = (question, yes, no) => (confirm(question)) ? yes() : no()

ask(
    'Вы согласны?',
    () => alert('Вы согласились.'),
    () => alert('Вы отменили выполнение.')
);