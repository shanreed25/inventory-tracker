import {Product} from './Product.js';

class PhysicalProduct extends Product{
    constructor(name:string, sku:string, price:number, public weight:number){
            super(name, sku, price);
        }

    //method overriding
    displayDetails(): string{
        return `${super.displayDetails()}, Weight: ${this.weight} kg`;
    }

    //getter method to return the formatted weight in kilograms (e.g. “2.5 kg”)
    get productWeight(): string{//
        return `Weight: ${this.weight} kg`
    }

    //overriding the getPriceWithTax() method to calculate a final 
    // price that includes a 10% tax rate
    getPriceWithTax(): number{
        return this.price * 1.1;
    }
}

export {PhysicalProduct};