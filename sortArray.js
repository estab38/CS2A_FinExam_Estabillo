// Create two arrays
const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge arrays
const mergedArray = numbers.concat(names);
console.log("Merged array:", mergedArray);

// Sort numbers in reverse
const sortedNumbers = numbers.slice().sort((a, b) => b - a); // Create a copy to avoid modifying the original array
console.log("Sorted numbers (reverse):", sortedNumbers);

// Sort names alphabetically
const sortedNames = names.slice().sort(); // Create a copy to avoid modifying the original array
console.log("Sorted names:", sortedNames);
