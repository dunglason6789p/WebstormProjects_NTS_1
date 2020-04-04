function nameOf(ld:(v:any)=>any):string {
    const lambdaAsString = ld.toString();
    if (lambdaAsString.includes("function")) {
        return lambdaAsString.match(/return (.*?);/)[1].trim();
    }
    else if (lambdaAsString.includes("=>")) {
        return lambdaAsString.match(/=> (.*?)/)[1].trim();
    }
}
class SuperMario{

}

console.log(nameOf(()=>SuperMario));
console.log(nameOf(()=>/*a*/SuperMario/*b*/));


function varToString(varObj) {
    return Object.keys(varObj)[0];
}

const someVar = 42;
const someVar2 = {someVar};
console.log(varToString({ someVar }));
console.log(varToString({ SuperMario }));

/*function varToString2<X,T:{}>(varObj:X[T]) {
    return Object.keys(varObj)[0];
}
console.log(varToString2({ someVar }));
console.log(varToString2({ SuperMario }));*/


type HasAtLeastOneProp<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
}[Keys]

function varToString2(varObj:HasAtLeastOneProp<any>) {
    return Object.keys(varObj)[0];
}
// console.log(varToString2(someVar));
console.log(varToString2(someVar2));
console.log(varToString2(SuperMario));
console.log(varToString2({ someVar }));
console.log(varToString2({ someVar,someVar2 }));
console.log(varToString2({ SuperMario }));

console.log("================================");
function varToString3(anything):string {
    return Object.keys({[anything]:null})[0];
}
console.log(varToString3(someVar));
console.log(varToString3(someVar2));
console.log(varToString3(SuperMario));

