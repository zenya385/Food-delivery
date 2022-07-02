const { addUser } = require("../services/user");

const addUserControl = async (req, res) => {
  console.log('req.body', req.body)
  const user = await addUser(req.body);
  res.status(201).json({
    contentType: "application/json",
    ResponseBody: user,
  });
};

module.exports = {
  addUserControl,
};
