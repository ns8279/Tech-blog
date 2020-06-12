const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Checking it out',
    user_id: 1,
    post_id: 2
    
  },
  {
    comment_text: 'Nice',
    user_id: 1,
    post_id: 4
  },
  {
    comment_text: 'will check it out',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Good stuff',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Checking if this is still going on',
    user_id: 1,
    post_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;