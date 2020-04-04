function $$l<T>(lambda:(T)=>any):string {
    const lambdaAsString = lambda.toString();
    const lastIndexOfDot = lambdaAsString.lastIndexOf(".");
    if(lastIndexOfDot<0){
        console.log("[WARN](nameof)There are no dot in lambda:"+lambdaAsString);
    }
    return lambdaAsString.substring(lastIndexOfDot+1);
}

class PizzaHut{
    costMoney:number
}

console.log($$l((p:PizzaHut)=>p.costMoney));
