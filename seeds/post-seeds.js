const { Post } = require('../models');

const postData = [
  {
    title: 'Welcome to MVC',
    post_text: "MVC allows developrs to maintain a true seperation of concerns. It consists of Model, views and controllers",
    user_id: 2
    
  },
  {
    title: 'Finish the challenge',
    post_text: "The MVC challenge is due by 14th June",
    user_id: 1
  },
  {
    title: 'Object relational mapping',
    post_text: "I really like using ORM as it has simplfied the SQL part in my Javascript projects",
    user_id: 1
  },
  {
    title: 'Apple launches new iphone',
    post_text: "Amidst the lockdown, Apple still is at the top by launching  a new iphone.",
    user_id: 3
  },
  {
    title: 'Express - session',
    post_text: "Express session allows to store user cookies  and can be very helpful in the field of Web Development",
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;