const Product = require("../models/Products");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      success: true,
      message: "Get all Products",
      data: products,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { body } = req;
    const createdProduct = await req.user.createProduct(body);
    res.status(201).json({
      success: true,
      message: `Product created with id ${createdProduct.id}`,
      data: createdProduct,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res
      .status(200)
      .json({ success: true, message: `Product with id ${id} is deleted` });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const productToFind = await Product.findOne({ where: { id } });
    if (!productToFind)
      return res.status(400).json({
        success: false,
        message: `cannot find product with id ${id}`,
      });
    await Product.update(body, { where: { id } });

    const updatedProduct = await Product.findOne({ where: { id } });

    res.status(200).json({
      success: true,
      message: `Product with id ${id} updated`,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
