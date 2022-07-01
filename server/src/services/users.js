const { Users } = require("../db/usersModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs").promises;
const uuid = require("uuid");

require("dotenv").config();

// const signupUser = async body => {
//   const { email, password } = body;
//   await Users.create({
//     email,
//     password: await bcryptjs.hash(
//       password,
//       Number(process.env.BCRYPT_SALT_ROUNDS)
//     ),
//   });
//   let user = await Users.findOne({ email });
//   const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   });
//   const refreshToken = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN_REFRESH,
//   });
//   user = await Users.findOneAndUpdate(
//     { email },
//     { token, refreshToken },
//     { new: true }
//   );
//   return user;
// };


module.exports = {
  signupUser
};
