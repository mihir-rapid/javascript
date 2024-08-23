// class = (ES6 feature) provided a more structured and cleaner way to work with objects compared to traditional constructor function ex. static keyword, encapsulation, inheritance

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05

const product1 = new Product("water-bottle", 10.99);
const product2 = new Product("mouse", 35.50);
const product3 = new Product("keyboard", 74.99);

product1.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
