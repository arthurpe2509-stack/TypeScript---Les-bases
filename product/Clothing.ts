import { Product } from "./Product.js";
import type { ClothingSize } from "./ClothingSize.js";

export class Clothing extends Product {
    public size: ClothingSize;

    constructor(productId: number, name: string, weight: number, price: number, size: ClothingSize) {
        super(productId, name, weight, price);
        this.size = size;
    }

    displayDetails(): string {
        return `${super.displayDetails()}, size : ${this.size}`;
    }
}