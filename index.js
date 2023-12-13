import { Product } from "./product.js";
import { Category } from "./category.js";
import { Cart } from "./cart.js";
import { Order } from "./order.js";

// Data Kategori
const categories = [
  // Move the declaration here
  new Category1(1, "Laptop"),
  new Category2(2, "Handphone"),
  new Category3(3, "Iphone"),
];

const products = [];

// Data Produk
const laptopProduct = new Product(1, "Lenovo", 100, "This is Lenovo", 1);
const handphoneProduct = new Product(2, "Xiaomi", 200, "This is Xiaomi", 2);
const iphoneProduct = new Product(3, "Iphone 14", 300, "This is Iphone 14", 3);

// Add products
category1.addToProduct(laptopProduct);
category2.addToProduct(handphoneProduct);
category3.addToProduct(iphoneProduct);

function addToProduct(product) {
  products.push(product);
  if (product.categoryId) {
    const category = categories.find(
      (category) => category.id === product.categoryId
    );

    if (category) {
      category.addProduct(product.productId);
    } else {
      console.warn(`No category found for product: ${product.productName}`);
    }
  } else {
    console.warn(`${product.productName} doesn't have a valid category ID`);
  }
}

let laptopCategory = categories.find((category) => category.name === "Laptop");

// Tambahkan produk ke kategori
// Add product to category directly
laptopCategory.addProduct(1);
// console.log("Added product to category: ", laptopCategory.products);
// Keranjang Belanja
const cart1 = new Cart();
cart1.addItem(products[0], 2);
cart1.addItem(products[2], 1);

// Pesanan
const order1 = new Order(1, cart1);

// Output

console.log("-- Produk --");
products.forEach((product) => product.displayInfo());

console.log("\n-- Kategori --");
categories.forEach((category) => {
  category.displayInfo();
  console.log("Produk:");

  // Filter produk berdasarkan ID kategori
  const categoryProducts = products.filter((product) =>
    category.products.includes(product.productId)
  );

  // Looping melalui produk kategori
  categoryProducts.forEach((product) => {
    product.displayInfo();
  });
});

console.log("\n-- Keranjang Belanja --");
cart1.displayCartItems();

console.log("\n-- Pesanan --");
order1.displayOrderDetails();
