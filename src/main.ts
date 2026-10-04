import {Product} from './models/Product.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { DigitalProduct } from './models/DigitalProduct.js';

// const laptop = new Product("Hp", "hj643jhs", 1200);

// console.log(laptop.displayDetails());
// console.log(laptop.getPriceWithTax());


const laptop = new PhysicalProduct("Hp", "hj643jhs", 1200, 2);
const game = new DigitalProduct("Crash", "kjdh764yhdjs", 84.99, 50)

console.log(laptop.displayDetails());
console.log(laptop.getPriceWithTax());

console.log(game.displayDetails());
console.log(game.getPriceWithTax());