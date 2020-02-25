/*import * as mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    author: String,
    content: String,
    title: String,
});

const PostModel = mongoose.model('Post', postSchema);*/

import * as mongoose from 'mongoose';
// import Post from './post.interface';

interface Post {
    author: string,
    content: string,
    title: string,
}

const postSchema = new mongoose.Schema({
    author: String,
    content: String,
    title: String,
});

// const postModel = mongoose.model<Post & mongoose.Document>('Post', postSchema);
// @ts-ignore
const postModel = mongoose.model<Post & mongoose.Document>('Post', {xyz:456});

// export default postModel;

function createPost(request: any, response: any) {
    const postData: Post = request.body;
    // const createdPost = new postModel(postData);
    const createdPost = new postModel({abc:123});
    createdPost.save()
        .then(savedPost => {
            response.send(savedPost);
        })
}
