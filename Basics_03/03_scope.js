//just remember chhote bado se icecream le skte hai lekin bade chhoto se nhi chheen skte

//this keyword refers to current context

//In node simple this refers to nothing but in window browser it refers to window object

//IIFE immediately invoked function expressions

// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
