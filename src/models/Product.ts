import formatPrice from "../utils/formatPrice.js";

class Product {
    protected _price: number = 0;

     constructor(private _name:string, private readonly _sku:string, price:number){
        this.price = price; //the setter runs, validates, and stores the value in _price
     }

    //a method that returns a formatted string with the product’s details
    displayDetails(): string{
        return `Product Name: ${this._name}, Product SKU: ${this._sku}, Product Price: ${formatPrice(this.price)}`
    }


    get price(): number{//getter is only needed for a value that code outside the class has to read
        return this._price;
    }


    //setter 
    set price(value: number){
        if (value <= 0){
            throw new Error("Price must be greater than 0")
        }

        this._price = value
    }

    // a method that calculates the final price of the product with tax(%5)
    getPriceWithTax(): number{
        return this.price * 1.05;
    }

}



export {Product};
