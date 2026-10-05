import {Product} from './Product.js';

class PhysicalProduct extends Product{
    protected _weight: number = 0;
 
    constructor(name:string, sku:string, price:number, weight:number){
            super(name, sku, price);
            this.weight = weight;
        }

    //method overriding
    displayDetails(): string{
        return `${super.displayDetails()}, Weight: ${this._weight} kg`;
    }

    //getter method to return the formatted weight in kilograms (e.g. “2.5 kg”)
    get weight(): string{//
        return `Weight: ${this._weight} kg`
    }

    //setter
    set weight(value:number){
        if (value <= 0){
            throw new Error("Weight must be greater than 0")
        }

        this._weight = value
    }

    //overriding the getPriceWithTax() method to calculate a final 
    // price that includes a 10% tax rate
    getPriceWithTax(): number{
        return this.price * 1.1;
    }
}

export {PhysicalProduct};