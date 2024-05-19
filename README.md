# JS_Practice

## JavaScript Basic Concepts

JavaScript is a versatile and powerful programming language that is essential for web development. Whether you're a beginner or looking to refresh your knowledge, understanding the basic concepts of JavaScript is crucial. This guide will cover the fundamental concepts with examples to help you get started.

### 1. Variables

Variables are used to store data that can be used and manipulated throughout your code. In JavaScript, you can declare variables using `var`, `let`, and `const`.

- `var`: Declares a variable with function scope.
- `let`: Declares a variable with block scope.
- `const`: Declares a constant variable that cannot be reassigned.

```javascript
var name = "Alice";
let age = 25;
const country = "USA";

console.log(name);  // Output: Alice
console.log(age);   // Output: 25
console.log(country); // Output: USA
```

### 2. Data Types

JavaScript supports several data types, including:

- **String**: Text enclosed in quotes.
- **Number**: Numeric values.
- **Boolean**: `true` or `false`.
- **Array**: An ordered list of values.
- **Object**: A collection of key-value pairs.

```javascript
let message = "Hello, World!";  // String
let number = 42;                // Number
let isActive = true;            // Boolean
let fruits = ["Apple", "Banana", "Cherry"]; // Array
let person = {                  // Object
  name: "Alice",
  age: 25
};

console.log(message);  // Output: Hello, World!
console.log(number);   // Output: 42
console.log(isActive); // Output: true
console.log(fruits[0]); // Output: Apple
console.log(person.name); // Output: Alice
```

### 3. Functions

Functions are blocks of code designed to perform a particular task. They can take parameters and return a value.

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

### 4. Conditional Statements

Conditional statements control the flow of execution based on certain conditions using `if`, `else if`, and `else`.

```javascript
let age = 18;

if (age < 18) {
  console.log("Minor");
} else if (age === 18) {
  console.log("Just became an adult");
} else {
  console.log("Adult");
}
// Output: Just became an adult
```

### 5. Loops

Loops are used to execute a block of code repeatedly. The most common types are `for`, `while`, and `do...while`.

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4

// While loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
// Output: 0 1 2 3 4

// Do...while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
// Output: 0 1 2 3 4
```

### 6. Arrays and Objects

Arrays are used to store multiple values in a single variable, and objects are used to store collections of key-value pairs.

```javascript
// Array
let colors = ["Red", "Green", "Blue"];
console.log(colors[1]);  // Output: Green

// Object
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
};
console.log(car.model);  // Output: Camry
```

### 7. Events

JavaScript can respond to user actions such as clicks, form submissions, and keyboard inputs using events.

```html
<button id="myButton">Click Me!</button>
<script>
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button was clicked!");
});
</script>
```

### 8. DOM Manipulation

The Document Object Model (DOM) represents the structure of a webpage. JavaScript can interact with and manipulate the DOM to update the content and style of a webpage dynamically.

```html
<div id="content">Original Content</div>
<script>
document.getElementById("content").innerHTML = "Updated Content";
</script>
```

### 9. ES6 Features

ES6 (ECMAScript 2015) introduced new features to JavaScript, including template literals, arrow functions, and destructuring.

```javascript
// Template Literals
let name = "Alice";
console.log(`Hello, ${name}!`);  // Output: Hello, Alice!

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3));  // Output: 5

// Destructuring
let [first, second] = ["One", "Two"];
console.log(first);  // Output: One
```

### Conclusion

These basic concepts form the foundation of JavaScript programming. Mastering them will enable you to build interactive and dynamic web applications. For more advanced topics, you can explore JavaScript frameworks and libraries like React, Angular, and Vue.js.

Feel free to use this guide in your GitHub README to help others get started with JavaScript!
