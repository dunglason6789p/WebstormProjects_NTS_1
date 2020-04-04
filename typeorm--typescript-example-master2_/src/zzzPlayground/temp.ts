class BigCar{
    weightHigh:number;
    weightLow:string;
}
function classNameOf<T>(Class:{new():T}):string{
    return Class.name
}
console.log(classNameOf(BigCar));

function nameof<T>(lambda:(T)=>any):string {
    const lambdaAsString = lambda.toString();
    const lastIndexOfDot = lambdaAsString.lastIndexOf(".");
    if(lastIndexOfDot<0){
        console.log("[WARN](nameof)There are no dot in lambda:"+lambdaAsString);
    }
    return lambdaAsString.substring(lastIndexOfDot+1);
}
console.log(nameof((car:BigCar) => car));
console.log(nameof(( car:BigCar  )  => car .  weightHigh  ));
