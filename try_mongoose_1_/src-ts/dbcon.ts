import {Schema, SchemaDefinition} from "mongoose";

const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
setTimeout(function() {
    console.log("timeout ended, now trying to connect...");
    mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true/*, useUnifiedTopology: true*/});
}, 3000);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected !");
});


/*interface IEmail{
    email:string,
    cost:number
}*/
interface IEmail2{
    email,toWho,detail
}

function _full<T>(value:T):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}
function _part<T>(value:Partial<T>):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}

let emailSchema:Schema = new mongoose.Schema(_full<IEmail2>({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return value.length >= 5;
        }
    },
    toWho:{
    },
    detail:{
    }
}));

console.log("after code `emailSchema`");

const EmailModel = mongoose.model('Email', emailSchema);

console.log("after code `EmailModel`");


//let EmailModel = require('./email');

let msg = new EmailModel({
    email: 'x@xret',
    age: 123
});

console.log("after code `msg`");

msg.save(/*err=>{
    console.log("save error:");
    console.log(err);
}*/)
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });

console.log("after code `save`");
