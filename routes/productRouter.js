const router = require("express").Router();

const ProductController = require("../controllers/productController");

router
  .route("/")
  .get(ProductController.getAllProducts)
  .post(ProductController.createProduct);

router
  .route("/:id")
  .patch(ProductController.updateProduct)
  .delete(ProductController.deleteProduct);

module.exports = router;
