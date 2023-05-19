const { Comment,Post } = require("./db");
const StatusCodes = require("http-status-codes");

// get  posts
const getPosts = async (req, res) => {
  const { limit } = req.query; //if not specified all posts will be returned
  Post.find({})
    .limit(limit * 1) //multiply by 1 to ensure that the limit is a number or NaN( to give undefined)
    .then((posts) => {
      res.status(StatusCodes.StatusCodes.OK).send(posts);
    })
    .catch((err) => {
      res
        .status(StatusCodes.StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    });
};

// get Comments
const getComments = async (req, res) => {
  const { limit } = req.query; //if not specified all comments will be returned
  Comment.find({})
    .limit(limit * 1) //multiply by 1 to ensure that the limit is a number or NaN( to give undefined)
    .then((comments) => {
      res.status(StatusCodes.StatusCodes.OK).send(comments);
    })
    .catch((err) => {
      res
        .status(StatusCodes.StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    });
};

module.exports = { getPosts, getComments };
