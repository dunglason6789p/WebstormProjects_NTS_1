const mongoose = require('mongoose');
const validator = {
    isEmail: function (value) {
        return true;
    }
};

let emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    }
});

const EmailModel = mongoose.model('Email', emailSchema);



//let EmailModel = require('./email');

let msg = new EmailModel({
    email: 'ADA.LOVELACE@GMAIL.COM'
});

msg.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });
