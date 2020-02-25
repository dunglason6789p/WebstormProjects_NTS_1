import {Answer,Question,Comment} from "../model/Question";
import {$$, $build, MyLogger} from "../common/Commons";
import {Mgoose} from "../common/Mgoose";
import {User} from "../model/User";
const mongoose = require('mongoose');
const l = new MyLogger();
mongoose.connect('mongodb://localhost/qax3', {useNewUrlParser: true/*, useUnifiedTopology: true*/})
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
        Question.MonModel.find({/*all*/})
            .populate($$<Question>("author"))
            .exec(
                function(error, questions){
                    // console.log("[INFO]founds:");
                    // console.log(bands);
                    for(let quest of questions){
                        console.log("[INFO]a found:");
                        console.log(quest);
                    }
                }
            );



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


