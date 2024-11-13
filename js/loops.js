const todos = [
    { id: 1, text: 'Drink Coffee', isCompleted: true },
    { id: 2, text: 'Write Code', isCompleted: true },
    { id: 3, text: 'Learn JS', isCompleted: false },
    { id: 4, text: 'Read a book', isCompleted: false },
    { id: 5, text: 'Go to bed', isCompleted: false }
];

// for, while and for..of loops
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// let i = 0;
// while (i < todos.length) {
//     console.log(todos[i].text);
//     i++;
// }

// for (let t of todos) {
//     console.log(t.text);
// }

// higher order functions
// in js, functions are first class objects
// in js, higher order functions are functions that
// take in functions as arguments or return functions or both
// forEach, map, filter, reduce, sort
let logTodo = function(todo) {
    console.log(todo.text);
}

//todos.forEach(logTodo);

todos.forEach(function(todo) {
    console.log(todo);
});

// map is used to create a new array from an existing array
const todoText = todos.map(todo => {
    return todo.text;
});

console.log(todoText);

// filter is used to create a new array from an existing array
// based on a condition
const todoCompleted = todos.filter(t => {
    return t.isCompleted;
});

console.log(todoCompleted);

const todoCompletedText = todos.filter(todo => {
    return todo.text.length > 9;
}).map(todo => { return todo.text });

console.log(todoCompletedText);

// (fat) arrow functions
// arrow functions are a shorthand way to write functions
// same as lambda functions in c#, java, python
// () => {}
// anonymous function
// (x, y) => { return x + y; }