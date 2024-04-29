const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // you have a Post model
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', //  you have a User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
