"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var commonThings_1 = require("./commonThings");
var mongoose_1 = require("mongoose");
var personSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Story' }]
});
var storySchema = new mongoose_1.Schema({
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Person' }]
});
exports.Story = mongoose.model('Story', storySchema);
exports.Person = mongoose.model('Person', personSchema);
var author = new exports.Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
});
var me = new exports.Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Son Nguyen',
    age: 14
});
var story1 = new exports.Story({
    title: 'Casino Royale',
    author: author._id,
    fans: [author._id, me._id]
});
mongoose.connect('mongodb://localhost/' + commonThings_1.DBNAME, { useNewUrlParser: true /*, useUnifiedTopology: true*/ })
    .then(function (r) {
    console.log("connected");
    author.save(function (err, res) {
        if (err)
            console.log(err);
        console.log(res);
        me.save(function (err, res) {
            if (err)
                console.log(err);
            console.log(res);
            story1.save(function (err, res) {
                if (err)
                    return console.log(err);
                console.log(res);
                //Story.find({title: 'Casino Royale'})
                exports.Story.findOne({ title: 'Casino Royale' })
                    .populate('author fans')
                    .exec(function (err, story) {
                    if (err)
                        return console.log(err);
                    console.log("[INFO]found:");
                    console.log(story);
                });
            });
        });
    });
});
//# sourceMappingURL=try_populate_.js.map