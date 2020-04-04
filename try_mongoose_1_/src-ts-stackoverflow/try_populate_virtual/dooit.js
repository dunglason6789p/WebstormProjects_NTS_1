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
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var PersonSchema = new mongoose_1.Schema({
    name: String,
    band: String
});
// Set `virtuals: true` so `res.json()` works
var BandSchema = new mongoose_1.Schema({
    name: String
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
BandSchema.virtual('members', {
    ref: 'Person',
    localField: 'name',
    foreignField: 'band',
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false,
    options: { sort: { name: -1 }, limit: 5 } // Query options, see http://bit.ly/mongoose-query-options
});
var Person = mongoose.model('Person', PersonSchema);
var Band = mongoose.model('Band', BandSchema);
var band1 = new Band({
    name: "band_1"
});
var band2 = new Band({
    name: "band_2"
});
var person1 = new Person({
    name: "person 1",
    band: "band_1"
});
var person2 = new Person({
    name: "person 2",
    band: "band_2"
});
var person3 = new Person({
    name: "person 3",
    band: "band_1"
});
var person4 = new Person({
    name: "person 4",
    band: "band_2"
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
mongoose.connect('mongodb://localhost/pv7', { useNewUrlParser: true /*, useUnifiedTopology: true*/ })
    .then(function (r) { return __awaiter(void 0, void 0, void 0, function () {
    var l, _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                if (!false) return [3 /*break*/, 7];
                l = new CustomLogger();
                _a = l;
                return [4 /*yield*/, person1.save()];
            case 1:
                _a.log = _g.sent();
                _b = l;
                return [4 /*yield*/, person2.save()];
            case 2:
                _b.log = _g.sent();
                _c = l;
                return [4 /*yield*/, person3.save()];
            case 3:
                _c.log = _g.sent();
                _d = l;
                return [4 /*yield*/, person4.save()];
            case 4:
                _d.log = _g.sent();
                _e = l;
                return [4 /*yield*/, band1.save()];
            case 5:
                _e.log = _g.sent();
                _f = l;
                return [4 /*yield*/, band2.save()];
            case 6:
                _f.log = _g.sent();
                _g.label = 7;
            case 7:
                Band.find({ /*all*/})
                    .populate('members')
                    .exec(function (error, bands) {
                    // console.log("[INFO]founds:");
                    // console.log(bands);
                    for (var _i = 0, bands_1 = bands; _i < bands_1.length; _i++) {
                        var ban = bands_1[_i];
                        console.log("[INFO]a found:");
                        console.log(ban);
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=dooit.js.map