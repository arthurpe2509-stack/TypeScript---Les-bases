import { Customer } from "./Customers/customer.js";
import { Clothing } from "./product/Clothing.js";
import { ClothingSize } from "./product/ClothingSize.js";
import { Order } from "./Order.js";
import { Shoes } from "./product/Shoes.js";

const customer = new Customer(1, "Alice Dupont", "alice@email.com");
const product1 = new Clothing(1, "T-shirt", 0.2, 19.99, ClothingSize.ExtraSmall);
const product2 = new Clothing(2, "Jeans", 0.5, 49.99, ClothingSize.Large);
const product3 = new Shoes(3, "Sneakers", 0.8, 79.99, 42);


const order = new Order(1, customer, [], new Date());
order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);

console.log(order.displayOrder()); 