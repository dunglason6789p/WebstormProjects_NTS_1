/*var i, l, a, s;
for (i = 0, l = 99999999, a = []; i < l; i++) a.push(60);
s = String.fromCharCode.apply(String, a);*/

const arr1 = (()=>{
    const arrTemp = [];
    for (let i = 0; i < 100; i++) {
        arrTemp.push(i);
    }
    return arrTemp;
})();
const arr2 = (()=>{
    const arrTemp = [];
    for (let i = 0; i < 99999999999; i++) {
        arrTemp.push(i);
    }
    return arrTemp;
})();
//const newArr = arr1.push.apply(arr2);
//const newArr = arr1.push(...arr2);
const newArr = arr1.concat(arr2);



