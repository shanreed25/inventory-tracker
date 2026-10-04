import {Product} from './models/Product.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { DigitalProduct } from './models/DigitalProduct.js';
import calculatTax from './utils/taxCalculator.js';
import formatPrice from './utils/formatPrice.js';


// function createPhysicalProduct(name: string, sku: string, price: number, weight: number): PhysicalProduct{
//   const newProduct = new PhysicalProduct(name, sku, price, weight);
//   return newProduct;
// }
const laptop = new PhysicalProduct("Hp", "G45GH569TF", 2219.99, 2);
const headphones = new PhysicalProduct("Samsung", "T14ED453UB", 19.99, .5);
const game = new DigitalProduct("Crash", "Y39FH903KH", 100, 50)
const ebook = new DigitalProduct("How To Love", "J94GK768HV", 13.95, 5)


// console.log(`Physical Product displayDetails: ${laptop.displayDetails()}`);
// console.log(`Physical Product getPriceWithTax: ${formatPrice(calculatTax(laptop))}`);
// console.log(`Physical Product Getter: ${laptop.productWeight}`);//read the getter like a property, with no parentheses:

// console.log(`Digital Product displayDetails: ${game.displayDetails()}`);
// console.log(`Digital Product getPriceWithTax: ${formatPrice(calculatTax(game))}`);
// console.log(`Digital Product Getter: ${game.productFileSize}`);


const inventory : Product[] = [laptop, headphones, game, ebook]

console.log(inventory);


/*
Without polymorphism, calculateTax would need a check for every product type:

ts
if (product instanceof PhysicalProduct) {
  return product.price * 1.1;
} else if (product instanceof DigitalProduct) {
  return product.price;
}

Every new product type would mean editing this function and every other place that does a similar check. With polymorphism, adding a SubscriptionProduct means writing one new class with its own getPriceWithTax(). calculateTax, the main loop, and the sorting module all keep working without a single change.

The two ingredients

Polymorphism in your lab depends on two things you've already built:

Inheritance: both subclasses extend Product, so either one can go anywhere a Product is expected.
Overriding: each subclass supplies its own version of the shared method.

Put those together, and code written for the parent type automatically works for every child type
*/