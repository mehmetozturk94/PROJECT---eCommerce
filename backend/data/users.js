const bcrypt = require("bcrypt");
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mehmet Öztürk",
    email: "mehmetozturk@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
