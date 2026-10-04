class Product {
    constructor(public name:string, public sku:string, public price:number){}


    //STATIC Method
    static formatPrice(num: number): string{
        return num.toLocaleString("en-US", {style: "currency", currency: "USD"});
    }

    displayDetails(): string{
        const formattedPrice = (this.price).toLocaleString("en-US", {style: "currency", currency: "USD"})
        return `Product Name: ${this.name}, Product SKU: ${this.sku}, Product Price: ${formattedPrice}`
    }

    getPriceWithTax(): number{
        return this.price;
    }

}



export {Product};
