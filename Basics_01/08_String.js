//using concatenation Backticks

const firstName = "Prateek";
const age = "20";
for (let i = 0; i < 5; i++) {
  const myself = `Hi, My name is ${firstName} and my age is ${i}`;

  console.log(myself);
}

//using String Methods
const names = new String("Prateek");
console.log(names.charAt(0)); //P  as expected shows character at 0 index

console.log(names.endsWith("k")); //returns true and false

console.log(names.indexOf("k")); //returns index of character; like 6 in this case
