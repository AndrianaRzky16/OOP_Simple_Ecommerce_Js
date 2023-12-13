class Cart {
  constructor() {
    this.cartId = Cart.getNextCartId();
    this.items = [];
  }

  static nextCartId = 1; // Starting cart ID

  static getNextCartId() {
    return Cart.nextCartId++;
  }

  addItem(product, quantity, price) {
    this.items.push({ product, quantity, price });
  }

  removeItem(product) {
    this.items = this.items.filter((item) => item.product !== product);
  }

  displayCartItems() {
    if (this.items.length === 0) {
      console.log("Cart is empty.");
    } else {
      console.log(`Cart ID: ${this.cartId}`);
      console.log("Items:");
      this.items.forEach((item) => {
        console.log(`Product ${item.product.productName}
        Price: ${item.product.price}
        Quantity: ${item.quantity} `);
      });
    }
  }
}

export { Cart };
