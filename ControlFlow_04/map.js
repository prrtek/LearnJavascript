const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//chaining
const pr = arr
  .map((value) => value * 10)
  .map((value2) => console.log(value2))
  .filter((value2) => value2 > 500);

console.log(pr);

//map function original arr ko nhi chhedega sirf multiply krr ke nya array bnadega
