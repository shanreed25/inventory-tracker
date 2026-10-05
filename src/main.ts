import {Product} from './models/Product.js';
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { DigitalProduct } from './models/DigitalProduct.js';
import calculateTax from './utils/taxCalculator.js';
import formatPrice from './utils/formatPrice.js';

const laptop = new PhysicalProduct("Hp", "G45GH569TF", 2219.99, 2);
const headphones = new PhysicalProduct("Samsung", "T14ED453UB", 19.99, .5);
const game = new DigitalProduct("Crash", "Y39FH903KH", 100, 50)
const ebook = new DigitalProduct("How To Love", "J94GK768HV", 13.95, 5)


const inventory : Product[] = [laptop, headphones, game, ebook]

inventory.forEach(item => {
  console.log(item.displayDetails());
  console.log("Total Price: " + formatPrice(calculateTax(item)));

if (item instanceof PhysicalProduct){//is this Product created from the PhysicalProduct class
  console.log(item.weight)
} else if (item instanceof DigitalProduct){//is this Product created from the DigitalProduct class
  console.log(item.fileSize);
}
  console.log("-".repeat(40));
})

//Add a DiscountableProduct interface that includes a method applyDiscount(). Implement this interface in one of the product classes
const discountedProduct = new DigitalProduct("E-book", "Y60GFJ850FH", 39.99, 6);
console.log("30% off 39.99:", discountedProduct.addDiscount(30).toFixed(2));
console.log("30% off 39.99:", discountedProduct.addDiscount(30).toFixed(2));//discounts does not stack
console.log(discountedProduct.price);//price is still the original price