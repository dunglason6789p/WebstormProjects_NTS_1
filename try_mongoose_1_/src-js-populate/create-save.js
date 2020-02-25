const {handleError} = require("./common");
const {Person} = require("./schemaAndModel");
const mongoose = require('mongoose');

const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
});
const story1 = new Story({
    title: 'Casino Royale',
    author: author._id    // assign the _id from the person
});

mongoose.connect('mongodb://localhost/db1', {useNewUrlParser: true/*, useUnifiedTopology: true*/})
    .then(r => {
        console.log("connected");

        author.save(function (err,res) {
            if (err) return handleError(err);
            console.log(res);

            story1.save(function (err,res) {
                if (err) return handleError(err);
                console.log(res);
            })/*.then(r => {
                console.log("story1.save: "+r);
            })*/;
        })/*.then(r => {
            console.log("author.save: "+r);
        })*/;
    });
