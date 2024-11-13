// three ways to declare a variable
// let, const

// data types in JS: String, Number, Boolean, null, undefined, Symbol
const name = 'Eric';
let age = 52;
const weight = 215.5;
const isCool = true;
const x = null;
const y = undefined;
let z;  // undefined

age = '52';

if (age === 52) {
    console.log('You are not young.');
}


//console.log(typeof z);

// coercion. diff between == and ===
console.log('My name is ' + name + ' and I am ' + age + ' years old.');
console.log(`My name is ${name} and I am ${age} years old.`);

/* alt + shift + a */
// ctrl + /
// comment: ctrl + k + c
// comment: ctrl + k + u

// string methods
const s = 'Hello World!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
// method chaining
console.log(s.split(''));

