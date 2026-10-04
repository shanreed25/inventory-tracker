// import {Product} from './models/Product.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { DigitalProduct } from './models/DigitalProduct.js';
import calculatTax from './utils/taxCalculator.js';
import formatPrice from './utils/formatPrice.js';


const laptop = new PhysicalProduct("Hp", "hj643jhs", 19.99, 2);
const game = new DigitalProduct("Crash", "kjdh764yhdjs", 100, 50)

console.log(`Physical Product displayDetails: ${laptop.displayDetails()}`);
console.log(`Physical Product getPriceWithTax: ${formatPrice(calculatTax(laptop))}`);
console.log(`Physical Product Getter: ${laptop.productWeight}`);//read the getter like a property, with no parentheses:

console.log(`Digital Product displayDetails: ${game.displayDetails()}`);
console.log(`Digital Product getPriceWithTax: ${formatPrice(calculatTax(game))}`);
console.log(`Digital Product Getter: ${game.productFileSize}`);