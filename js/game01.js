"use strict";

const start = () => {
  const userNumbers = [];
  const arr = [];
  let numberOne;
  let numberTwo;
  let attempt;

  const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  
  while (!isNumber(numberOne)) {
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
  }

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  arr.push(numberOne);
  arr.push(numberTwo);
  console.log("Массив", arr);

  const randomNumber =
    Math.floor(Math.random() * (arr[1] - arr[0] + 1)) + arr[0];

  console.log(randomNumber);

  const range = Math.abs(arr[1] - arr[0] + 1);


  if (range > 100) {
    attempt = Math.ceil(range * 0.3);
  } else if (range > 50) {
    attempt = 15;
  } else if (range > 0) {
    attempt = Math.ceil(range * 0.3);
  }

  const game = () => {
    attempt--;
    if (attempt < 0) {
      if (
        confirm(
          `Попытки закончились, это было число: ${randomNumber} хотите сыграть еще?
        `)
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
  };
  game();
};

start();
