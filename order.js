class Order {
  constructor(orderId, cart) {
    this.orderId = orderId;
    this.items = cart && cart.items ? [...cart.items] : [];
    this.totalAmount = this.calculateTotal();
  }

  calculateTotal() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    }
  }

  createOrder(cart) {
    this.items = cart.items;
    this.totalAmount = this.calculateTotal();
  }

  displayOrderDetails() {
    console.log(`Order ID: ${this.orderId}`);
    console.log("Items:");
    this.items.forEach((item) => {
      console.log(
        `${item.product.productName} - Quantity: ${item.quantity} - Price: ${item.product.price}`
      );
    });
    console.log(`Total Amount: ${this.totalAmount}`);
  }
}

export { Order };
