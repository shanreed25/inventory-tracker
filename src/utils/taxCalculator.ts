import type { Product } from "../models/Product.js";
//accepts a Product object and returns the price including tax
export default function calculatTax(product: Product): number{
    return product.getPriceWithTax();
}