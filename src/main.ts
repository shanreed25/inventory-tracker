import {Product} from './models/Product.js';



const laptop = new Product("Hp", "hj643jhs", 1200);

console.log("Tracker");

console.log(laptop.displayDetails());
console.log(laptop.getPriceWithTax());