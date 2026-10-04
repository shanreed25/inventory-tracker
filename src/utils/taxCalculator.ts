import type { Product } from "../models/Product.js";

/*polymorphism:
    The function only knows it received some Product. The 
    function never checks which kind. When the code runs, 
    JavaScript looks at the actual object and runs that object's 
    version of getPriceWithTax(). Pass in headphones and you get 
    the 10% version; pass in an e-book and you get the no-tax version.
    */

//takes a product and return the price with tax
export default function calculatTax(product: Product): number{
    return product.getPriceWithTax();
}