import {Keyof_or_ItemKeyof, PropType_or_ItemPropType, ternary, ternaryLazy} from "../Commons";
import {JSONx} from "../jsonPrune/JsonPrune";
import logJsonDeep = JSONx.logJsonDeep;

class PopulateDeep<C,
    P0 extends keyof C,
    P1 extends Keyof_or_ItemKeyof<C[P0]>,
    P2 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
    P3 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
    >{
    path:P0;
    nest1:P1;
    nest2:P2;
    nest3:P3;
    constructor(clazz:{new():C}, path:P0, nest1?:P1, nest2?:P2, nest3?:P3) {
        this.path = path;
        this.nest1 = nest1;
        this.nest2 = nest2;
        this.nest3 = nest3;
    }
}

function populateDeep<C,
    P0 extends keyof C,
    P1 extends Keyof_or_ItemKeyof<C[P0]>,
    P2 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
    P3 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
>(clazz:{new():C},path0:P0,path1?:P1,path2?:P2,path3?:P3):{
    path:string;
    populate?:{
        path:string;
        populate?:{
            path:string;
            populate?:{
                path:string;
            }
        }
    }
}
{
    return {
        path:path0 as string,
        populate:ternaryLazy(path1==null,undefined,()=>({
            path:path1 as string,
            populate:ternaryLazy(path2==null,undefined,()=>({
                path:path2 as string,
                populate:ternaryLazy(path3==null,undefined,()=>({
                    path:path3 as string,
                }))
            }))
        }))
    }
}





class Favorite{
    favName:string;
}
class Teacher{
    age:number;
    favorites:Favorite[]
}
class StudyClass{
    className:string;
    teachers:Teacher[];
    mainTeacher:Teacher;
}
class Student{
    studentName:string;
    studyClasses:StudyClass[];
    mainStudyClass:StudyClass;
}
class School{
    schoolName:string;
    students:Student[];
    mainStudent:Student;
}


const test1
    = populateDeep(School,"students","studyClasses","teachers","favorites");
console.log(test1);
logJsonDeep(test1);


type PopulateDeeper<C,
    P0 extends keyof C,
    P1 extends Keyof_or_ItemKeyof<C[P0]>,
    P2 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
    P3 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
>={
    path:P0;
    populate?:{
        path:P1;
        populate?:{
            path:P2;
            populate?:{
                path:P3;
            }
        }
    }
}


function populateDeeper<C,
    P0 extends keyof C,
    P1 extends Keyof_or_ItemKeyof<C[P0]>,
    P2 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
    P3 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
>(
    clazz:{new():C},
    populateInfo:{
        path:P0;
        populate?:{
            path:P1;
            populate?:{
                path:P2;
                populate?:{
                    path:P3;
                }
            }
        }
    }
):{
    path:P0;
    populate?:{
        path:P1;
        populate?:{
            path:P2;
            populate?:{
                path:P3;
            }
        }
    }
}
{
    return populateInfo
}

const test2
    = populateDeeper(School,
    {
        path:"students",
        populate:{
            path:"studyClasses",
        }
    }
);



function populateDeeper2<C,
    P0 = keyof C,
    //@ts-ignore
    P1 = Keyof_or_ItemKeyof<C[P0]>,
    //@ts-ignore
    P2 = Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
    //@ts-ignore
    P3 = Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
    >(
    populateInfo:{
        path:P0;
        populate?:{
            path:P1;
            populate?:{
                path:P2;
                populate?:{
                    path:P3;
                }
            }
        }
    }
):{
    path:P0;
    populate?:{
        path:P1;
        populate?:{
            path:P2;
            populate?:{
                path:P3;
            }
        }
    }
}
{
    return populateInfo
}

const test3
    = populateDeeper2<School>(
    {
        path:"mainStudent",
        populate:{
            path:"studyClasses",
        }
    }
);




function populateDeepInfoSimple<C,
    P0 = keyof C,
    //@ts-ignore
    P1 = Keyof_or_ItemKeyof<C[P0]>,
    //@ts-ignore
    P2 = Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
    //@ts-ignore
    P3 = Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
    >(path0:P0,path1?:P1,path2?:P2,path3?:P3):{
    path:P0;
    populate?:{
        path:P1;
        populate?:{
            path:P2;
            populate?:{
                path:P3;
            }
        }
    }
}
{
    return {
        path:path0,
        populate:ternaryLazy(path1==null,undefined,()=>({
            path:path1,
            populate:ternaryLazy(path2==null,undefined,()=>({
                path:path2,
                populate:ternaryLazy(path3==null,undefined,()=>({
                    path:path3,
                }))
            }))
        }))
    }
}

/*
const testX1
    = populateDeepInfoSimple<School>("students","sdf")*/
