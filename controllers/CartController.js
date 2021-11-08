exports.getAllCarts = async (req, res) => {
  try {
    const userCart = await req.user.getCart();
    const products = await userCart.getProducts();
    res.status(200).json({});
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
