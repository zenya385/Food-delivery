const { Shops } = require("../db/shopsModel");

const getShops = async () => {
const shops = await Shops.find({})
console.log('shopsServ', shops)

    return (
       shops 
    );
}

module.exports = {
    getShops
  };
  