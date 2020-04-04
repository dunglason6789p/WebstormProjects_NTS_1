"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBNAME = "dby2";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    isGood: Boolean,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});
var storySchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    isBoring: Boolean,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});
exports.Story = mongoose.model('Story', storySchema);
exports.Person = mongoose.model('Person', personSchema);
//# sourceMappingURL=schemaas.js.map