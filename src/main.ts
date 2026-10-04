import {Product} from './models/Product.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { DigitalProduct } from './models/DigitalProduct.js';


const laptop = new PhysicalProduct("Hp", "hj643jhs", 1200, 2);
const game = new DigitalProduct("Crash", "kjdh764yhdjs", 84.99, 50)

console.log(`Physical Product displayDetails: ${laptop.displayDetails()}`);
console.log(`Physical Product getPriceWithTax: ${Product.formatPrice(laptop.getPriceWithTax())}`);
console.log(`Physical Product Getter: ${laptop.productWeight}`);//read the getter like a property, with no parentheses:

console.log(`Digital Product displayDetails: ${game.displayDetails()}`);
console.log(`Digital Product getPriceWithTax: ${Product.formatPrice(game.getPriceWithTax())}`);
console.log(`Digital Product Getter: ${game.productFileSize}`);