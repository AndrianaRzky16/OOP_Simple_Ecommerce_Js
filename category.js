class Category {
  constructor(id, name, products = [], productMap = {}) {
    this.id = id;
    this.name = name;
    this.products = products;
    this.productMap = productMap;
  }

  getProducts() {
    return this.products.map((productId) => this.productMap[productId]);
  }

  displayInfo() {
    console.log(`ID: ${this.id}, Category Name: ${this.name}`);
  }

  static createCategory(name) {
    return new Category(Category.idCounter++, name);
  }

  updateCategory(name) {
    this.name = name;
  }

  deleteCategory() {
    console.log(`Category with ID: ${this.id} has been deleted`);
  }

  addProduct(productId) {
    const products = this.products;
    const product = products.find((p) => p.productId === productId);
    console.log(productId);
    if (product) {
      this.products.push(product);
    } else {
      // console.error(`Product with ID ${productId} not found`);
    }
  }
}

Category.idCounter = 1;

export { Category };
