import {Product} from './models/Product.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { DigitalProduct } from './models/DigitalProduct.js';
import calculatTax from './utils/taxCalculator.js';
import formatPrice from './utils/formatPrice.js';

const laptop = new PhysicalProduct("Hp", "G45GH569TF", 2219.99, 2);
const headphones = new PhysicalProduct("Samsung", "T14ED453UB", 19.99, .5);
const game = new DigitalProduct("Crash", "Y39FH903KH", 100, 50)
const ebook = new DigitalProduct("How To Love", "J94GK768HV", 13.95, 5)


const inventory : Product[] = [laptop, headphones, game, ebook]

console.log(inventory);

inventory.forEach(item => {
  console.log(item.displayDetails());
  console.log("Total Price: " + formatPrice(calculatTax(item)));
  console.log("-".repeat(40));
})
