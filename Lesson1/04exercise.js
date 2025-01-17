const array = [1, 3, 'john', 5, 'test']

// Use filter to get strings 

let strings = array.filter(x => typeof x == 'string');

console.log(strings);

// Use filter to get the numbers 

let numbers = array.filter(x => typeof x == 'number');

console.log(numbers);