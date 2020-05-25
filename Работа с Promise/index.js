//Client => Server => DataBase => Server => Client

// console.log('Клиент: Хочу получить список пользователей')
// console.log('...')

// setTimeout(()=>{
// console.log('Сервер: Запрашиваю список пользователей')
// console.log('...')

//   setTimeout(()=>{
//     console.log('БД: Формирую список данных')
//     console.log('...')

//     setTimeout(()=>{
//       console.log('Сервер: Трансормирую данные для клиента')
//       console.log('...')

//       setTimeout(()=>{
//         console.log('Клиент: Получил данные и отображаю их')
//       console.log('...')
//       }, 1000)

//     }, 500)

//   },500)

// }, 1000)

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Сервер: Запрашиваю список пользователей");
    console.log("...");
    resolve();
  }, 1000);
});

promise
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let users = [
          { id: 1, name: "Максим" },
          { id: 2, name: "Катя" },
        ];
        console.log("БД: Формирую список данных");
        console.log("...");
        resolve(users);
      }, 500);
    });
  })
  .then((dataBaseUsers) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let myUsers = dataBaseUsers.map(function (user) {
          return {
            id: user.id,
            firstName: user.name,
          };
        });
        console.log("Сервер: Трансормирую данные для клиента");
        console.log("...");
        resolve(myUsers);
      }, 500);
    });
  })
  .then((myUsers) => {
    setTimeout(() => {
      console.log("Клиент: Получил данные и отображаю их", myUsers);
      console.log("...");
    }, 1000);
  })
  .catch((error) => {
    comsole.log(error);
  });
