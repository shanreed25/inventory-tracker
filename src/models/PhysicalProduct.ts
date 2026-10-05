import {Product} from './Product.js';

class PhysicalProduct extends Product{
        /*
        since nothing else needs access to weight it can be private
    */
    constructor(name:string, sku:string, price:number, private _weight:number){
            super(name, sku, price);
        }

    //method overriding
    displayDetails(): string{
        return `${super.displayDetails()}, Weight: ${this._weight} kg`;
    }

    //getter method to return the formatted weight in kilograms (e.g. “2.5 kg”)
    get productWeight(): string{//
        return `Weight: ${this._weight} kg`
    }

    //overriding the getPriceWithTax() method to calculate a final 
    // price that includes a 10% tax rate
    getPriceWithTax(): number{
        return this.price * 1.1;
    }
}

export {PhysicalProduct};