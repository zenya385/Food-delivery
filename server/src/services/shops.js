const { Shops } = require("../db/shopsModel");

const getShops = async () => {
const shops = await Shops.find({})

    return (
       shops 
    );
}

module.exports = {
    getShops
  };
  