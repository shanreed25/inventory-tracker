class Product {
    // /*Step 1
    // The property declaration describes the shape of every Product
    // TypeScript reads the top of the class to learn what each object will hold
    // these properties live on the object forever
    // */
    // name: string;
    // sku: string;
    // price: number;

    // /*Step 2
    // The constructor parameter is just a local variable, like any function parameter
    // The parameter disappears once the constructor finishes running
    // */
    // constructor(name:string, sku:string, price:number){
    //     /*Step 3
    //     The assignment is the step that moves the value from the 
    //     temporary parameter onto the object
    //     */
    //     this.name = name;
    //     this.sku = sku;
    //     this.price = price;

    //}


    /*
    When a parameter maps straight onto a property, TypeScript lets you 
    collapse all three steps into one by putting public in front of the parameter
    */
    constructor(public name:string, public sku:string, public price:number){}

}



export {Product};
