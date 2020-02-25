import * as mongoose from "mongoose";
import {Query, Schema} from "mongoose";

var Person = mongoose.model('Person',
    new Schema({
        name:String,
        occupation: String,
        age:Number,
        likes:String
    })
);

class TQuery<T> extends Query<T>{

}

// With a JSON doc
Person.
find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 },
    likes: { $in: ['vaporizing', 'talking'] }
}).
limit(10).
sort({ occupation: -1 }).
select({ name: 1, occupation: 1 }).
exec((err,res)=>{

});

// Using query builder
Person.
find({ occupation: /host/ }).
where('name.last').equals('Ghost').
where('age').gt(17).lt(66).
where('likes').in(['vaporizing', 'talking']).
limit(10).
sort('-occupation').
select('name occupation').
exec((err,res)=>{

});
