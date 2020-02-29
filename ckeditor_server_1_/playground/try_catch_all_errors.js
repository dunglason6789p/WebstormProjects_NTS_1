process.on('uncaughtException', function (err) {
    console.log("uncatch: err="+err);
    //return false;
});
setTimeout(function () {
    console.log('callback!');
}, 3000);
setTimeout(function () {
    for (let i = 0; i < 10; i++) {
        if(i%4===1){
            //throw new Error("Error, i="+i);
            nonexistentFunc();
        }else{
            console.log("OK, i="+i);
        }
        console.log("::i="+i);
    }
},1000);
setTimeout(function () {
    for (let i = 0; i < 10; i++) {
        if(i%4===1){
            //throw new Error("Error, i="+i);
            nonexistentFunc();
        }else{
            console.log("OK, i="+i);
        }
        console.log("::i="+i);
    }
},2000);
for (let i = 0; i < 10; i++) {
    if(i%3===1){
        //throw new Error("Error, i="+i);
        nonexistentFunc();
    }else{
        console.log("OK, i="+i);
    }
    console.log("::i="+i);
}
console.log("done");
