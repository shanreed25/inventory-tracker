import {Product} from './Product.js';

class PhysicalProduct extends Product{
    constructor(name:string, sku:string, price:number, public weight:number){
            super(name, sku, price);
        }

    //method overriding
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

    //method overriding: a method in the subclass with the exact same name, parameters, 
    // and return type as the parent's method
    /*In tsconfig.json for noImplicitOverride:
        If the option is true: TypeScript requires the override keyword in front of any 
        method that replaces a parent method
        If the option is commented out or false: the keyword is optional. 
        Adding the keyword anyway is still a good habit, because TypeScript will then 
        warn you if the parent method gets renamed and your override no longer matches anything.
    */
    getPriceWithTax(): number{
        //5%
        return this.price * 1.05;
    }
}

export {PhysicalProduct};