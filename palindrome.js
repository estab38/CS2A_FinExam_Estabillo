// Function to check if a string is a palindrome
function checkPalindrome(str) {
  // Convert the string to lowercase to handle case-insensitive palindromes
  str = str.toLowerCase();

  // Remove non-alphanumeric characters
  str = str.replace(/[^a-z0-9]/g, "");

  // Handle empty or single-character strings
  if (str.length <= 1) {
    return true; // Empty or single-character strings are palindromes
  }

  // Check if the string is equal to its reverse
  return str === str.split("").reverse().join("");
}

// Get input strings from the user
let str1 = prompt("Enter a string:");
let str2 = prompt("Enter another string:");

// Check and display whether each string is a palindrome
console.log(str1, "is a palindrome:", checkPalindrome(str1));
console.log(str2, "is a palindrome:", checkPalindrome(str2));
