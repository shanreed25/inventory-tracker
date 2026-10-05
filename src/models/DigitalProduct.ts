import { Product } from "./Product.js";

class DigitalProduct extends Product{
    protected _fileSize: number = 0;
    constructor(name: string, sku: string, price: number, fileSize: number) { 
        super(name, sku, price);
        this.fileSize = fileSize
    }

    displayDetails(): string {
        return `${super.displayDetails()}, File Size: ${this._fileSize} MB`
    }


    //getter method to return the formatted file size in megabytes
    get fileSize(): string{
        return `File size: ${this._fileSize} MB`;
    }

    //setter
    set fileSize(value: number) {
        if (value <= 0){
            throw new Error("File size must be greater than 0")
        }

        this._fileSize = value
    }

    //overriding the getPriceWithTax() method to calculate a final price with no tax
    getPriceWithTax(): number{
        return this.price;
    }
}

export {DigitalProduct};