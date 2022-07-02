const { Products } = require("../db/productsModel");

const getProducts = async () => {
const products = await Products.find({})


    return (
        products 
    );
}

module.exports = {
    getProducts
  };
  