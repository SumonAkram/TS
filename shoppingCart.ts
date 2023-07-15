interface Product {
  id: number;
  name: string;
  price: number;
}

class ShoppingCart {
  private items: Product[] = [];

  addItem(item: Product): void {
    this.items.push(item);
    console.log(`Added ${item.name} to the cart.`);
  }

  removeItem(itemId: number): void {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      const removedItem = this.items.splice(index, 1)[0];
      console.log(`Removed ${removedItem.name} from the cart.`);
    } else {
      console.log(`Item with ID ${itemId} does not exist in the cart.`);
    }
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkout(): void {
    const totalPrice = this.getTotalPrice();
    console.log(`Total price: $${totalPrice.toFixed(2)}`);
    console.log("Processing payment...");
    // Code for processing payment goes here
    console.log("Payment successful.");
    console.log("Thank you for shopping with us!");
    this.items = [];
  }
}

// Example usage
const cart = new ShoppingCart();

const product1: Product = {
  id: 1,
  name: "Product 1",
  price: 10.99
};

const product2: Product = {
  id: 2,
  name: "Product 2",
  price: 5.99
};

cart.addItem(product1);
cart.addItem(product2);
cart.removeItem(2);
cart.checkout();
