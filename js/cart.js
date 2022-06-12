const cart = {
    items: [],
    get totalPrice() {
        return this.calculateItemPrice();
    },
    count: 0,

    add (item, price, qty = 1) {
        const addItems = {
            item,
            price,
            qty,
        };

        this.items.push(addItems);
        this.increaseCount();
    },

    increaseCount() {
        this.count = this.items.reduce((acc, {qty}) => 
        acc + qty, 0);
        console.log(this.count);
       //this.count += num;
    },    

    calculateItemPrice() {
        return this.items.reduce((acc, {price, qty}) =>
        acc + price*qty, 0);
    },

    clear() {
        this.items = [];
        this.count = 0;
        this.totalPrice = 0;
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

cart.totalPrice = 10;

cart.print();

console.log(cart.count);
console.log(cart.totalPrice);
cart.clear();
cart.print();


//cart.clear();

//cart.print();