// ` ` -> Allows string interpolation + multiline strings
const name = "Rejwan";

console.log(`Hello ${name}`);

const a = 5;
const b = 10;

console.log(`Sum is ${a + b}`); // 15

// multiline string 
const msg = `
This is line 1
This is line 2
`;

console.log(msg);

function greet(name) {
  return `Welcome, ${name}!`;
}