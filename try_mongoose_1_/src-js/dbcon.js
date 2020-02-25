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



let emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return value.length >= 5;
        }
    }
});

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
