//think like -> It collects many values into one box
/* function ab(a, b) {
  console.log(a,b)
}

ab(1, 2); */

// using rest operator or params
function abc(a, ...params) {
  console.log(a);
  console.log(params);
}

abc(1, 2, 3, 4);

// destructuring
let [a, ...rest] = [3, 5, 6, 7];
console.log(a);
console.log(rest);
