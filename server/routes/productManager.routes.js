const productManagerController = require("../controllers/productManager.controller");

module.exports = (app) => {
  app.get("/api", productManagerController.index);
  app.post("/api/products", productManagerController.createProduct);
  app.get("/api/products", productManagerController.getAllProducts);
  app.get("/api/product/:id", productManagerController.getProduct);
  app.put("/api/product/:id", productManagerController.updateProduct);
  app.delete("/api/product/:id", productManagerController.deleteProduct);
};
