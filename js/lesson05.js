"use strict";

const foo = () => {
  for (let i = 1; i <= 10; i++) {
    console.log("---------------");
  
    for (let y = 1; y <= 10; y++) {
      console.log(`${i} ** ${y} = ${i**y}`);
    }
  }
};

//foo();

const isPrime = (num) => {
  for (let i = 2; i < num; i++ ) {
      if (num % i === 0) {
          return false;
      }   
  } 
  
  return num > 1;
};

//console.log(isPrime(1));