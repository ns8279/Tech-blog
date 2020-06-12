const { User } = require('../models');

const userData = [
  {
    username: 'niru',
    email: "n@gmail.com",
    password: 'nirupama'
    
  },
  {
    username: 'ns8279',
    email: "ns@gmail.com",
    password: '123456'
  },
  {
    username: 'nirupama',
    email: "nirupama@gmail.com",
    password: 'password'
  },
  {
    username: 'bob',
    email: "bob@gmail.com",
    password: 'bob123'
  },
  {
    username: 'Sarah',
    email: "sarah@gmail.com",
    password: 'sarah123'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;