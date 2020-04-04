import {createConnection, createQueryBuilder} from "typeorm";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";
import {$create, $createExclude, MyLogger} from "./common/Commons";
import {genUUID} from "./common/UUID";
import {Answer} from "./entity/Answer";
import {Comment} from "./entity/Comment";
import {Question} from "./entity/Question";
import {User} from "./entity/User";

const l = new MyLogger();
// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {
    const iwant_createdb = false;
    const iwant_search = true;

    if(iwant_createdb){
        let newId = 1;
        //==================================================
        newId = genUUID();
        const user1 = $create(User,{
            id:newId,
            userName:`user_${newId}`,
            age:newId*2
        });
        newId = genUUID();
        const user2 = $create(User,{
            id:newId,
            userName:`user_${newId}`,
            age:newId*2
        });
        newId = genUUID();
        const user3 = $create(User,{
            id:newId,
            userName:`user_${newId}`,
            age:newId*2
        });
        //==================================================
        newId = genUUID();
        const question1 = $create(Question,{
            id:newId,
            title:`quest title ${newId}`,
            content:`quest content ${newId}`,
            author:user2
        });
        newId = genUUID();
        const question2 = $create(Question,{
            id:newId,
            title:`quest title ${newId}`,
            content:`quest content ${newId}`,
            author:user3
        });
        newId = genUUID();
        const question3 = $create(Question,{
            id:newId,
            title:`quest title ${newId}`,
            content:`quest content ${newId}`,
            author:user1
        });
        newId = genUUID();
        const question4 = $create(Question,{
            id:newId,
            title:`quest title ${newId}`,
            content:`quest content ${newId}`,
            author:user2
        });
        newId = genUUID();
        const question5 = $create(Question,{
            id:newId,
            title:`quest title ${newId}`,
            content:`quest content ${newId}`,
            author:user1
        });
        //==================================================
        newId = genUUID();
        const answer1_1 = $create(Answer,{
            id:newId,
            content:`answer content ${newId}`,
            author:user3,
            question:question1
        });
        newId = genUUID();
        const answer1_2 = $create(Answer,{
            id:newId,
            content:`answer content ${newId}`,
            author:user1,
            question:question1
        });
        newId = genUUID();
        const answer2_1 = $create(Answer,{
            id:newId,
            content:`answer content ${newId}`,
            author:user2,
            question:question2
        });
        newId = genUUID();
        const answer2_2 = $create(Answer,{
            id:newId,
            content:`answer content ${newId}`,
            author:user1,
            question:question2
        });
        newId = genUUID();
        const answer3_1 = $create(Answer,{
            id:newId,
            content:`answer content ${newId}`,
            author:user3,
            question:question3
        });
        newId = genUUID();
        const answer3_2 = $create(Answer,{
            id:newId,
            content:`answer content ${newId}`,
            author:user1,
            question:question3
        });
        newId = genUUID();
        const answer3_3 = $create(Answer,{
            id:newId,
            content:`answer content ${newId}`,
            author:user2,
            question:question3
        });
        newId = genUUID();
        const answer4_1 = $create(Answer,{
            id:newId,
            content:`answer content ${newId}`,
            author:user3,
            question:question4
        });
        newId = genUUID();
        const answer4_2 = $create(Answer,{
            id:newId,
            content:`answer content ${newId}`,
            author:user2,
            question:question3
        });

        l.log = await connection.manager.save(user1);
        l.log = await connection.manager.save(user2);
        l.log = await connection.manager.save(user3);
        l.log = await connection.manager.save(question1);
        l.log = await connection.manager.save(question2);
        l.log = await connection.manager.save(question3);
        l.log = await connection.manager.save(question4);
        l.log = await connection.manager.save(question5);
        l.log = await connection.manager.save(answer1_1);
        l.log = await connection.manager.save(answer1_2);
        l.log = await connection.manager.save(answer2_1);
        l.log = await connection.manager.save(answer2_2);
        l.log = await connection.manager.save(answer3_1);
        l.log = await connection.manager.save(answer3_2);
        l.log = await connection.manager.save(answer3_3);
        l.log = await connection.manager.save(answer4_1);
        l.log = await connection.manager.save(answer4_2);
    }

    /*if(iwant_search){
        l.log = MyLogger.SKIP;
        l.log = MyLogger.SKIP;
        const findCategory1 = await connection.manager.findOne(Question, {id: 5/!*, age:12*!/});
        console.log("findCategory1=", findCategory1);
        l.log = MyLogger.SKIP;

        const results = await createQueryBuilder("Question","question")
            .leftJoinAndSelect("question.answerList", "answers")
            // .where("user.name = :name", { name: "Timber" })
            // .getOne()
            //.printSql()
            .getMany()
        ;
        for(let result of results){
            // l.log = result
            l.log = JSON.stringify(result,null,4)
        }
    }*/
    /*if(iwant_search){
        l.log = MyLogger.SKIP;
        l.log = MyLogger.SKIP;
        const findCategory1 = await connection.manager.findOne(Question, {id: 5/!*, age:12*!/});
        console.log("findCategory1=", findCategory1);
        l.log = MyLogger.SKIP;

        const results = await createQueryBuilder(Question)
            .leftJoinAndSelect("Question.answerList", "answersxx")
            // .where("user.name = :name", { name: "Timber" })
            // .getOne()
            //.printSql()
            .getMany()
        ;
        for(let result of results){
            // l.log = result
            l.log = JSON.stringify(result,null,4)
        }
    }*/
    if(iwant_search){
        l.log = MyLogger.SKIP;
        l.log = MyLogger.SKIP;
        const findCategory1 = await connection.manager.findOne(Question, {id: 5/*, age:12*/});
        console.log("findCategory1=", findCategory1);
        l.log = MyLogger.SKIP;

        //language=SQL
        const raw = await connection.manager.query(`
        select question.id as qId,count(answer.id) as countAns 
        from question left join answer on answer.questionId = question.id 
        group by qId
        `);
        console.log(JSON.stringify(raw,null,4));

        const raw2 = await connection.manager.query(`
        select question.id,count(answer.id) 
        from question left join answer on answer.questionId = question.id 
        group by question.id
        `);
        console.log(JSON.stringify(raw2,null,4));

        const raw3 = await connection.manager.query(`
        select *,count(answer.id) 
        from question left join answer on answer.questionId = question.id 
        group by question.id
        `);
        console.log(JSON.stringify(raw3,null,4));

        const raw4 = await connection.manager.query(`
        select *,question.id,question.content,answer.content,count(*) 
        from question left join answer on answer.questionId = question.id 
        group by question.id
        `);
        console.log(JSON.stringify(raw4,null,4));

        l.log = MyLogger.SKIP;
        l.log = MyLogger.SKIP;

        const results = await createQueryBuilder(Question)
            .leftJoinAndSelect("Question.answerList", "answersxx")
            //.groupBy("Question.id")
            // .where("user.name = :name", { name: "Timber" })
            // .getOne()
            //.printSql()
            .getMany()
            //.getRaw()
            // .getRawAndEntities()
        ;
        //for(let result of results.raw){
        for(let result of results){
            // l.log = result
            l.log = JSON.stringify(result,null,4)
        }
    }

}).catch(error => console.log("Error: ", error));


//select question.id as qId,count(answer.id) as countAns from typeorm3.question left join typeorm3.answer on typeorm3.answer.questionId = typeorm3.question.id group by qId
