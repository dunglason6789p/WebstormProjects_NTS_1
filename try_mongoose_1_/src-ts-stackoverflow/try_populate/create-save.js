"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var schemaas_1 = require("./schemaas");
var person1 = new schemaas_1.Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50,
    isGood: true
});
var person2 = new schemaas_1.Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Son Nguyen',
    age: 14,
    isGood: false
});
var author1 = new schemaas_1.Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'The Author 1',
    age: 99,
    isGood: false
});
var author2 = new schemaas_1.Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'The Author 2',
    age: 51,
    isGood: true
});
var story1 = new schemaas_1.Story({
    title: 'Casino Royale free book',
    fans: [person1._id, person2._id],
    author: author1._id
});
var story2 = new schemaas_1.Story({
    title: 'Mat biec free ebook',
    fans: [person2._id],
    author: author2._id
});
var story3 = new schemaas_1.Story({
    title: 'Truyen Co paid ebook',
    fans: [person1._id],
    author: author1._id
});
var CustomLogger = /** @class */ (function () {
    function CustomLogger() {
    }
    Object.defineProperty(CustomLogger.prototype, "log", {
        set: function (value) {
            console.log(value);
        },
        enumerable: true,
        configurable: true
    });
    return CustomLogger;
}());
mongoose.connect('mongodb://localhost/' + schemaas_1.DBNAME, { useNewUrlParser: true /*, useUnifiedTopology: true*/ })
    .then(function (r) { return __awaiter(void 0, void 0, void 0, function () {
    var l, _a, _b, _c, _d, _e, _f, _g, err_1;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                console.log("connected");
                _h.label = 1;
            case 1:
                _h.trys.push([1, 9, , 10]);
                l = new CustomLogger();
                _a = l;
                return [4 /*yield*/, person1.save()];
            case 2:
                _a.log = _h.sent();
                _b = l;
                return [4 /*yield*/, person2.save()];
            case 3:
                _b.log = _h.sent();
                _c = l;
                return [4 /*yield*/, author1.save()];
            case 4:
                _c.log = _h.sent();
                _d = l;
                return [4 /*yield*/, author2.save()];
            case 5:
                _d.log = _h.sent();
                _e = l;
                return [4 /*yield*/, story1.save()];
            case 6:
                _e.log = _h.sent();
                _f = l;
                return [4 /*yield*/, story2.save()];
            case 7:
                _f.log = _h.sent();
                _g = l;
                return [4 /*yield*/, story3.save()];
            case 8:
                _g.log = _h.sent();
                return [3 /*break*/, 10];
            case 9:
                err_1 = _h.sent();
                console.log(err_1);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=create-save.js.map