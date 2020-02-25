export const DBNAME = "dby2";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    isGood: Boolean,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    isBoring: Boolean,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

export const Story = mongoose.model('Story', storySchema);
export const Person = mongoose.model('Person', personSchema);


