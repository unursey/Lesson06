'use strict';

const recursionFoo = (arr = []) => {
  const randomNum = Math.floor(Math.random() * 11);
  arr.push(randomNum);

  return arr.reduce((acc, n) => acc + n, 0) < 50 ? recursionFoo(arr) : arr;
};

console.log(recursionFoo());


const rectangle = {
  width: 5,
  height: 5,

  set totalWidth(val) {
    if (typeof val === 'number') {
      this.width = val;
    }
  },

  set totalHeight(val) {
    if (typeof val === 'number') {
      this.height = val;
    }
  },

  get totalSquare() {
    return `Площадь: ${this.width * this.height} см²`;
  },

  get totalPerimeter() {
    return `Периметр: ${(this.width + this.height) * 2} см`;
  },


};

rectangle.totalWidth = 5;
rectangle.totalHeight = 6;

console.log(rectangle.totalPerimeter);
console.log(rectangle.totalSquare);
