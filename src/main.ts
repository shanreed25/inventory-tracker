import {Product} from './models/Product.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';


// const laptop = new Product("Hp", "hj643jhs", 1200);

// console.log(laptop.displayDetails());
// console.log(laptop.getPriceWithTax());


const laptop = new PhysicalProduct("Hp", "hj643jhs", 1200, 2);


console.log(laptop.displayDetails());
console.log(laptop.getPriceWithTax());