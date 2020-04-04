import {JSONx} from "./JsonPrune";

const obj = {
    fullName:"Sơn Nguyễn",
    age:15,
    games:[
        {
            game:"aoe",
            hours:12
        },
        {
            game:"dota",
            hours:25,
            badges:[
                {
                    badgeName:"best player",
                    when: new Date(1995, 12, 17),
                },
                {
                    badgeName:"speed player",
                    when: new Date(2006, 5, 27),
                }
            ]
        }
    ],
    dog:{
        dogName:"super dog",
        speed:123,
        info:{
            branch:"doggier"
        }
    }
};
JSONx.logJsonDeep(obj);
