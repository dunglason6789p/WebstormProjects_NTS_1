"use strict";
/*import * as mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    author: String,
    content: String,
    title: String,
});

const PostModel = mongoose.model('Post', postSchema);*/
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var postSchema = new mongoose.Schema({
    author: String,
    content: String,
    title: String,
});
// const postModel = mongoose.model<Post & mongoose.Document>('Post', postSchema);
// @ts-ignore
var postModel = mongoose.model('Post', { xyz: 456 });
// export default postModel;
function createPost(request, response) {
    var postData = request.body;
    // const createdPost = new postModel(postData);
    var createdPost = new postModel({ abc: 123 });
    createdPost.save()
        .then(function (savedPost) {
        response.send(savedPost);
    });
}
