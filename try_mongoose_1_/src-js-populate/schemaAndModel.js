const {handleError} = require("./common");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports.Story = Story = mongoose.model('Story', storySchema);
module.exports.Person = Person = mongoose.model('Person', personSchema);
