import { Customer } from "./Customers/customer.js";
import { Product } from "./product/Product.js";
export class Order {
    orderId: number;
    customer: Customer;
    productList: Product[];
    orderDate: Date;

    constructor(orderId: number, customer: Customer, productList: Product[], orderDate: Date) {
        this.orderId = orderId;
        this.customer = customer;
        this.productList = productList;
        this.orderDate = orderDate;
    }

    addProduct(product: Product): void {
        this.productList.push(product);
    }

    removeProduct(productId: number): void {
        this.productList = this.productList.filter(product => product.productId !== productId);
    }

    calculateWeight(): number {
        return this.productList.reduce((totalWeight, product) => totalWeight + product.weight, 0);
    }

    calculateTotalPrice(): number {
        return this.productList.reduce((totalPrice, product) => totalPrice + product.price, 0);
    }
    displayOrder(): string {
        const productDetails = this.productList.map(product => product.displayDetails()).join("\n");
        return `Order ID: ${this.orderId}
        \n
        Customer: ${this.customer.displayInfo()}
        \n
        Products:\n${productDetails}
        \n
        Total Weight: ${this.calculateWeight()} kg
        \n
        Total Price: $${this.calculateTotalPrice()}
        \n
        Order Date: ${this.orderDate.toDateString()}`;
    }
}

