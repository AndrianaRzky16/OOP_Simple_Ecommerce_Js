class Product {
  constructor(productId, productName, price, description, categoryId) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.categoryId = categoryId;
  }

  displayInfo() {
    console.log(
      `Product ID: ${this.productId},
       Product Name: ${this.productName},
       Price: ${this.price},
       Description: ${this.description}`
    );
  }

  static createProduct(productName, price, description) {
    return new Product(Product.idCounter++, productName, price, description);
  }

  updateProduct(productName, price, description) {
    this.productName = productName;
    this.price = price;
    this.description = description;
  }

  deleteProduct() {
    console.log(`Product with ID: ${this.productId} has been deleted`);
  }

  addToCategory(category) {
    // Add logic to associate the product with the given category
    // This could involve updating internal data structures or interacting with an external data source
    console.log(
      `Adding product ${this.productName} to category ${category.name}`
    );
  }
}

Product.idCounter = 1;

export { Product };
