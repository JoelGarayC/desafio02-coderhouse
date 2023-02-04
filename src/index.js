import path from "path";
import * as url from "url";
import ProductManager from "./ProductManager.js";

//alternativa __dirname de module, para obtener la ruta actual
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const basePath = path.join(`${__dirname}/products.json`);
const product = new ProductManager(basePath);

// creacion de productos para products.json
const addProd = product.addProduct({
  title: "Product",
  code: "3eg",
  description: "Product",
  price: 10,
  stock: 45,
  thumbnail: "http://example.com",
});

//actualizando el producto
addProd
  .then(() => {
    product.updateProduct(1, {
      title: "Producto modificado upd",
      code: "3e214d",
      description: "Product",
      price: 18,
      stock: 45,
      thumbnail: "http://example.com",
    });
  })
  .catch((err) => {
    console.log(err);
  });

//eliminando un producto
setTimeout(() => {
  product.deleteProduct(8);
}, 1500);

//lista de productos
setTimeout(() => {
  product
    .getProducts()
    .then((products) => {
      console.log(products);
    })
    .catch((err) => {
      console.log(err);
    });
}, 2000);

//producto segun su id
setTimeout(() => {
  product
    .getProductById(2)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}, 2500);
