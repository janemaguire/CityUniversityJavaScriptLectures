const towns = ["Athens", "Paris", "London"];

// Print Athens 
console.log(towns[0]);

// Add another city
towns.push('Madrid');

// Print the size of the towns 
console.log(towns.length);

// Print the towns it should print 
// 0 - Athens
// 1 - Paris
// 2 - London
// 3 - Madrid

for (let town in towns) {
    console.log(towns[town]);
}

towns.forEach( x => console.log(x));