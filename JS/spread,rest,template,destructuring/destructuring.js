// Destructuring = taking values out from array or object and putting into variables easily
// in array
// without Destructuring
/* const arr = [10, 20];

const a = arr[0];
const b = arr[1]; */

// with Destructuring
/* const arr = [10, 20];

const [a, b] = arr;
console.log(a, b); */

/* const [first, ...rest] = [10, 20, 30, 40];

console.log(first); // 10
console.log(rest);  // [20,30,40] */

// object
// without Destructuring
/* let obj = {
  name: 'hasan',
  age: 23,
};

let name = obj.name;
let age = obj.age;
console.log(name, age); */

// with Destructuring
/* let obj = {
  name: 'hasan',
  age: 23,
};

let { name, age } = obj;
console.log(name, age); */

/* let user = { name: "Rejwan", age: 22, role: "admin" };

let { name, ...others } = user;

console.log(name);   // Rejwan
console.log(others); // { age: 22, role: "admin" } */