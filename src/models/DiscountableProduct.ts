/*
DiscountableProduct interface says "any class that claims to be discountable 
must have an applyDiscount method that takes a number and returns a number
The interface does not say how the discount is calculated. Each class that
implements the interface writes its own body with its own math
What happens if you add a body

If you write curly braces in the interface, like this:
export interface DiscountableProduct {
  applyDiscount(percentage: number): number {
    return 0;
  }
}

TypeScript stops with an error, because interfaces are not allowed to contain 
code, the body belongs in the class
*/
export interface DiscountableProduct {
    //method that takes the percentage and returns the discounted price
    //in and interface you write only the signature and end the line with a semicolon
    addDiscount(percent: number): number;
}

