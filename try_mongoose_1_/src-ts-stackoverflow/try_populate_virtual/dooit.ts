export {}
import {Schema} from "mongoose";
const mongoose = require("mongoose");
const PersonSchema = new Schema({
    name: String,
    band: String
});

// Set `virtuals: true` so `res.json()` works
const BandSchema = new Schema({
    name: String
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
BandSchema.virtual('members', {
    ref: 'Person', // The model to use
    localField: 'name', // Find people where `localField`
    foreignField: 'band', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false,
    options: { sort: { name: -1 }, limit: 5 } // Query options, see http://bit.ly/mongoose-query-options
});

const Person = mongoose.model('Person', PersonSchema);
const Band = mongoose.model('Band', BandSchema);

const band1 = new Band({
    name:"band_1"
});
const band2 = new Band({
    name:"band_2"
});
const person1 = new Person({
    name:"person 1",
    band:"band_1"
});
const person2 = new Person({
    name:"person 2",
    band:"band_2"
});
const person3 = new Person({
    name:"person 3",
    band:"band_1"
});
const person4 = new Person({
    name:"person 4",
    band:"band_2"
});
class CustomLogger{
    private _log:any;
    set log(value: any) {
        console.log(value);
    }
}
mongoose.connect('mongodb://localhost/pv7', {useNewUrlParser: true/*, useUnifiedTopology: true*/})
    .then(async r => {
        if(false){
            const l = new CustomLogger();
            l.log = await person1.save();
            l.log = await person2.save();
            l.log = await person3.save();
            l.log = await person4.save();

            l.log = await band1.save();
            l.log = await band2.save();
        }
        Band.find({/*all*/})
            .populate('members')
            .exec(
                function(error, bands){
                    // console.log("[INFO]founds:");
                    // console.log(bands);
                    for(let ban of bands){
                        console.log("[INFO]a found:");
                        console.log(ban);
                    }
                }
            );
    });
