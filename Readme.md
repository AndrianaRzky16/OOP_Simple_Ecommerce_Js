Cara Penggunaan
Pertama, jangan lupa npm install untuk menginstal semua paket yang sudah terdaftar di package.json.

Kelas Produk
Buat Produk

Daripada menggunakan kata kunci new untuk membuat instance objek dari kelas Produk, kita bisa menggunakan metode statis createProduct() dan meneruskan argumen dengan nama format, harga, deskripsi

const laptopProduct = Produk baru(1, "Lenovo", 100, "Ini Lenovo", 1);
const handphoneProduk = Produk baru(2, "Xiaomi", 200, "Ini Xiaomi", 2);
const iphoneProduct = Produk baru(3, "Iphone 14", 300, "Ini Iphone 14", 3);
Menampilkan Info Produk

Kita bisa menggunakan metode displayInfo() untuk menampilkan informasi produk yang baru kita buat sebelumnya.

produk1.displayInfo();
Contoh keluaran:

-- Produk --
ID Produk: 1,
Nama Produk:Lenovo,
Harga: 100,
Deskripsi: Ini Lenovo
ID Produk: 2,
Nama Produk: Xiaomi,
Harga: 200,
Deskripsi: Ini Xiaomi
ID Produk: 3,
Nama Produk: Iphone 14,
Harga: 300,
Deskripsi: Ini adalah Iphone 14

Buat Kategori

Buat instance kategori baru dengan metode statis createCategory(), masukkan nama kategori pada argumennya.

const categories = [
new Category(1, "Laptop"),
new Category(2, "Handphone"),
new Category(3, "Iphone"),
];

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

Output:
-- Kategori --

ID: 1, Category Name: Laptop
Produk: Lenovo
ID: 2, Category Name: Handphone
Produk: Xiaomi
ID: 3, Category Name: Iphone
Produk: Iphone 14

Tampilkan Info Kategori

Kita dapat menggunakan displayInfo() untuk melihat informasi detail Kategori.

Kita dapat memperbarui kategori dengan metode updateCategory().

kategori2.updateCategory('Laptop');
Hapus Kategori

Kita dapat menghapus kategori dengan menyetel nilai properti isActive ke false dengan metode deleteCategory.

kategori1.deleteCategory();
Jika mencoba mengakses kategori yang dihapus dengan displayInfo(), hasilnya tidak ditemukan.

kategori1.displayInfo();

Hasil:
Kategori tidak ditemukan.
Tambahkan produk ke Kategori

Kategori dapat memiliki banyak item atau produk yang sesuai. Kita dapat menambahkan produk ke beberapa kategori dengan metode addProduct() dengan meneruskan nama produk ke argumennya.

// kami membuat beberapa produk
const laptopProduct = new Product(1, "Lenovo", 100, "This is Lenovo", 1);
const handphoneProduct = new Product(2, "Xiaomi", 200, "This is Xiaomi", 2);
const iphoneProduct = new Product(3, "Iphone 14", 300, "This is Iphone 14", 3);

// Add products
category1.addToProduct(laptopProduct);
category2.addToProduct(handphoneProduct);
category3.addToProduct(iphoneProduct);
Hasil:

Produk berhasil ditambahkan ke kategori

// Menambahkan produk yang dihapus akan mengembalikan ini.
Produk tidak ditemukan. Gagal menambahkan ke kategori

Produk berhasil ditambahkan ke kategori

We could use new keyword to instantiate an object from Cart class.

const cart1 = new Cart();
Add item to a cart

Menambahkan produk atau item, kita bisa menggunakan metode addItem(), diikuti dengan Nama produk dan jumlah yang ingin Anda tambahkan ke keranjang.

cart1.addItem(products[0], 2);
cart1.addItem(products[2], 1);

console.log("\n-- Keranjang Belanja --");
cart1.displayCartItems();

The output:

Item berhasil ditambahkan ke keranjang

-- Keranjang Belanja --
Cart ID: 1
Items:
Product Lenovo
Price: 100
Quantity: 2
Product Iphone 14
Price: 300
Quantity: 1

console.log("\n-- Pesanan --");
order1.displayOrderDetails();

-- Pesanan --
Order ID: 1
Items:
Lenovo - Quantity: 2 - Price: 100
Iphone 14 - Quantity: 1 - Price: 300
Total Amount: 500
