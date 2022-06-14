"use strict";

const arr = (length, m, n, str) => {
  if (length < 0) return;

  if (n < m) return arr(length, n, m, str);

  const newArr = [...new Array(length)].map(
    () => Math.floor(Math.random() * (n + 1 - m)) + m
  );

  if (str === "even") {
    return newArr.filter((i) => !(i % 2));
  }
  if (str === "odd") {
    return newArr.filter((i) => i % 2);
  }

  return newArr;
};

//console.log(arr(15, -5, 10, ""));

const leapYears = (n, m) => {
  if (n > m) return leapYears(m, n);

  return [...new Array(m - n + 1)]
    .map((_, i) => n + i)
    .filter((j) => (j % 100 && !(j % 4)) || !(j % 400));
};

//console.log(leapYears(2022, 1988));
