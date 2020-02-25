var x;
console.log(x==null);
x={a:123};
console.log(x.b==null);

var y;
console.log(y!=null);
y={a:123};
console.log(y.b!=null);

var z = false;
console.log(z==null);
z={b:false};
console.log(z.b==null);

const arr1 = ["apple","samsung","sony"];
console.log('-'+arr1.join(' -'));
