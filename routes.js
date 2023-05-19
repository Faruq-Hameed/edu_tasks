const express = require("express");
const router = express();
const {getPosts,getComments,} = require("./src/controllers.js")
//post routers
router.get("/posts", getPosts);

//comment routers
router.get("/comments", getComments);

module.exports = router;
