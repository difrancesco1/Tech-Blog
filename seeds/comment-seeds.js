/*Required Connections*/
const { Comment } = require("../models");

/* Comments in DB */
const commentData = [
  {
    comment_text: "I have 1 dollar to purchase laptop :))",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "cool cool",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "hmmm good post",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
