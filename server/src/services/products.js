const { Products } = require("../db/productsModel");

const getProducts = async () => {
const products = await Products.find({})
console.log('products', products)

    return (
        products 
    );
}

module.exports = {
    getProducts
  };
  