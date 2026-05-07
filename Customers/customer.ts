export class Customer {
    public customerId: number;
    public name: string;
    public email: string;

    constructor(customerId: number, name: string, email: string) {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
    }

    displayInfo(): string {
    return `Nom: ${this.name}, Email: ${this.email}`;
  }
}

