import {Product} from './Product.js';

class PhysicalProduct extends Product{
    constructor(name:string, sku:string, price:number, public weight:number){
            super(name, sku, price);
        }

    displayDetails(): string{
        return `${super.displayDetails()}, Weight: ${this.weight} kg`;
    }


    /*
        get tells TypeScript to treat the method as a property you read, not a function you call
        productWeight: the name must be different, name can't be weight, because the class already has a property called weight, and the two would clash
    */
    get productWeight(): string{//
        return `${this.weight} kg`
    }
}

export {PhysicalProduct};