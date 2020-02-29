//Require Mongoose
const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CKContentSchema = new Schema({
    content:String
});
// Compile model from schema
export const CKContentModel = mongoose.model('CKContentModel', CKContentSchema );


