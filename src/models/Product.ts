import formatPrice from "../utils/formatPrice.js";
/*
Polymorphism means "many forms." In object-oriented programming, polymorphism lets you treat 
different kinds of objects the same way, while each object still behaves in its own way.

An everyday comparison

Think of a "Start" button on different devices. You press "Start" on a washing machine, a 
microwave, and a car. You do the same action every time, but each device does something different:
 the washer fills with water, the microwave heats food, the car starts the engine. You don't need 
 to know which device you're dealing with to press the button. Each device knows what "start" 
 means for itself.
*/

class Product {
    constructor(public name:string, public sku:string, public price:number){}

    //a method that returns a formatted string with the product’s details
    displayDetails(): string{
        return `Product Name: ${this.name}, 
                Product SKU: ${this.sku}, 
                Product Price: ${formatPrice(this.price)}`
    }

    // a method that calculates the final price of the product with tax(%5)
    getPriceWithTax(): number{//polymorphism : Product promises that every product has a getPriceWithTax() method
        return this.price * 1.05;
    }

}



export {Product};
