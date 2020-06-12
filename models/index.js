//import the models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//defining relations between the models and creating associations
User.hasMany(Post);

Post.belongsTo(User);

//Comments
Comment.belongsTo(User);

Comment.belongsTo(Post);

User.hasMany(Comment);

Post.hasMany(Comment)

module.exports = { User, Post, Comment };