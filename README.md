# Inventory Tracker

> Object-oriented inventory tracker using TypeScript. The tracker distinguishes between a PhysicalProduct and DigitalProduct, calculates applicable taxes, and manages inventory using modules.

#### Inheritance
- `PhysicalProduct` and `DigitalProduct` both extends Product, and each constructor calls `super(name, sku, price)` and each adds one property of its own (`weight` or `fileSize`), so `Product` set` up the shared data
- Both subclasses receive the shared fields, getters, setters, and methods from `Product` without rewriting them

#### Encapsulation
- The product data lives in private and protected fields (`_name`, `_sku`, `_price`, `_weight`, `_fileSize`), so code outside the classes cannot change those values directly
- Getters give read access, and setters are the only way to change a value, with validation rejecting prices, weights, and file sizes of zero or less
- The constructors assign through the setters, so an invalid product cannot be created either. `_price` is protected rather than private so PhysicalProduct and DigitalProduct can still use it in their tax calculations

#### Polymorphism
- The inventory array is typed as `Product[]` but holds a mix of physical and digital products
- Inside the forEach loop, `item.displayDetails()` and `calculateTax(item)` are written once, but each item runs its own subclass version of the method
- `calculateTax()` in `taxCalculator.ts` accepts any Product and gets the correct tax for whichever subclass is passed in

#### Method Overriding
- Both subclasses define their own versions of two Product methods
- `displayDetails()` calls `super.displayDetails()` to reuse the base output and then appends weight or file size
- `getPriceWithTax()` replaces the 5% base tax with 10% for physical products and no tax for digital products

#### Type Narrowing
- Because inventory is `Product[]`, TypeScript only allows Product members on item, so `item.weight` is an error
- The `instanceof` checks in `main.ts` narrow the type: inside if (item instanceof PhysicalProduct), TypeScript knows item is a PhysicalProduct and allows `weight`, and the DigitalProduct branch does the same for `fileSize`.


#### Challenge
> Added a `DiscountableProduct` interface that includes a method `applyDiscount()`. Implemented the interface in one of the DigitalProduct Class.
