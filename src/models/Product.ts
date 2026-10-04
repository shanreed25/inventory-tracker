class Product {
    constructor(public name:string, public sku:string, public price:number){}


    //STATIC Method
    static formatPrice(num: number): string{
        return num.toLocaleString("en-US", {style: "currency", currency: "USD"});
    }

    //a method that returns a formatted string with the product’s details
    displayDetails(): string{
        return `Product Name: ${this.name}, Product SKU: ${this.sku}, Product Price: ${Product.formatPrice(this.price)}`
    }

    // a method that calculates the final price of the product with tax(%5)
    getPriceWithTax(): number{
        return this.price * 1.05;
    }

}



export {Product};
