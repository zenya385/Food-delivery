const {
    getProducts,
    shopCheck,
  } = require("../services/products");
  
  const getProduct = async (req, res, next) => {
    const products = await getProducts(req.params);
    res.status(200).send(products);
  };
  
  
  module.exports = {
    getProduct, 
  
  };