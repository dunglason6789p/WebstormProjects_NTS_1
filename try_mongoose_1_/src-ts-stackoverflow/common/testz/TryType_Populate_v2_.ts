import {ArrayItemTypeOrItself, ArrayItemTypeOrNever, Keyof_or_ItemKeyof, PropType_or_ItemPropType} from "../Commons";
import {Question} from "../../model/Question";

class PopulateArray<C,P extends keyof C>{
    path:P;
    populateNested:keyof ArrayItemTypeOrNever<C[P]>;
    constructor(clazz:{new():C},path:P,populateNested:keyof ArrayItemTypeOrNever<C[P]>) {
        this.path = path;
        this.populateNested = populateNested;
    }
}
const pa1 = new PopulateArray(Question,"answerList","author");
const pa2 = new PopulateArray(Question,"author","xxx123");

class PopulateObject<C,P extends keyof C>{
    path:P;
    populateNested:keyof C[P];
    constructor(clazz:{new():C},path:P,populateNested:keyof C[P]) {
        this.path = path;
        this.populateNested = populateNested;
    }
}
const po1 = new PopulateObject(Question,"author","schoolName");

class Populate<C,P extends keyof C>{
    path:P;
    populateNested:keyof ArrayItemTypeOrItself<C[P]>;
    constructor(clazz:{new():C},path:P,populateNested:keyof ArrayItemTypeOrItself<C[P]>) {
        this.path = path;
        this.populateNested = populateNested;
    }
}
const p1 = new Populate(Question,"author","schoolName");
const p2 = new Populate(Question,"answerList", "author");






class Car{
    cost:number;
}
// const checkType:TypeOf__propOf_or_propOfItem<Car[], "cost"> = "123";


class PopulateMore<C,
    P0 extends keyof C,
    // P1 extends keyof ArrayItemTypeOrItself<C[P0]>,
    P1 extends Keyof_or_ItemKeyof<C[P0]>,
    // P2 extends C[P0][keyof ArrayItemTypeOrItself<C[P0]>],
    // P2 extends keyof TypeOf__propOf_or_propOfItem<C[P0],P1>,
    P2 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
    P3 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
>{
    path:P0;
    nest1:P1;
    nest2:P2;
    nest3:P3;
    constructor(clazz:{new():C}, path:P0, nest1:P1, nest2:P2, nest3:P3) {
        this.path = path;
        this.nest1 = nest1;
        this.nest2 = nest2;
        this.nest3 = nest3;
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
let test = null;
test = new PopulateMore(School,"students", "studyClasses","teachers","favorites");
test = new PopulateMore(School,"students", "mainStudyClass","teachers","favorites");
test = new PopulateMore(School,"students", "studyClasses","mainTeacher","favorites");
test = new PopulateMore(School,"students", "studyClasses","mainTeacher","age");
test = new PopulateMore(School,"mainStudent", "studyClasses","mainTeacher","age");
test = new PopulateMore(School,"mainStudent", "mainStudyClass","teachers","age");
test = new PopulateMore(School,"mainStudent", "mainStudyClass","mainTeacher","favorites");
