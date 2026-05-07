"use strict";
class Custommer {
    custommerId;
    name;
    email;
    constructor(custommerId, name, email) {
        this.custommerId = custommerId;
        this.name = name;
        this.email = email;
    }
}
let person = new Custommer(1, "John Doe", "john.doe@example.com");
console.log(person);
