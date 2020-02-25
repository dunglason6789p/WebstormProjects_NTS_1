import * as mongoose from "mongoose";
import {Story, Person, DBNAME} from "./schemaas";

const person1 = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50,
    isGood: true
});
const person2 = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Son Nguyen',
    age: 14,
    isGood: false
});
const author1 = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'The Author 1',
    age: 99,
    isGood: false
});
const author2 = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'The Author 2',
    age: 51,
    isGood: true
});
const story1 = new Story({
    title: 'Casino Royale free book',
    fans: [person1._id,person2._id],
    author:author1._id
});
const story2 = new Story({
    title: 'Mat biec free ebook',
    fans: [person2._id],
    author:author2._id
});
const story3 = new Story({
    title: 'Truyen Co paid ebook',
    fans: [person1._id],
    author:author1._id
});

class CustomLogger{
    private _log:any;
    set log(value: any) {
        console.log(value);
    }
}

mongoose.connect('mongodb://localhost/'+DBNAME, {useNewUrlParser: true/*, useUnifiedTopology: true*/})
    .then(async r => {
        console.log("connected");
        try{
            const l = new CustomLogger();
            l.log = await person1.save();
            l.log = await person2.save();
            l.log = await author1.save();
            l.log = await author2.save();
            l.log = await story1.save();
            l.log = await story2.save();
            l.log = await story3.save();
        }catch (err) {
            console.log(err);
        }
    });
