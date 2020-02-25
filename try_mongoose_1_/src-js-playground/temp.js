const moonLanding = new Date('July 20, 69 00:20:18');
const now = new Date();

console.log(moonLanding.getFullYear());
// expected output: 1969
console.log(now.getFullYear());

const abc = {xyz:123};
const {xyz} = abc;
console.log(xyz);

const person = {fullName:"Nguyen Son"};
let person2;
console.log(person2!=null && person2.fullName!=null);
console.log(person2.fullName!=null);
console.log(person2.fullName==null);
console.log(person2.fullName===null);
console.log(person3.fullName!=null);
console.log(person3.fullName==null);
console.log(person3.fullName===null);
