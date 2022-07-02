const {
  getShops,
  shopCheck,
} = require("../services/shops");

const getShop = async (req, res, next) => {
  const shops = await getShops(req.params);
  res.status(200).send(shops);
};

const checkShop = async (req, res, next) => {
  const result = await shopCheck(req.params.type, req.body);
  console.log('result', result)
  res.status(200).send({ rightAnswers: result });
};

module.exports = {
  getShop, 
  checkShop,
};
