const { User } = require("../models");


const userData = [
  {
    username: "jdif",
    password: "pass123",
  },

  {
    username: "rosco444",
    password: "pass123",
  },

  {
    username: "hungryman",
    password: "pass123"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
