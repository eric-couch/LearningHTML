const todos = [
    { id: 1, text: 'Drink Coffee', isCompleted: true },
    { id: 2, text: 'Write Code', isCompleted: true },
    { id: 3, text: 'Learn JS', isCompleted: false },
    { id: 4, text: 'Read a book', isCompleted: false },
    { id: 5, text: 'Go to bed', isCompleted: false }
];

console.log(todos[2].text);
// what is JSON?
// JSON is a syntax for storing and exchanging data.
const todoJSON = {
    "todos": [
        { "id": 1, "text": "Drink Coffee", "isCompleted": true },
        { "id": 2, "text": "Write Code", "isCompleted": true },
        { "id": 3, "text": "Learn JS", "isCompleted": false },
        { "id": 4, "text": "Read a book", "isCompleted": false },
        { "id": 5, "text": "Go to bed", "isCompleted": false }
    ]
}

console.log(todoJSON.todos[2].text);
// JSON.stringify()
const todoJSONString = JSON.stringify(todos);
console.log(todoJSONString);
