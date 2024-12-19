// Create a multi-dimensional array
const multiArray = [
  ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"],
  [24, 65, 21, 5, 9],
];

// Restructure the array
const restructuredArray = [];
for (let i = 0; i < multiArray[0].length; i++) {
  restructuredArray.push([multiArray[0][i], multiArray[1][i]]);
}

// Log the restructured array
console.log("Restructured array:");
restructuredArray.forEach((item) => console.log(item));
