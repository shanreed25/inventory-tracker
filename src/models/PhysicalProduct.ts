import {Product} from './Product.js';

class PhysicalProduct extends Product{
    constructor(name:string, sku:string, price:number, public weight:number){
            super(name, sku, price);
        }

    displayDetails(): string{
        return `${super.displayDetails()}, Weight: ${this.weight} kg`;
    }
}

export {PhysicalProduct};