const Product = require("../models/productManager.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello G",
  });
};
module.exports.createProduct = (request, response) => {
  Product.create(request.body)
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};
