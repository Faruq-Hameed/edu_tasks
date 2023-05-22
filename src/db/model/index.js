const mongoose = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }]
}
);

//post schema
const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}
)

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}
)


//schema models
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
const Comment = mongoose.model("Comment", commentSchema);


module.exports = { User, Post, Comment }
