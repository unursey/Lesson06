const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice () {
        return this.totalPrice;
    },

    add (item, price, qty=1) {
        const addItems = {
            item,
            price,
            qty,
        };

        this.items.push(addItems);
        this.increaseCount(qty);
        this.calculateItemPrice();
    },

    increaseCount (n) {
        return this.count += n; 
    },

    calculateItemPrice () {
        this.totalPrice = this.items.reduce((acc, {price, qty}) =>
        acc + price*qty, 0);
    },

    clear() {
        this.items = [];
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

cart.print();

cart.clear();

//cart.print();