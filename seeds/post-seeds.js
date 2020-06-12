const { Post } = require('../models');

const postData = [
  {
    title: 'Welcome to MVC',
    post_url: "https://www.google.com",
    user_id: 2
    
  },
  {
    title: 'Finish the challenge',
    post_url: "https://www.trackmaster.com/post",
    user_id: 1
  },
  {
    title: 'Yoga Challenge near N.California',
    post_url: "https://www.yoga.com",
    user_id: 1
  },
  {
    title: 'Apple launches new iphone',
    post_url: "https://apple.com",
    user_id: 3
  },
  {
    title: 'Marathon prep',
    post_url: "https://www.marathon.com/register",
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;