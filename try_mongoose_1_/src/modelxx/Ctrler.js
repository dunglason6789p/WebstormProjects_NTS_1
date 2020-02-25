"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SomeModel_1 = require("./SomeModel");
var DB = /** @class */ (function () {
    function DB() {
        mongoose_1.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        this._db = mongoose_1.connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);
        this._models = {
            Contact: new SomeModel_1.Contact().model
            // this is where we initialise all models
        };
    }
    Object.defineProperty(DB, "Models", {
        get: function () {
            if (!DB.instance) {
                DB.instance = new DB();
            }
            return DB.instance._models;
        },
        enumerable: true,
        configurable: true
    });
    DB.prototype.connected = function () {
        console.log('Mongoose has connected');
    };
    DB.prototype.error = function (error) {
        console.log('Mongoose has errored', error);
    };
    return DB;
}());
exports.DB = DB;
