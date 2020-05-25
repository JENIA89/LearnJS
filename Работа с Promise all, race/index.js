function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

let p1 = sleep(1500).then(() => {
  {
    name: "Promise 1500";
  }
});

let p2 = sleep(3000).then(() => {
  {
    name: "Promise 3000";
  }
});

// Promise.all выполняется по окончании всех промисов
Promise.all([p1, p2]).then(() => {
  console.log("all");
});

// Promise.race выполняется по окончании самого первого промиса
Promise.race([p1, p2]).then(() => {
  console.log("race");
});
