const names = ["John", "Peter", "James"];

// Use map to create a new array with all names have "Mr" at the beginning

// Mr John
// Mr Peter
// Mr James

let newNames = names.map(name => `Mr ${name}`);
console.log(newNames);