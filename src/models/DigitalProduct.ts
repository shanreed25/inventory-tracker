import { Product } from "./Product.js";

class DigitalProduct extends Product{
    constructor(name: string, sku: string, price: number, public fileSize: number) { 
        super(name, sku, price);       
    }

    displayDetails(): string {
        return `${super.displayDetails()}, File Size: ${this.fileSize} MB`
    }

    get productFileSize(): string{
        return `${this.fileSize} MB`;
    }
}

export {DigitalProduct};