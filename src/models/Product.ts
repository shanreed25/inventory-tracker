import formatPrice from "../utils/formatPrice.js";

class Product {

    /*  
        name and sku are only used inside Product, so private is ok
        private readonly for sku, SKU should never change after the product is created
        price is protected, not private
        because PhysicalProduct and DigitalProduct both use this.price inside getPriceWithTax()
        if price is private, the subclasses will lose access
        underscore marks the field as internal storage, and the names are free to use for the getters
    */
    constructor(private _name:string, private readonly _sku:string, protected _price:number){}

    //a method that returns a formatted string with the product’s details
    displayDetails(): string{
        return `Product Name: ${this._name}, Product SKU: ${this._sku}, Product Price: ${formatPrice(this.price)}`
    }

    //the get keyword turns the method into a property
    //so outside code reads it as laptop.price with no parentheses
    get price(): number{//getter is only needed for a value that code outside the class has to read
        return this._price;
    }

    // a method that calculates the final price of the product with tax(%5)
    getPriceWithTax(): number{
        return this.price * 1.05;
    }

}



export {Product};
