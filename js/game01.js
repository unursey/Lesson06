'use strict';

const start = () => {
  const userNumbers = [];
  let arr = [];
  let attempt = null;
  let randomNumber = null;

  const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

  for (const item of ['начало', 'конец']) {
    let answer;

    while (!isNumber(answer) || arr.includes(answer)) {
      answer = prompt(`Укажите ${item} диапазона`);

      if (answer === null) {
        alert('Игра окончена!');
        return;
      }
    }
    arr.push(answer);
  }

  arr = arr.map((item) => parseFloat(item)).sort();

  randomNumber = Math.floor(Math.random() * (arr[1] - arr[0] + 1)) + arr[0];

  const range = Math.abs(arr[1] - arr[0] + 1);

  attempt = Math.ceil(range * 0.3);
  if (range >= 50 && range <= 100) {
    attempt = 15;
  }
  console.log('диапазон: ', arr);
  console.log('случайное число: ', randomNumber);
  console.log('кол-во попыток: ', attempt);

  const game = () => {
    let answer;

    if (attempt <= 0) {
      alert(`Попытки закончились, это было число: ${randomNumber}`);
      return;
    }

    while (!isNumber(answer) || userNumbers.includes(answer)) {
      answer = prompt(`Угадайте число от ${arr[0]} до ${arr[1]}:`);

      if (answer === null || +answer === randomNumber) {
        alert(answer === null ? 'Игра окончена!' : 'Вы победили!');
        return;
      }
    }
    userNumbers.push(answer);
    attempt--;

    if (+answer > randomNumber) {
      alert(`Меньше! Осталось ${attempt} попыток.`);
    }
    if (+answer < randomNumber) {
      alert(`Больше! Осталось ${attempt} попыток.`);
    }
    game();
  };
  console.log('попытки: ', userNumbers);

  game();
};

start();

while (true) {
  if (confirm('Ещё одна попытка?')) {
    start();
  } else break;
}


/* const start = () => {
  let userNumbers = [];
  let arr = [];
  let attempt = null;
  let randomNumber = null;

  const clearAll = () => {
    userNumbers = [];
    arr = [];
    attempt = null;
    randomNumber = null;
  };

  const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

  const game = () => {
    if (!randomNumber) {
      for (const item of ['начало', 'конец']) {
        let answer;

        while (!isNumber(answer) || arr.includes(answer)) {
          answer = prompt(`Укажите ${item} диапазона`);

          if (answer === null) {
            alert('Игра окончена!');
            return;
          }
        }
        arr.push(answer);
      }

      arr = arr.map((item) => parseFloat(item)).sort();
      randomNumber = Math.floor(Math.random() * (arr[1] - arr[0] + 1)) + arr[0];
      const range = Math.abs(arr[1] - arr[0] + 1);

      attempt = Math.ceil(range * 0.3);
      if (range >= 50 && range <= 100) {
        attempt = 15;
      }
      console.log('диапазон: ', arr);
      console.log('случайное число: ', randomNumber);
      console.log('кол-во попыток: ', attempt);
    }

    let answer;

    if (attempt <= 0) {
      alert(`Попытки закончились, это было число: ${randomNumber}`);
      return;
    }

    while (!isNumber(answer) || userNumbers.includes(answer)) {
      answer = prompt(`Угадайте число от ${arr[0]} до ${arr[1]}:`);

      if (answer === null) {
        alert('Игра окончена!');
        return;
      }
    }
    userNumbers.push(answer);
    attempt--;

    if (+answer === randomNumber) {
      alert('Вы победили!');
      return;
    }
    if (+answer > randomNumber) {
      alert(`Меньше! Осталось ${attempt} попыток.`);
    }
    if (+answer < randomNumber) {
      alert(`Больше! Осталось ${attempt} попыток.`);
    }
    game();
  };
  console.log('попытки: ', userNumbers);
  game();

  while (true) {
    if (confirm('Ещё одна попытка?')) {
      clearAll();
      game();
    } else {
      break;
    }
  }
};

start();*/


/*
const start = () => {
  let randomNumber;
  let userNumbers = [];
  let arr = [];
  let attempt;

  const clearAll = () => {
    userNumbers = [];
    arr = [];
    attempt = null;
    randomNumber = null;
  };

  const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

  for (const item of ["начало", "конец"]) {
    let answer;

    while (!isNumber(answer) || arr.includes(answer)) {
      answer = prompt(`Укажите ${item} диапазона`);

      if (answer === null) {
        alert("Игра окончена!");
        return;
      }
    }
    arr.push(answer);
  }

  arr = arr.map((item) => parseFloat(item)).sort();
  console.log("Массив", arr);

  randomNumber =
    Math.floor(Math.random() * (arr[1] - arr[0] + 1)) + arr[0];

  console.log(randomNumber);

  const range = Math.abs(arr[1] - arr[0] + 1);

  attempt = Math.ceil(range * 0.3);
  if (range >= 50 && range <= 100) {
    attempt = 15;
  }

  const game = () => {
    let answer;

    if (attempt <= 0) {
      if (
        confirm(
          `Попытки закончились, это было число: ${randomNumber}, хотите сыграть еще?`
        )
      ) {
        clearAll();
        start();
      } else {
        return;
      }
    }

    while (!isNumber(answer) || userNumbers.includes(answer)) {
      answer = prompt(`Угадайте число от ${arr[0]} до ${arr[1]}:`);

      if (answer === null) {
        alert("Игра окончена!");
        return;
      }
    }
    userNumbers.push(answer);
    attempt--;

    if (+answer > randomNumber) {
      alert(`Меньше! Осталось ${attempt} попыток.`);
      game();
    } else if (+answer < randomNumber) {
      alert(`Больше! Осталось ${attempt} попыток.`);
      game();
    } else if (+answer === randomNumber) {
      if (confirm("Вы победили! Еще?")) {
        clearAll();
        start();
      }
    }
  };

  console.log(userNumbers);

  game();
};

start();*/

/* attempt--;
    if (attempt < 0) {
      if (
        confirm(
          `Попытки закончились, это было число: ${randomNumber} хотите сыграть еще?
        `
        )
      ) {
        start();
      } else {
        alert("До свидания!");
        return;
      }
    } else {
      const userNumber = prompt(
        `Угадайте число от ${numberOne} до ${numberTwo}:`
      );

      if (userNumber === null) {
        alert("Игра окончена!");
        return;
      }

      if (isNumber(userNumber)) {
        if (userNumbers.includes(userNumber)) {
          attempt++;
          alert("Это число Вы уже вводили.");
        } else {
          userNumbers.push(userNumber);
          console.log(userNumbers);
        }

        if (+userNumber > randomNumber) {
          alert(`Меньше! Осталось ${attempt} попыток.`);
          game();
        } else if (+userNumber < randomNumber) {
          alert(`Больше! Осталось ${attempt} попыток.`);
          game();
        } else {
          if (confirm("Вы победили! Еще?")) {
            start();
          } else {
            alert("Пока!");
            return;
          }
        }
      } else {
        attempt++;
        alert("Введи число!");
        game();
      }
    }
  };*/

/* while (!isNumber(numberOne)) {
    numberOne = prompt("Укажите начало диапазона");
    if (numberOne === null) {
      alert("Игра окончена!");
      return;
    }
  }

  while (!isNumber(numberTwo)) {
    numberTwo = prompt("Укажите конец диапазона");
    if (numberTwo === null) {
      alert("Игра окончена!");
      return;
    }
  }*/
