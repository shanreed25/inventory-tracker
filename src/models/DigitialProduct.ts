import { Product } from "./Product.js";

class DigitialProduct extends Product{
        /* Only fileSize gets the three steps property declaration, 
                constructor parameter and assignment
                The super(...) call has to come before this.fileSize = fileSize, 
                because the object isn't fully set up until the parent constructor 
                 has run. Swapping those two lines gives you an error saying super 
                must be called before accessing this
    */
    fileSize: number;

    constructor(name: string, sku: string, price: number, fileSize: number) { 
        super(name, sku, price);// parent handles its own three properties
        this.fileSize = fileSize;               
    }


    /*
        the child can still read this.name, this.sku, and this.price because those 
        properties are inherited, so the code works and the output matches the super version exactly
        But there is now duplication, this logic lives in two places
        super.displayDetails() keeps the shared part in one place and lets the child add only what's new
    */

    displayDetails(): string {
        const formattedPrice = (this.price).toLocaleString("en-US", {style: "currency", currency: "USD"})
        return `Product Name: ${this.name}, Product SKU: ${this.sku}, Product Price: ${formattedPrice}, File Size: ${this.fileSize} MB`
    }

}

export {DigitialProduct};