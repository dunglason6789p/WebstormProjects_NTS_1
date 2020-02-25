"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemaas_1 = require("./schemaas");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/' + schemaas_1.DBNAME, { useNewUrlParser: true /*, useUnifiedTopology: true*/ })
    .then(function (r) {
    schemaas_1.Story.find({ title: /free/i })
        .populate('author fans')
        .exec(function (err, stories) {
        if (err)
            return console.log(err);
        //console.log(stories);
        for (var _i = 0, stories_1 = stories; _i < stories_1.length; _i++) {
            var story = stories_1[_i];
            console.log("[TRACE] a story found:");
            console.log(story);
        }
    });
    /*Story.findOne({title: /free/i})
        .populate('author fans')
        .exec(function (err, storiesJSONmaybe) {
            if (err) return console.log(err);
            console.log(storiesJSONmaybe);
            /!*const stories = JSON.parse(storiesJSONmaybe);
            console.log("[INFO]found:");
            console.log(stories);
            console.log("[TRACE]fans:")
            for(let story in stories){
                console.log(story);
                // @ts-ignore
                console.log(story.fans);
                // @ts-ignore
                for(let fan in story.fans){
                    console.log(fan);
                }
                console.log("---------------------------------------")
            }*!/
        });*/
});
