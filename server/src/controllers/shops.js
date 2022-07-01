const {
  getShops,
  shopCheck,
} = require("../services/shops");

const getShop = async (req, res, next) => {
  const shops = await getShops(req.params);
  console.log('shops', shops)
  res.status(200).send(shops);
};

const checkShop = async (req, res, next) => {
  // console.log('req.params.type req.body', req.params, "---",req.body)
  const result = await shopCheck(req.params.type, req.body);
  console.log('result', result)
  res.status(200).send({ rightAnswers: result });
};

module.exports = {
  getShop, 
  checkShop,
};
