let names = "Prateek";
let me = names;

me = "pk";
console.log(me);
console.log(names);

//Primitives types varibles const let number string hmesha copy of value pass hoti hai ek change krne se main change nhi hoga aur ye stack use krta hai

let user = {
  naam: "Prateek",
  age: 20,
};

let user2 = user;
user2.age = 25;
user2.naam = "Pr";
console.log(user);
console.log(user2);
/*$ node Basics_01/07_stack.js
{ naam: 'Pr', age: 25 }
{ naam: 'Pr', age: 25 }
*/

//agar non primitive type hai to direct main object change hoga kyuki value heap me stor ehoti hai and direct refrence share hota hai jisse agar 2nd change kroge to main bhi chnage hojaega
