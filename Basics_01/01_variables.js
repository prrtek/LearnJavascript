//About Var let and const

const abc = "Prateek"; //not changable
let bc = 12;
var ab = 234;

console.table([abc, bc, ab]);

// abc = 13;
bc = "prateek";
ab = undefined;

console.table([abc, bc, ab]);
//cant accesee outside this
if (true) {
  const b = "prateek";
}
console.log(b);

if (true) {
  let c = "prateek";
}
console.log(c);

//can accesee outside this
if (true) {
  var b = "prateek";
}
console.log(b);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
