"use strict";

const allStudents = [
  "Макаров",
  "Фролов",
  "Смирнов",
  "Антонов",
  "Синицын",
  "Балашов",
  "Кузьмин",
  "Тимохин",
];
const failedStudents = ["Макаров", "Антонов", "Балашов", "Тимохин"];
const coolStudents = [];

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

const allCashbox2 = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];


const filter = (arr1, arr2) => {
  const coolStudents = [];
  for (const elem of arr1) {
    if (!arr2.includes(elem)) {
      coolStudents.push(elem);
    }
  }
  return coolStudents;
};


const getAverageValue = (arr) => {
  if (arr.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.floor(sum / arr.length);
};

const addPrefix = (arr, prefix) => arr.map((n) => prefix + " " + n);


const getAveragePriceGoods = (arr) => {
    let sumX = 0;
    let sumY = 0;

  // for (let i=0; i<arr.length; i++) {
  //     newArr.push(Math.floor(arr[i][1]/arr[i][0]));
  // }

  for (const [x, y] of arr) {
    sumX += x;
    sumY += y;
  }

  let newArr = Math.floor(sumY / sumX);

  return newArr;
};


//console.log(filter(allStudents, failedStudents));
//console.log(getAverageValue(allCashbox));
//console.log(addPrefix(names, "Mr"));
//console.log(getAveragePriceGoods(allCashbox2));
