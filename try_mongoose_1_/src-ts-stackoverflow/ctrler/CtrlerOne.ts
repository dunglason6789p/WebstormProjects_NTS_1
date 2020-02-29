import {$create, $createThenExec, $logKeyValue, MyLogger} from "../common/Commons";
import {Mgoose} from "../common/Mgoose";
import {Question} from "../model/Question";
import {User} from "../model/User";
import {Answer} from "../model/Answer";

const l = new MyLogger();
const mongoose = require('mongoose');
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

(async function topLevel(){
    let num:number;
    try{
        const pathToDbInfoFile = "./dbInfo/dbinfo.txt";
        num = parseInt((await readFileAsync(pathToDbInfoFile))) + 1;
        console.log("num="+num);
        await writeFileAsync(pathToDbInfoFile, num);
        // return;//TODO
    }catch (err) {
        console.log(err);
        // return;//TODO
    }
    mongoose.connect('mongodb://localhost/ndb'+num, {useNewUrlParser: true/*, useUnifiedTopology: true*/})
        .then(async r => {
            console.log("connected to db...num="+num);
            if(true){
                const user1 = $create(User,{
                    _id: new mongoose.Types.ObjectId(),
                    userName: "user_1",
                    passwordEncrypted: "111",
                }as User);
                const user2 = $create(User,{
                    _id: new mongoose.Types.ObjectId(),
                    userName: "user_2",
                    passwordEncrypted: "222",
                }as User);
                const question1 = $createThenExec(Question,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: undefined,
                    title: "cau hoi 1",
                    content: "noi dung cau hoi 1",
                    tagList:["a tag"]
                },(thiz)=>{
                    thiz.setAuthor(user1);
                });
                const answer1 = $createThenExec(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: undefined,questionId: undefined,
                    content: "tra loi 1",
                },(thiz)=>{
                    thiz.setAuthor(user1);
                    thiz.setQuestion(question1,true);
                });
                const answer2 = $createThenExec(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: undefined,questionId: undefined,
                    content: "tra loi 2",
                },(thiz)=>{
                    thiz.setAuthor(user2);
                    thiz.setQuestion(question1,true);
                });
                //question1.addAnswers(answer1);

                l.log = await User.buildDocExcluded(user1).save();
                l.log = await User.buildDocExcluded(user2).save();
                l.log = await Question.buildDocExcluded(question1).save();
                l.log = await Answer.buildDocExcluded(answer1).save();
                l.log = await Answer.buildDocExcluded(answer2).save();
            }

            Mgoose.find(
                Question,
                {
                    title:/hoi/i
                },
                {
                    populateSimple:["author","answerList"],
                    lean:true,
                }
            ).exec((err,questionResults)=>{
                console.log("[DEBUG]populateSimple():");
                for(let questionResult of questionResults){
                    console.log("[INFO]a found <populateSimple()>:");
                    //console.log(questionResult);
                    const quest:Question = questionResult as unknown as Question;
                    $logKeyValue(quest,true);
                }
            });
        });
})();//Execute top level async function.




