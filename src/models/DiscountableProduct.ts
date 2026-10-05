export interface DiscountableProduct {
    //method that takes the percentage and returns the discounted price
    //in and interface you write only the signature and end the line with a semicolon
    addDiscount(percent: number): number;
}

