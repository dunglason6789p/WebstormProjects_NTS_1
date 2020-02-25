import {DBNAME} from "./commonThings";
import * as mongoose from "mongoose";
import {Story} from "./schemaas";

mongoose.connect('mongodb://localhost/'+DBNAME, {useNewUrlParser: true/*, useUnifiedTopology: true*/})
    .then(r => {
        Story.find({title: 'Casino Royale'})
            .populate('author fans')
            .exec(function (err, story) {
                if (err) return console.log(err);
                console.log("[INFO]found:");
                console.log(story);
            });
    });
