const {handleError} = require("./common");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childSchema = new Schema({
    name: String
});
const parentSchema = new Schema({
    // Array of subdocuments
    children: [childSchema],
    // Single nested subdocuments
    child: childSchema
});
module.exports.Child = Child = mongoose.model('Child', childSchema);
module.exports.Parent = Parent = mongoose.model('Parent', parentSchema);
