import {JSONx} from "../common/jsonPrune/JsonPrune";

require('source-map-support').install();
import {$create, $createAndDo, $logKeyValue, initLater} from "../common/Commons";
import {Mgoose} from "../common/Mgoose";
import {Question} from "../model/Question";
import {User} from "../model/User";
import {Answer} from "../model/Answer";
import {genUUID} from "../common/UUID";
import {appxNowTime} from "../common/DateUtils";
import {Category} from "../model/micro/Category";
import populateDeepInfo = Mgoose.populateDeepInfo;
import populateDeepInfoSimple = Mgoose.populateDeepInfoSimple;
import populateDeepInfoSimple2 = Mgoose.populateDeepInfoSimple2;
import {MyLogger} from "../common/MyLogger";

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
                let newUUID = 1;
                //==================================================
                const userList:User[] = [];
                newUUID = genUUID();
                const user1 = $create(User,{
                    _id: new mongoose.Types.ObjectId(),
                    userName:`user_${newUUID}`,
                    grade:newUUID,
                    passwordEncrypted:`pass_${newUUID}`,
                });
                userList.push(user1);
                newUUID = genUUID();
                const user2 = $create(User,{
                    _id: new mongoose.Types.ObjectId(),
                    userName:`user_${newUUID}`,
                    grade:newUUID,
                    passwordEncrypted:`pass_${newUUID}`,
                });
                userList.push(user2);
                newUUID = genUUID();
                const user3 = $create(User,{
                    _id: new mongoose.Types.ObjectId(),
                    userName:`user_${newUUID}`,
                    grade:newUUID,
                    passwordEncrypted:`pass_${newUUID}`,
                });
                userList.push(user3);
                //==================================================
                const questionList:Question[]=[];
                newUUID = genUUID();
                const question1 = $createAndDo(Question,{
                    _id: new mongoose.Types.ObjectId(),
                    title:`quest title ${newUUID}`,
                    content:`quest content ${newUUID}`,
                    authorId: initLater(),
                    category: [Category.random()]
                },thiz=>{
                    thiz.setAuthor(user2);
                });
                questionList.push(question1);
                newUUID = genUUID();
                const question2 = $createAndDo(Question,{
                    _id: new mongoose.Types.ObjectId(),
                    title:`quest title ${newUUID}`,
                    content:`quest content ${newUUID}`,
                    authorId: initLater(),
                    category: [Category.random()]
                },thiz=>{
                    thiz.setAuthor(user2);
                });
                questionList.push(question2);
                newUUID = genUUID();
                const question3 = $createAndDo(Question,{
                    _id: new mongoose.Types.ObjectId(),
                    title:`quest title ${newUUID}`,
                    content:`quest content ${newUUID}`,
                    authorId: initLater(),
                    category: [Category.random()]
                },thiz=>{
                    thiz.setAuthor(user2);
                });
                questionList.push(question3);
                newUUID = genUUID();
                const question4 = $createAndDo(Question,{
                    _id: new mongoose.Types.ObjectId(),
                    title:`quest title ${newUUID}`,
                    content:`quest content ${newUUID}`,
                    authorId: initLater(),
                    category: [Category.random()]
                },thiz=>{
                    thiz.setAuthor(user2);
                });
                questionList.push(question4);
                newUUID = genUUID();
                const question5 = $createAndDo(Question,{
                    _id: new mongoose.Types.ObjectId(),
                    title:`quest title ${newUUID}`,
                    content:`quest content ${newUUID}`,
                    authorId: initLater(),
                    category: [Category.random()]
                },thiz=>{
                    thiz.setAuthor(user2);
                });
                questionList.push(question5);
                //==================================================
                const answerList:Answer[]=[];
                newUUID = genUUID();
                const answer1_1 = $createAndDo(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: initLater(),
                    questionId: initLater(),
                    content:`answer content ${newUUID}`,
                },(thiz)=>{
                    thiz.setAuthor(user2);
                    thiz.setQuestion(question1,true);
                });
                answerList.push(answer1_1);
                newUUID = genUUID();
                const answer1_2 = $createAndDo(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: initLater(),
                    questionId: initLater(),
                    content:`answer content ${newUUID}`,
                },(thiz)=>{
                    thiz.setAuthor(user3);
                    thiz.setQuestion(question1,true);
                });
                answerList.push(answer1_2);
                newUUID = genUUID();
                const answer2_1 = $createAndDo(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: initLater(),
                    questionId: initLater(),
                    content:`answer content ${newUUID}`,
                },(thiz)=>{
                    thiz.setAuthor(user1);
                    thiz.setQuestion(question2,true);
                });
                answerList.push(answer2_1);
                newUUID = genUUID();
                const answer2_2 = $createAndDo(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: initLater(),
                    questionId: initLater(),
                    content:`answer content ${newUUID}`,
                },(thiz)=>{
                    thiz.setAuthor(user1);
                    thiz.setQuestion(question2,true);
                });
                answerList.push(answer2_2);
                newUUID = genUUID();
                const answer3_1 = $createAndDo(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: initLater(),
                    questionId: initLater(),
                    content:`answer content ${newUUID}`,
                },(thiz)=>{
                    thiz.setAuthor(user2);
                    thiz.setQuestion(question3,true);
                });
                answerList.push(answer3_1);
                newUUID = genUUID();
                const answer3_2 = $createAndDo(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: initLater(),
                    questionId: initLater(),
                    content:`answer content ${newUUID}`,
                },(thiz)=>{
                    thiz.setAuthor(user3);
                    thiz.setQuestion(question3,true);
                });
                answerList.push(answer3_2);
                newUUID = genUUID();
                const answer3_3 = $createAndDo(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: initLater(),
                    questionId: initLater(),
                    content:`answer content ${newUUID}`,
                },(thiz)=>{
                    thiz.setAuthor(user1);
                    thiz.setQuestion(question3,true);
                });
                answerList.push(answer3_3);
                newUUID = genUUID();
                const answer4_1 = $createAndDo(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: initLater(),
                    questionId: initLater(),
                    content:`answer content ${newUUID}`,
                },(thiz)=>{
                    thiz.setAuthor(user1);
                    thiz.setQuestion(question4,true);
                });
                answerList.push(answer4_1);
                newUUID = genUUID();
                const answer4_2 = $createAndDo(Answer,{
                    _id: new mongoose.Types.ObjectId(),
                    authorId: initLater(),
                    questionId: initLater(),
                    content:`answer content ${newUUID}`,
                },(thiz)=>{
                    thiz.setAuthor(user2);
                    thiz.setQuestion(question4,true);
                });
                answerList.push(answer4_2);

                for(let user of userList){
                    l.log = await User.buildDocExcluded(user).save();
                }
                for(let question of questionList){
                    l.log = await Question.buildDocExcluded(question).save();
                }
                for(let answer of answerList){
                    l.log = await Answer.buildDocExcluded(answer).save();
                }
            }

            Mgoose.find(
                Question,
                {
                    //answerIdList:{$size:{$gt:1}}
                },
                {
                    //populateSimples:["author","answerList"],//GOOD.
                    //populateLambdas:[question=>question.answerList[0].author],
                    /*populate:{
                        path: 'answerList',
                        // Get friends of friends - populate the 'friends' array for every friend
                        populate: { path: 'author' }
                    },*/
                    // populateRaw_strings:["answerList","answerList.author"],
                    populateRaw_objects:[
                        populateDeepInfoSimple2(Question,"author"),
                        populateDeepInfoSimple2(Question,"answerList","author"),
                    ],
                    lean:true,
                }
            ).exec((err,questionResults)=>{
                if(err){
                    l.logError = err;
                }
                if(questionResults){
                    console.log("[DEBUG]populateSimple():");
                    for(let questionResult of questionResults){
                        console.log("[INFO]a found <populateSimple()>:");
                        //console.log(questionResult);
                        const quest:Question = questionResult as unknown as Question;
                        //$logKeyValue(quest,true);
                        JSONx.logJsonDeep(quest,2,["id","_id"]);
                    }
                }else{
                    console.log(`[DEBUG]questionResults=${questionResults}`);
                }
            });
        });
})();//Execute top level async function.




