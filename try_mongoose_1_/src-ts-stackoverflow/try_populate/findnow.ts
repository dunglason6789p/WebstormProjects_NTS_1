import {DBNAME, Story} from "./schemaas";
import * as mongoose from "mongoose";

mongoose.connect('mongodb://localhost/'+DBNAME, {useNewUrlParser: true/*, useUnifiedTopology: true*/})
    .then(r => {
        Story.find({title: /free/i})
            .populate('author fans')
            .exec(function (err, stories) {
                if (err) return console.log(err);
                //console.log(stories);
                for(let story of stories){
                    console.log("[TRACE] a story found:")
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


