import type { ShoeSize } from "./ShoeSize.js";
import { Product } from "./Product.js";

class Shoes extends Product {
    public size: ShoeSize;

    constructor(productId: number, name: string, weight: number, price: number, size: ShoeSize) {
        super(productId, name, weight, price);
        this.size = size;
    }

    displayDetails(): string {
        return `${super.displayDetails()}, size : ${this.size}`;
    }
}