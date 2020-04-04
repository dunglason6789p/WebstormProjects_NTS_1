"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commonThings_1 = require("./commonThings");
var mongoose = require("mongoose");
var schemaas_1 = require("./schemaas");
mongoose.connect('mongodb://localhost/' + commonThings_1.DBNAME, { useNewUrlParser: true /*, useUnifiedTopology: true*/ })
    .then(function (r) {
    schemaas_1.Story.find({ title: 'Casino Royale' })
        .populate('author fans')
        .exec(function (err, story) {
        if (err)
            return console.log(err);
        console.log("[INFO]found:");
        console.log(story);
    });
});
//# sourceMappingURL=findOnly.js.map