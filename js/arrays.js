// arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 'grapes', 'peaches'];
console.log(fruits);

const allTypesArray = ['apples', 'oranges', 'pears', 'grapes', 'peaches', true, 5];
console.log(allTypesArray);

console.log(allTypesArray[1]);

allTypesArray[5] = 'blueberries';
console.log(allTypesArray);

allTypesArray[7] = 'strawberries';
console.log(allTypesArray);

// add to end of array
allTypesArray.push('mangos');

// add to beginning of array
allTypesArray.unshift('cherries');
console.log(allTypesArray);

// pop removes last item in array
allTypesArray.pop();
console.log(allTypesArray);

console.log(allTypesArray.indexOf('peaches'));
// EMACScript (ES6) = javascript