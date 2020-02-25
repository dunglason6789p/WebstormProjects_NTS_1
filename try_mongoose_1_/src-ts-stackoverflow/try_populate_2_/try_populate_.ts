import * as mongoose from "mongoose";
import {DBNAME} from "./commonThings";
import {Schema} from "mongoose";

const personSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

export const Story = mongoose.model('Story', storySchema);
export const Person = mongoose.model('Person', personSchema);

const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
});
const me = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Son Nguyen',
    age: 14
});
const story1 = new Story({
    title: 'Casino Royale',
    author: author._id,
    fans: [author._id,me._id]
});

mongoose.connect('mongodb://localhost/'+DBNAME, {useNewUrlParser: true/*, useUnifiedTopology: true*/})
    .then(r => {
        console.log("connected");

        author.save(function (err,res) {
            if (err) console.log(err);
            console.log(res);
            me.save(function(err,res){
                if (err) console.log(err);
                console.log(res);
                story1.save(function (err,res) {
                    if (err) return console.log(err);
                    console.log(res);
                    //Story.find({title: 'Casino Royale'})
                    Story.findOne({title: 'Casino Royale'})
                        .populate('author fans')
                        .exec(function (err, story) {
                            if (err) return console.log(err);
                            console.log("[INFO]found:");
                            console.log(story);
                        });
                });
            })
        });
    });
