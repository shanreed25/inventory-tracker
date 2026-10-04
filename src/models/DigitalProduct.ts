import { Product } from "./Product.js";

class DigitalProduct extends Product{
    constructor(name: string, sku: string, price: number, public fileSize: number) { 
        super(name, sku, price);       
    }

    displayDetails(): string {
        return `${super.displayDetails()}, File Size: ${this.fileSize} MB`
    }


    //getter method to return the formatted file size in megabytes
    get productFileSize(): string{
        return `${this.fileSize} MB`;
    }

    //overriding the getPriceWithTax() method to calculate a final price with no tax
    getPriceWithTax(): number{//polymorphism : overrides the method to add no tax.
        return this.price;
    }
}

export {DigitalProduct};