const cars = ["Ferrari", "Lamborgini", "Audi"];

console.log(cars[0]); // Prints Ferrari

cars[3] = "Mazda"; // Adds Mazda to the array 

cars.push("Nissan"); // Adds Nissan 

for(let key in cars) {
    console.log(cars[key])
}