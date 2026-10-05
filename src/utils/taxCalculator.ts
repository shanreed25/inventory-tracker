import type { Product } from "../models/Product.js";
//accepts a Product object and returns the price including tax
export default function calculateTax(product: Product): number{
    return product.getPriceWithTax();
}