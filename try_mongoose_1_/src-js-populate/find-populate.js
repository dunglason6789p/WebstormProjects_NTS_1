const {Story} = require("./schemaAndModel");
const {handleError} = require("./common");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db1', {useNewUrlParser: true/*, useUnifiedTopology: true*/})
    .then(r=>{
        /*Story.find((err,res)=>{console.log(res);});*/

        Story.findOne({title: 'Casino Royale'})
            .populate('author')
            .exec(function (err, story) {
                if (err) return handleError(err);
                console.log(story);
            });
    });

