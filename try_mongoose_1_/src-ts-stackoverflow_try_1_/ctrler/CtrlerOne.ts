import {Answer,Question,Comment} from "../model/Question";
import {$$, $build, MyLogger} from "../common/Commons";
import {Mgoose} from "../common/Mgoose";
import {User} from "../model/User";
const mongoose = require('mongoose');
mongoose.set('debug', true);
const l = new MyLogger();
mongoose.connect('mongodb://localhost/qaxt1', {useNewUrlParser: true/*, useUnifiedTopology: true*/})
    .then(async r => {
        console.log("connected");

        if(true){
            const user1 = User.buildDocExcluded({
                _id: new mongoose.Types.ObjectId(),
                userName: "ntson9x",
                passwordEncrypted: "123",
            });

            const question1 = Question.buildDoc({
                authorId: (user1 as User)._id,
                title: "cau hoi 1",
                content: "noi dung cau hoi 1",
                tagList:[
                    $build<string>("a tag")
                ],
                commentList:[
                    $build<Comment>({
                        content: "a comment"
                    })
                ],
                answerList:[
                    $build<Answer>({
                        content:"a answer",
                    })
                ]
            });

            l.log = await user1.save();
            l.log = await question1.save();
        }
        Mgoose.findSimple(
            Question,
            {
                title:"cau hoi 1"
            },
            null,
            null,
            (err,questionResults)=>{
                console.log("[DEBUG]findSimple():")
                for(let questionResult of questionResults){
                    console.log("[INFO]a found <findSimple()>:");
                    console.log(questionResult);
                }
            }
        );
        Mgoose.find(
            Question,
            {
                title:"cau hoi 1"
            },
            {
                populates:[{path:["author"],select:[$$<User>("userName")]}]
            }
        ).exec((err,questionResults)=>{
            console.log("[DEBUG]find():")
            for(let questionResult of questionResults){
                console.log("[INFO]a found <find()>:");
                console.log(questionResult);
            }
        });
        Mgoose.find(
            Question,
            {
                title:"cau hoi 1"
            },
            {
                populateSimple:["author"]
            }
        ).exec((err,questionResults)=>{
            console.log("[DEBUG]populateSimple():");
            for(let questionResult of questionResults){
                console.log("[INFO]a found <populateSimple()>:");
                console.log(questionResult);
            }
        });
        Mgoose.find(
            Question,
            {
                title:"cau hoi 1"
            }
        ).populate(
            {
                path:""+$$<Question>("author"),
                select:""+$$<User>("userName")
            }
        ).exec((err,questionResults)=>{
            console.log("[DEBUG]populate():")
            for(let questionResult of questionResults){
                console.log("[INFO]a found <populate()>:");
                console.log(questionResult);
            }
        });

        // If you call `parent.children[0].save()`, it is a no-op, it triggers middleware but
        // does **not** actually save the subdocument. You need to save the parent doc first.
        // But when you save parent, then child will be save too. So you just have to save parent.
        /*question1.save((err,res)=>{
            if(err) return err=>console.log(err);
            console.log(res);

            Mgoose.findSimple(Question,
                {title:/hoi/i},
                {incl:["content","commentList"]},
                null,
                ((err1, docs) => {
                    console.log("[INFO] found:");
                    console.log(docs);
                }))
        });*/
    });


