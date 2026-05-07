import { Customer } from "./Customers/customer.js";
import { Clothing } from "./product/Clothing.js";
import { ClothingSize } from "./product/ClothingSize.js";
import { Order } from "./Order.js";

const customer = new Customer(1, "Alice Dupont", "alice@email.com");
const product1 = new Clothing(1, "T-shirt", 0.2, 19.99, ClothingSize.Small);
const product2 = new Clothing(2, "Jeans", 0.5, 49.99, ClothingSize.Large);

const order = new Order(1, customer, [], new Date());
order.addProduct(product1);
order.addProduct(product2);

console.log(order.displayOrder()); 