"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
setTimeout(function () {
    console.log("timeout ended, now trying to connect...");
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true /*, useUnifiedTopology: true*/ });
}, 3000);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected !");
});
function _full(value) {
    return value;
}
function _part(value) {
    return value;
}
var emailSchema = new mongoose.Schema(_full({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: function (value) {
            return value.length >= 5;
        }
    },
    toWho: {},
    detail: {}
}));
console.log("after code `emailSchema`");
var EmailModel = mongoose.model('Email', emailSchema);
console.log("after code `EmailModel`");
//let EmailModel = require('./email');
var msg = new EmailModel({
    email: 'x@xret',
    age: 123
});
console.log("after code `msg`");
msg.save( /*err=>{
    console.log("save error:");
    console.log(err);
}*/)
    .then(function (doc) {
    console.log(doc);
})
    .catch(function (err) {
    console.error(err);
});
console.log("after code `save`");
