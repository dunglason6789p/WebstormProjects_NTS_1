const {handleError} = require("./common");
const {Parent} = require("./schemaAndModel");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db2', {useNewUrlParser: true/*, useUnifiedTopology: true*/})
    .then(r => {
        console.log("connected");

        const parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] });
        parent.children[0].name = 'Matthew';

        // If you call `parent.children[0].save()`, it is a no-op, it triggers middleware but
        // does **not** actually save the subdocument. You need to save the parent doc first.
        // But when you save parent, then child will be save too. So you just have to save parent.
        parent.save((err,res)=>{
            if(err) return handleError(err);
            console.log(res);
        });
    });
