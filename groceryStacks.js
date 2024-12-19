const stack = []; // Initialize an empty array to represent the stack

function peek() {
  if (stack.length === 0) {
    return "Stack is empty";
  } else {
    return stack[stack.length - 1]; // Return the top element of the stack
  }
}

function push(item) {
  stack.push(item); // Add an item to the top of the stack
  console.log("Stack after push:", stack);
}

function pop() {
  if (stack.length === 0) {
    console.log("Stack is empty");
    return null;
  } else {
    const poppedItem = stack.pop(); // Remove and return the top element
    console.log("Stack after pop:", stack);
    return poppedItem;
  }
}

// Get 5 grocery items from the user
for (let i = 0; i < 5; i++) {
  const item = prompt(Enter grocery item ${i + 1}:);
  push(item);
}

// Example of further operations
pop();
push("Milk");
console.log("Top item:", peek());
