const { Users } = require("../db/userModel");
const fs = require("fs").promises;

require("dotenv").config();

const addUser = async (body) => {
  await Users.create(body);
};

module.exports = {
  addUser,
};
