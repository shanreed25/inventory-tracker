import type { Product } from "../models/Product.js";

export default function calculatTax(type: Product): number{
    return type.getPriceWithTax();
}