const {
    getProducts,
    shopCheck,
  } = require("../services/products");
  
  const getProduct = async (req, res, next) => {
    const products = await getProducts(req.params);
    console.log('products', products)
    res.status(200).send(products);
  };
  
//   const checkShop = async (req, res, next) => {
//     // console.log('req.params.type req.body', req.params, "---",req.body)
//     const result = await shopCheck(req.params.type, req.body);
//     console.log('result', result)
//     res.status(200).send({ rightAnswers: result });
//   };
  
  module.exports = {
    getProduct, 
  
  };