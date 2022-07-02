const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  phone: {
    type: String,
    required: [true],
  },
  address: {
    type: String,
    required: [true],
  }
});

const Users = model("users", usersSchema);

module.exports = {
  Users
};
