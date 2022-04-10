const { Post } = require('../models');

/* Creates posts in our DB */

const postData = [
  {
    title: "The Best Leptop of 2022",
    content:
      "Alienware is good if you have 4000 dollars to burn :)",
    user_id: 1
  },
  {
    title: "I love coding",
    content:
      "painpainpain",
    user_id: 2
  },
  {
    title: "salkdjfklasjhdf",
    content:
      "test ",
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
