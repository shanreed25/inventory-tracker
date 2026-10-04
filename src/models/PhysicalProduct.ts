import {Product} from './Product.js';

/*
extends Product makes PhysicalProduct a child class and Product
name, sku, price, displayDetails(), getPriceWithTax() comes with it
*/
class PhysicalProduct extends Product{
        /*public weight: number is the only new property, so weight is the only 
        parameter that gets public
        the first three parameters stay plain because Product already declares those properties
        adding public again would just redeclare them
        */
    constructor(name:string, sku:string, price:number, public weight:number){
            super(name, sku, price);//calls the parent constructor so Product can set up its own properties
        }

        /*
            displayDetails() leaves out the weight
            override the method by writing a new version with the same name
            super.displayDetails() lets you reuse the parent's version instead of rewriting it
        */
    displayDetails(): string{
        return `${super.displayDetails()}, Weight: ${this.weight} kg`;
    }
}

export {PhysicalProduct};