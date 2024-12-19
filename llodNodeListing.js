// Node class representing a single node in the linked list
class Node {
  constructor(value) {
    // Value stored in the node
    this.value = value;
    // Pointer to the next node in the list
    this.next = null;
  }
}

// LinkedList class implementing a singly linked list
class LinkedList {
  constructor() {
    // Head of the linked list (initially null)
    this.head = null;
    // Size of the linked list (initially 0)
    this.size = 0;
  }

  // Appends a new node with the given value to the end of the list
  append(value) {
    const newNode = new Node(value); // Create a new node
    if (!this.head) { // If the list is empty
      this.head = newNode; // Set the new node as the head
    } else { // If the list is not empty
      let current = this.head; // Start from the head
      while (current.next) { // Traverse to the last node
        current = current.next;
      }
      current.next = newNode; // Append the new node to the end
    }
    this.size++; // Increment the list size
    this.print(); // Print the updated list (for demonstration)
  }

  // Prints the values of all nodes in the linked list to the console
  print() {
    let current = this.head; // Start from the head
    let output = ""; // Initialize an empty string for output
    while (current) { // Traverse the list
      output += current.value + " "; // Append the value to the output string
      current = current.next; // Move to the next node
    }
    console.log(output); // Print the output string
  }
}


// Sample data to be added to the linked list
const items = [
  "Data Structures - Array",
  "Variable Type - Integer",
  "Sorting Algorithm - Bubble Sort",
];

// Create a new linked list
const list = new LinkedList();

// Add each item from the sample data to the linked list
items.forEach((item) => list.append(item));
