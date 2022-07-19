'use strict';

const cart = {
  items: [],
  discount: 0,
  count: 0,

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }

    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(item, price, qty = 1) {
    const addItems = {
      item,
      price,
      qty,
    };

    this.items.push(addItems);
    this.increaseCount();
  },

  increaseCount() {
    this.count = this.items.reduce((acc, {qty}) => acc + qty, 0);
    console.log(this.count);
    // this.count += num;
  },

  calculateItemPrice() {
    return this.items.reduce((acc, {price, qty}) =>
      acc + price * qty * ((100 - this.discount) / 100), 0);
  },

  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
  },

  print() {
    console.log(`${JSON.stringify(this.items)}
        Общая сумма: ${this.totalPrice}`);
  },
};

cart.add('таблетки', 10, 6);
cart.add('морковки', 6, 15);
cart.add('кофе', 150, 3);
cart.add('колла', 120, 5);

cart.setDiscount = 'METHED';
console.log(cart.discount);
cart.print();

console.log(cart.totalPrice);
console.log(cart.count);

cart.clear();
cart.print();
