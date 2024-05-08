# JAVASCRIPT MASTER

## 🎏 Introduction to JavaScript

### 1. Introduction to JavaScript

- JavaScript (js) is a light-weight object-oriented programming language which is used by several website for scripting webpages.
- It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document.
- It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser.
- JavaScript is an object-based scripting language which is light-weight and cross-platform.
- JavaScript is not a compiled language, but it is a translated language. The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser
- With JavaScript users can build modern web applications to interact directly without reloading the page every time.
- The traditional website uses js to provide several forms of interactivity and simplicity.
- Although,JavaScript has no connectivity with Java programming languages. In addition to web browsers, databases such as CouchDB and MongoDB uses JavaScript as their scripting and query language.

### 2. Features of JavaScript

- All popular web browsers support Javascript as they provide built-in execution environments.
- JavaScript follows the syntax and structure of the C programming language. Thus, it is a strutured programming language.
- JavaScript is a weakly typed language, where certain types are implicitly cast(depending the operation).
- JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.
- It is a light-weighted and interpreted language.
- It is a case-sensitive language.
- JavScript is supportable in several operating systems including, Windows,macOS etc.
- It provides good control to the users over the web browsers.

#### 👉 Application of Javascript (JavaScript is used to create interactive websites.)

- client-side Validation
- Dynamic drop-down menus
- Displaying date and time
- Displaying pop-up windows and dialog boxes(like an alert dialog box confirm dialog box and prompt dialog box)
- Displaying clocks etc.

`Example of Javascript:- `
```javascript
   <script type="text/javascript">
     document.write("Welcome to JavaScript");
   </script>

  //👉 The script tag specifies that we are using Javascript.
  //👉 The text/javascript is the content type that provides information about the data.
```
### 3. Ways to write and Add Javascript code

1. Between the body tag of html
`<body><script>...</script></body>`
2. Between the head tag of html
`<head><script>...</script></head>`
3. In .js file (external javascript)
`<script src=""></script>`

#### 👉 Advantages of External Javascript

1. It helps in the reusability of code in more than one HTML file.
2. It allows easy code readability.
3. It is time-efficient as web browsers cache the external js files, which further reduces the page loading time.
4. It enables both web designers and coders to work with html and js files parallelly and separately, i.e., without facing any code conflictions.
5. The length of the code reduces as only we need to specify the location of the js file.

#### 👉 Disadvantages of External Javascript

1. The stealer may download the coder's code using the url of the js file.
2. If two js files are dependent on one another, then a failure in one file may affect the execution of the other dependent file.
3. The web browser needs to make an additional http request to get the js code.
4. A tiny to a large change in the js code may cause unexpected results in all its dependent files.
5. We need to check each file that depends on the commonly created external javascript file.
6. If it is a few lines of code, then better to implement the internal javascript code.

### 4. What is Comment

- The Javascript comments are meaningful way to deliver message.
- It is used to add information about the code, warnings or suggestions so that end user can easily interpret the code.
- The Javascript comment is ignored by the JavaScript engine i.e embedded in the browser.

#### 👉 Advantages of Comment

- There are mainly two advantages of Javascript comments.
- To make code easy to understand it can be used to elaborate the code so that end user can easily understand the code.
- To avoid the unnecessary code it can also be used to avoid the code being executed, Sometimes, we add the code to perform some action. But after sometime, there may be need to disable the code.In such case, it is better to use comments.


## 🎏 JavaScript Basic

### 1. JavaScript Variables

- A JavaScript variable is simply a name of storage location.There are two types of variables in JavaScript: local variable and global variable.
- There are some rules while declaring a JavaScript variable (also known as identifiers).
  1. Name must start with a letter (a to z or A to Z), underscore(_), or dollar($) sign.
  2. After first letter we can use digits (0 to 9),for example value1.
  3. JavaScript variables are case sensitive, for example x and X are different variables.

   `❣️Correct way to define javascript variable: `
   ```javascript
      var x = 10;
      var _value = "roll";
      var $name = "sumit";
   ```
   `❣️Incorrect way to define javascript variable: `
   ```javascript
      var 123 = 10;
      var *aa = "roll";
   ```
#### 👉 Using let and const
- Before 2015, using the var keyword was the only way to declare a JavaScript variable.
- The 2015 version of JavaScript (ES6) allows the use of the const keyword to define a variable that cannot be reassigned, and the let keyword to define a variable with restricted scope.

`❣️Example of let: `
```javascript
// Example 1: Block-scoped variable
function exampleFunction() {
    let x = 10;
    if (true) {
        let x = 20; // This x is different from the one outside the block
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
}
exampleFunction();

```
`❣️Example of const: `
```javascript
// Example 2: Constant variable
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Trying to reassign a const variable will result in an error
PI = 3.14; // TypeError: Assignment to constant variable.
```
#### 👉 JavaScript Local Variable
- A JavaScript variable is declared inside block or function. it is  accessible within the function or block only.

`❣️Example of Local Variable: `
```javascript
function myFunction() {
    // Declaring a local variable inside the function
    let localVar = "I am a local variable";
    console.log(localVar); // Output: I am a local variable
}

myFunction();

// Trying to access localVar outside the function will result in a ReferenceError
console.log(localVar); // Output: ReferenceError: localVar is not defined

```
#### 👉 JavaScript Global Variable
- A JavaScript global variable is accessible from any function. A variable i.e. declared outside the function or declared with window object is known as global variable.

`❣️Example of Global Variable: `
```javascript
// Declaring a global variable outside any function or block
let globalVar = "I am a global variable";

function myFunction() {
    // Accessing the global variable inside the function
    console.log(globalVar); // Output: I am a global variable
}

myFunction();

// Accessing the global variable outside the function
console.log(globalVar); // Output: I am a global variable

```
### 2. JavaScript global variable
- A JavaScript global variable is declared outside the function or declared with window object.It can be accessed from any function.

  `❣️Example of Global Variable: `
```javascript
   // Declaring a global variable outside any function or block
let globalVar = "I am a global variable";

function myFunction() {
    // Accessing the global variable inside the function
    console.log(globalVar); // Output: I am a global variable
}

myFunction();

// Accessing the global variable outside the function
console.log(globalVar); // Output: I am a global variable

```
#### 👉 Declaring Global Variable in a Function
- To declare JavaScript global variable inside function, you need to use window object.

  `❣️Example: `
```javascript
      function abc(){
                  // var x = "This is a variable";
                  // window.value = "This is a variable";
                  window.x = "This window global variable"
                  // document.write(window.value)
                  document.write(window.x)
                }
                abc();
            //     def();
            // //     document.write(x);
            // document.write(window.value)
            // document.write("<br>")
            document.write(window.x)

```
#### 👉 Internals of global Variable in JavaScript
- When you declare a variable outside the function, it is added in the window object internally.You can access it through window object also.

  `❣️Example: `
```javascript
  var value = 50;
  function a(){
    var x = "this is x variable";
    alert(window.value); // accessing global variable
    alert(window.x); //not accessing with window object (x)
  }
  a();
  alert(window.value); // it is accessable
  alert(window.x); // it is not accessable
```
### 3. Primitive Data Types in JavaScript

#### 👉 Data Types
- JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.
  1. Primitive data type
  2. Non-primitive (reference) data type
- JavaScript is a dynamic type language, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine. You need to use var here to specify the data type. It can hold any type of values such as numbers, strings etc.

  `var a = 40; // variable with numeric value`

  `var b = "Sumit"; // variable with String value`

#### 👉 JavaScript primitive data types

| Data Type      | Description                                    | Example                                         |
| -------------  | ---------------------------------------------- | ------------------------------------------------|
| String         | represents sequence of characters e.g."hello"  | var str = "Hello, world!";                      |
| Number         | represents numeric valules e.g. 100            | var num = 42;                                   |
| Boolean        | represents boolean valule either false or true | var isTrue = true; var isFalse = false;         |
| Undefined      | represents undefined value                     | var undefinedVar; or var nullVar = undefined;   |
| Null           | represents null i.e. no value at all           | var nullValue = null;                           |

#### 👉 The Concept of Data Types
- var x = 15 + "Hello";
- var x = "15" + "Hello";
- var x = "Hello" + 15;
- var x = 50 + 50 + "Hello";
- var x = "Hello" + 50 + 50;

  `Example of String and Number: `
```javascript
// 👉 Number and String

//var a = 15 + "hello";  // 🎉 output:- 15hello
// var a = "15" + "Hello";  // 🎉 output:- 15Hello
// var a = "Hello" + "15";  // 🎉 output:- Hello15
// var a = 50 + 50 + "Value"  // 🎉 output:- 100Value
// var a = "Hello" + 50 + 50; // 🎉 output:- Hello5050
//   document.write(a)
// document.write("<br>")
//   document.write(typeof(a))

// 👉 Assigning value to variable:
var x; // Now x is Undefined
x = 50; // Now x is a Number
x = "Sumit"; // Now x is a String

// 👉 String:
var answer1 = "His"
var answer2 = "name is 'Sumit'" // Double quote inside Single quotes
var answer3 = 'name is "Sumit"' // Single quote inside double quotes


// 👉 Using Number methods to manipulate a String:
var strNum = "42";
var parsedNum = parseInt(strNum);
console.log(parsedNum); // Output: 42


// 👉 Using String concatenation with Numbers:
var num1 = 10;
var num2 = 20;
var resultStr = "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2);
console.log(resultStr); // Output: The sum of 10 and 20 is 30


// 👉 Using Template Literals (ES6+):
var num = 42;
var str = `The answer is: ${num}`;
console.log(str); // Output: The answer is: 42

// 👉 Boolean:
var x =5;
var y = 5;
var z = 6;
(x == y)  // Return true
(x == z)  // Return false

// 👉 Null:
// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
// Unfortunately, in JavaScript, the data type of null is an object

```
### 4. JavaScript - Non Primitive Datatypes

| Data Type      | Description                                              | Example                                              |
| -------------  | -------------------------------------------------------- | -----------------------------------------------------|
| Object         | represents instance through which we can access members  | var person = {name: "Sumit", age: 30, city: "India"} |
| Array          | represents group of similar values                       | var fruits = ["apple", "banana", "orange"];          |

  `Example: `
```javascript
  // 👉 Array:
   var car = ["Ertiga","XUV","Verna"]
   document.writeln(car[0])
   document.writeln("<br/>")
   document.writeln(car[1])
   document.writeln("<br/>")
   document.writeln(car[2])

  // 👉 Object:
  var person = {
    firstName: "Sumit",
    lastName: "Kumar",
    age: 20,
    hairColor: "Black"
  }

  document.write(person.firstName + " " + person.lastName)
   document.writeln("<br/>")
  document.write("Person age: " + person.age)
   document.writeln("<br/>")
  document.write("Person hairColor: " + person.hairColor)


```

#### 👉 Non-Primitive/Reference
- Arrays, Strings,Classes, Interfaces, Enums,Objects,Annotations (JavaScript and TypeScript)

#### 👉 Difference between Primitive vs Non-Primitive

| Primitive                                         | Non-Primitive                                           |
| ------------------------------------------------- | --------------------------------------------------------|
| Primitive Data types are predefined.              | Non-Primitive data types are created by the programmer  |
| Primitive Data types will have certain values.    | Non-Primitive data types can be NULL.                   |
| Size depends on the type of data structure.       | Size is not fixed                                       |
| Examples are numbers and strings.                 | Examples are Array and Linked List.                     |
| It can start with a lowercase.                    | It can start with uppercase.                            |

### 5. JavaScript - Arithmetic Operators

#### 👉 Types of Operators
- 👜 Arithmetic Operators
    - Addition +
    - Subtraction -
    - Multiplication *
    - Division /
    - Modulus % (Returns the remainder of a division operation)
    - Increment ++ (Increases the value by 1)
    - Decrement -- (Decreases the value by 1)
- 👜 Assignment Operators
    - Assignment =
    - Addition assignment +=
    - Subtraction assignment -=
    - Multiplication assignment *=
    - Division assignment /=
    - Modulus assignment %=
- 👜 Comparison Operators
    - Equal to == or ===
    - Not equal to != or !==
    - Greater than >
    - Less than <
    - Greater than or equal to >=
    - Less than or equal to <=
- 👜 Logical Operators
    - Logical AND &&
    - Logical OR ||
    - Logical NOT !
- 👜 Unary Operators
    - Unary plus +
    - Unary negation -
    - Increment ++
    - Decrement --
    - Logical NOT !
    - typeof operator typeof
- 👜 Bitwise Operators
    - Bitwise AND &
    - Bitwise OR |
    - Bitwise XOR ^
    - Bitwise NOT ~
    - Left shift <<
    - Right shift >>
    - Unsigned right shift >>>
- 👜 Ternary Operator(Conditional Operator)
    - condition ? expr1 : expr2
    - Evaluates condition. If condition is true, expr1 is executed; otherwise, expr2 is executed.
- 👜 String Operators
    - Concatenation +
- 👜 Type Operators
    - typeof operator typeof
    - instanceof operator instanceof

#### 👉 Arithmetic Operator
- Arithmetic operators are used to perform arithmetic operations on the operands.The following operators are known as JavaScript arithmetic operators.


| Operator  | Description            | Example     |
| --------- | -----------------------|------------ |
|   +       | Addition               |  1 + 1      |
|   -       | Subtraction            |  2 - 1      |
|   *       | Multiplication         |  2 * 2      |
|   /       | Division               |  2 / 2      |
|   %       | Modulus                |  2 % 2      |
|   ++      | Increment              |  ++i & i++  |
|   --      | Increment              |  --i & i--  |

  `Example:- `
```javascript
// 👉 Addition(+):
   var sum = 5 + 3; // sum equals 8
   document.writeln(sum);
// 👉 Subtraction(-):
   var difference = 10 - 4; // difference equals 6
   document.writeln(difference);
// 👉 Multiplication (*):
var product = 4 * 6; // product equals 24
document.writeln(product);
// 👉 Division (/):
var quotient = 20 / 5; // quotient equals 4
document.writeln(quotient)
// 👉 Modulus (%):
var remainder = 10 % 3; // remainder equals 1 (10 divided by 3 gives a remainder of 1)
document.writeln(remainder)
// 👉 ncrement (++) and Decrement (--):
var x = 5;
x++; // Increment: x is now 6
var y = 10;
y--; // Decrement: y is now 9
document.writeln(x);
document.writeln(y);

```
### 6. JavaScript - Comparison Operators
- The JavaScript comparison operator compares the two operands.

| Operator  | Description                       | Example     |
| --------- | --------------------------------- |------------ |
|   ==      | Is equal to                       |  a == b     |
|   ===     | Is equal and of same type         |  a === b    |
|   !=      | Not equal to                      |  a != b     |
|   !==     | Not equal and of not of same type |  a !== b    |
|   >       | Greater than                      |  a > b      |
|   >=      | Greater than or equal to          |  a >= b     |
|   <       | Less than                         |  a < b      |
|   <=      | Less than or equal to             |  a <= b     |

  `Example: `
```javascript
  // 👉  Equal to (==) and Not Equal to (!=):
  var a = 5;
  var b = 10;
  console.log(a == b); // Output: false
  console.log(a != b); // Output: true

  // 👉  Strict Equal to (===) and Strict Not Equal to (!==):
  var x = 5;
  var y = "5";
  console.log(x === y); // Output: false (values are equal but types are different)
  console.log(x !== y); // Output: true

  // 👉  Greater than (>), Greater than or Equal to (>=), Less than (<), and Less than or Equal to (<=):
  var num1 = 10;
  var num2 = 15;
  console.log(num1 > num2); // Output: false
  console.log(num1 >= num2); // Output: false
  console.log(num1 < num2); // Output: true
  console.log(num1 <= num2); // Output: true

```
### 7. JavaScript - Bitwise Operators

| Operator  | Description                       | Example                  |
| --------- | --------------------------------- |------------------------- |
|   `&`     | Bitwise AND                       | `5 & 3` (Result: 1)      |
|   `\|`    | Bitwise OR                        | `5 \| 3` (Result: 7)      |
|   `^`     | Bitwise XOR (Exclusive OR)        | `5 ^ 3` (Result: 6)      |
|   `~`     | Bitwise NOT (Unary Operator)      | `~5` (Result: -6)        |
|   `<<`    | Left shift                        | `5<<1` (Result: 10)      |
|   `>>`    | Right shift(Sign-propagating)     | `5>>1` (Result: 2)       |
|   `>>>`   | Right shift(Zero-fill)            | `5>>1` (Result: 2)       |

  `Example: `
```javascript
// formula:-   64 32 16 8 4 2 1
// 👉 Bitwise AND(&):
var result = 5 & 3; // Result: 1
// 🎄 Explanation:
      5:   101
      3:   011
         ------
      &    001 (Result: 1)

// 👉 Bitwise OR (|):
var result = 5 | 3; // Result: 7
// 🎄 Explanation:
      5:   101
      3:   011
         ------
      |    111 (Result: 7)

// 👉 Bitwise XOR (^):
var result = 5 ^ 3; // Result: 6
// 🎄 Explanation:
      5:   101
      3:   011
         ------
      ^    110 (Result: 6)

// 👉 Bitwise NOT (~):
var result = ~5; // Result: -6
// 🎄 Explanation:
      ~5:  ~101
         ------
           -110 (Result: -6)

// 👉 Left Shift (<<):
var result = 5 << 1; // Result: 10
// 🎄 Explanation:
      5:   101
      <<1: 1010 (Result: 10)

// 👉 Right Shift (>>):
var result = 5 >> 1; // Result: 2
// 🎄 Explanation:
    5:   101
    >>1: 10 (Result: 2)


// 👉 Unsigned Right Shift (>>>):
var result = -5 >>> 1; // Result: 2147483645
// 🎄 Explanation:
   -5:   11111111111111111111111111111011
   >>>1: 01111111111111111111111111111011 (Result: 2147483645)

```
### 8. JavaScript - Logical Operators

| Operator  | Description    | Example     |
| --------- | ---------------|------------ |
|   `&& `   | Logical AND    | `a && b`    |
|   `\|\|`    | Logical OR   | `a \|\| b`  |
|  `!`      | Logical Not    |  `!a `      |

  `Example: `
```javascript
//  👉  Logical AND (&&):
var x = 5;
var y = 10;
if (x > 0 && y < 15) {
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}

//  👉  Logical OR (||):
var k = 5;
var d = 10;
if (k < 0 || d < 15) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}

//  👉  Logical NOT (!):
var p = 5;
if (!(p < 0)) {
    console.log("p is not less than 0");
} else {
    console.log("p is less than 0");
}

```

### 9. JavaScript - Assignment Operators

| Operator  | Description          | Example     |
| --------- | ---------------------|------------ |
|   `=`     | Assign               | `a = b`     |
|   `+=`    | Add and Assign       | `a += b`    |
|  `-=`     | Subtract and Assign  |  `a -= b`   |
|  `*=`     | Multiply and Assign  |  `a *= b`   |
|  `/=`     | Divide and Assign    |  `a /= b`   |
|  `%=`     | Modulus and Assign   |  `a %= b`   |

  `Example: `
```javascript
  // 👉 Assignment(`=`):
       var x = 5;

  // 👉 Addition Assignment (+=):
      var x = 5;
      x += 3; // Equivalent to x = x + 3;

  // 👉 Subtraction Assignment (-=):
       var x = 5;
       x -= 2; // Equivalent to x = x - 2;

  // 👉 Multiplication Assignment (*=):
       var x = 5;
       x *= 4; // Equivalent to x = x * 4;

  // 👉 Division Assignment (/=):
       var x = 20;
       x /= 5; // Equivalent to x = x / 5;

  // 👉 Modulus Assignment (%=):
       var x = 20;
       x %= 3; // Equivalent to x = x % 3;

```

### 10. JavaScript - Special Operators


| Operator      | Description                                                     | Example                          |
| ------------- | --------------------------------------------------------------- |----------------------------------|
|   `?:`        | Conditional Operator                                            | `a == b ? x=true : x = false;`   |
|   `,`         | Comma Operator                                                  | `let a = (1,2,3); a=3 `          |
|   `delete`    | Delete property deletes an entry from the object                | `delete x`        |
|   `in`        | in property checks if the given property exist in the object    | `prop in object`          |
|   `instanceof`| checks if the object is an instance of given type               | `object instanceof object_type ` |
|   `new`       | creates a new object                                            | `var a = new a();`              |
|   `typeof`    | checks the type of object                                       | `typeof 5 //number`             |
|   `void`      | it discards the expressions return value                        | `void(x) `                       |

  `Example:- `
```javascript
//  👉 Conditional (Ternary) Operator (? :):
var age = 20;
var status = (age >= 18) ? "adult" : "minor";
console.log(status); // Output: adult

//  👉 Comma Operator (comma):
var a = 1, b = 2, c = 3;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

//  👉 Delete Operator (delete):
var obj = {a: 1, b: 2};
delete obj.a;
console.log(obj); // Output: {b: 2}


//  👉 In Operator (in):
var obj = {a: 1, b: 2};
console.log('a' in obj); // Output: true
console.log('c' in obj); // Output: false

//  👉 Instanceof Operator (instanceof):
function Car(make, model) {
    this.make = make;
    this.model = model;
}
var myCar = new Car("Toyota", "Camry");
console.log(myCar instanceof Car); // Output: true

//  👉 New Operator (new):
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var john = new Person("John", 30);
console.log(john.name); // Output: John
console.log(john.age); // Output: 30

//  👉 Typeof Operator (typeof):
var x = 5;
console.log(typeof x); // Output: number

//  👉 Void Operator (void):
<a href="javascript:void(0)">Click here</a>

```

### 11. JavaScript - if/else Statement

#### 👉 Conditional Statement
- The JavaScript Conditional statement is used to execute the code whether condition is true or false. There are three forms of if statement in JavaScript.

1. if Statement
2. if else statement
3. if else if statement

#### 👉 if Statement
- It evaluates the content only if expression is true. The signature of JavaScript if statement is given below.

  `Syntax And Example: `
```javascript
     if(expression){
       //content to be evaluated
     }

// 👉Example:
     let temperature = 25;

     if (temperature > 30) {
       console.log("It's a hot day!"); // This line will be executed if temperature is greater than 30
     }

    console.log("Enjoy your day!"); // This line will be executed regardless of the temperature

```

#### 👉 if...else Statement
- It evaluates the content whether condition is true or false. The syntax of JavaScript if-else statement is given below.

  `Syntax And Example: `
```javascript
  if(expression){
    //evaluated if condition is true
  }else{
    //evaluated if condition is false
  }

// 👉Example:
let hour = 14;

if (hour < 12) {
    console.log("Good morning!"); // This line will be executed if hour is less than 12
} else {
    console.log("Good afternoon!"); // This line will be executed if hour is greater than or equal to 12
}

console.log("Have a nice day!"); // This line will be executed regardless of the value of hour

```

#### 👉 if...else...if Statement
- It evaluates the content only if expression is true from several expresions.

  `Syntax And Example: `
```javascript
if(expression1){
  //content to be evaluated if expression1 is true
}else if(expression2){
  //content to be evaluated if expression2 is true
}else{
  //content to be evaluated if no expression is true
}

// 👉Example:
let hour = 14;

if (hour < 12) {
    console.log("Good morning!"); // This line will be executed if hour is less than 12
} else if (hour < 18) {
    console.log("Good afternoon!"); // This line will be executed if hour is less than 18 but greater than or equal to 12
} else {
    console.log("Good evening!"); // This line will be executed if hour is greater than or equal to 18
}

console.log("Have a great day!"); // This line will be executed regardless of the value of hour

```

### 12. JavaScript - switch Statement

- The JavaScript switch statement is used to execute one code from multiple expressions.It is just like else if statement that we have learned in previous page.
- It is convenient than if..else...if because it can be used with numbers,characters etc.

  `Syntax: `
```javascript
  switch(expression){
    case value1:
          //code to be executed;
    break;
    case value2:
         //code to be executed
    break;
    default:
      //code to be executed if above values are not matched;
  }
```
#### 👉 The break and default Keyword
- When JavaScript reaches a break keyword, it breaks out of the switch block.
- This will stop the execution inside the switch block.
- It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
- The default keyword specfies the code to run if there is no case match:

`Example of Switch Statement: `
```javascript

// 👉 Example: 1
let score = 85;
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 80 && score < 90):
        grade = "B";
        break;
    case (score >= 70 && score < 80):
        grade = "C";
        break;
    case (score >= 60 && score < 70):
        grade = "D";
        break;
    case (score >= 0 && score < 60):
        grade = "F";
        break;
    default:
        grade = "Invalid score";
}

console.log("Your grade is: " + grade);


// 👉 Example: 2

let today = new Date().getDay();
let dayName;

switch(today) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Today is " + dayName);

```

#### 👉 Strict Comparison
- Switch cases use strict comparison(===)
- The values mush be of the same type to match.
- A strict comparison can only be true if the operands are of the same type.
- In the example explained in next slide there will be no match for x:

  `Example of Strict Comparison: `
```javascript
 var x = "0";
 switch(x){
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found"
 }
```
### 13. JavaScript - do/while Statement

#### 👉 Loops
- The JavaScript loops are used to iterate the piece of code using for,while,do while or for-in loops. It makes the code compact. It is mostly used in array.

  1. for loop
  2. while loop
  3. do-while loop
  4. for-in loop
  5. for-of loop

#### 👉 for Loop
- The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known.

`Syntax And Example: `
```javascript
  for(initialization; condition; increment){
    //code to be executed
  }

  // 👉 Example:
  for (let i = 0; i < 5; i++) {
    console.log("Iteration " + (i + 1));
  }
  // 🎉 output:-
       // Iteration 1
       // Iteration 2
       // Iteration 3
       // Iteration 4
       // Iteration 5
```
#### 👉 while Loop
- The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration if not known.

`Syntax And Example: `
```javascript
  while(condition){
    //code to be executed
  }

  // 👉 Example:
    let i = 0;
    while (i < 5) {
      console.log("Iteration " + (i + 1));
      i++;
    }

  // 🎉 output:-
       // Iteration 1
       // Iteration 2
       // Iteration 3
       // Iteration 4
       // Iteration 5
```
#### 👉 do while Loop
- The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is excuted at least once whether condition is true or false.

`Syntax And Example: `
```javascript
  do(condition){
    //code to be executed
  }while(condition);

  // 👉 Example:
    let i = 0;
   do {
      console.log("Iteration " + (i + 1));
      i++;
   } while (i < 1);


  // 🎉 output:-
       // Iteration 1
```
### 14. JavaScript - for/in Statement

#### 👉 for...in Loop
- for in loops through the properties of an object
- use only object(recommended)
- not recommended for Array( non-primitive data type)

  `Syntax And Example: `
```javascript
for(var in object){
   //code block to be executed
}
// 👉 Example
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// 🎉 output:-
  // name: John
  // age: 30
  // city: New York
// 👉 Example 2 (Prototype properties iteration):
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.city = "New York";

const john = new Person("John", 30);

for (let key in john) {
    console.log(key + ": " + john[key]);
}


```

#### 👉 for...of Loop
- for...of loops through the values of an iterable object
- for...of use Array and String(only recommended)

  `Syntax And Example: `
```javascript
for(variable of iterable){
   //code block to be executed
}

// 👉 Example with Arrays:
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num);
}

// 👉 Example with Strings:
const str = "Hello";

for (const char of str) {
    console.log(char);
}


```

### 15. JavaScript - Functions

#### 👉 What is Function
- JavaScript Functions are used to perform operations. We can call JavaScript function many times to reuse the code.
- There are mainly two advantages of JavaScript functions.
  1. Code reusability: We can call a function several times so it save coding.
  2. Less coding: It makes our program compact. We don't need to write many lines of code each time to perform a common task.

  `Syntax And Example: `
```javascript
 function functionName([arg1,arg2,...argN]){
  //code to be executed
 }
//  🎄 Note: JavaScript Functions can have 0 or more arguments.

// 👉 Example 1(Basic Function):
// Function definition
function greet() {
    console.log("Hello!");
}

// Function call
greet();

// 👉 Example 2(Function with Parameters):
// Function definition with parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function call with argument
greet("John");


// 👉 Example 3(Function with Return Value):
// Function definition with return value
function add(a, b) {
    return a + b;
}

// Function call and storing the result
let result = add(3, 5);
console.log("The sum is: " + result);



// 👉 Example 4(Anonymous Function (Function Expression)):
// Function expression (anonymous function)
let greet = function() {
    console.log("Hello!");
};

// Function call
greet();


// 👉 Example 5(Arrow Function):
// Arrow function
let greet = () => {
    console.log("Hello!");
};

// Function call
greet();

```
### 16. JavaScript - Function call()

#### 👉 JavaScript Function Object
- In JavaScript, the purpose of Function constructor is to create a new function object. It executes the code globally.However, if we call the constructor directly, a function is created dynamically but in an unsecured way.

  `Syntax: `
  - new function ([arg1[,arg2[,...argn]],] funcBody)

   `Parameter: `
  - arg,arg2,...,argn - It represents the argument used by function
  - funcBody- It represents the function definition
  `Example: `
```javascript
  //  👉 Example 1:
   var add = new Function("num1","num2","return num1 + num2");
   document.write(add(2,8)); // 🎉 output:- 10
  //  👉 Example 2:
   var power = new Function("num1","num2","return Math.pow(num1,num2)");
   document.write(power(2,3)); // 🎉 output:- 8 (2^3(2*2*2))
```
#### 👉 JavaScript Function Methods
| Method       | Description                                                                         |
| -------------| ------------------------------------------------------------------------------------|
|   `call()`   | It is used to call a function contains this value and an argument                   |
|   `apply()`  | It is used to call a function contains this value and a single array of arguments.  |
|  `bind()`    | It is used to create a new function.                                                |
|  `toString()`| It returns the result in a form of a string.                                        |

#### 👉 call()
- The JavaScript Function call() method is used to call a function contains this value and an argument provided individually.

  `Syntax: `
    - function.call(thisArg,arg1,arg2,..,argn)
   `Parameter: `
    - thisArg - It is optional. The this value is given for the call to function.
    - arg1,arg2,...,argn - It is optional. it represents the arguments for the function.

  `Example: `
```javascript

//  👉 Example 1:
function Emp(id,name){
    this.id = id;
    this.name = name;
}

function PermanentEmp(id,name){
    Emp.call(this,id,name)
}
function TemporaryEmp(id,name){
    Emp.call(this,id,name)
}



var pEmp = new PermanentEmp(1,"Sumit kumar")
var tEmp = new TemporaryEmp(2,"Krishna kumar")
document.writeln("PermanentEmp: " + pEmp.id + " " + pEmp.name)
document.write("<br/>")
document.writeln("TemporaryEmp: " + tEmp.id + " " + tEmp.name)

// 👉 Example 2:
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "John",
  lastName: "Doe"
}

const person2 = {
  firstName: "Jane",
  lastName: "Doe"
}

// Using call() to invoke the fullName function with person1 as 'this'
console.log(person.fullName.call(person1)); // Output: "John Doe"

// Using call() to invoke the fullName function with person2 as 'this'
console.log(person.fullName.call(person2)); // Output: "Jane Doe"


```
### 17. JavaScript -  bind(),apply() and call()

#### 👉 apply()
- The JavaScript Function apply() method is used to call a function contains this value and an argument contains elements of an array. Unlike call() method, it contains the single array of arguments.

  `Syntax: `
    - function.apply(thisArg,[array])
  `Parameter: `
    - thisArg - It is optional. The this value is given for the call to a function.
    - array - It is optional. It is an array-like object.

  `Example: `
```javascript
const numbers = [5, 10, 15, 20];

// Using Math.max() with apply() to find the maximum number in the array
const maxNumber = Math.max.apply(null, numbers);
console.log("The maximum number is: " + maxNumber); // Output: "The maximum number is: 20"

// Using Math.min() with apply() to find the minimum number in the array
const minNumber = Math.min.apply(null, numbers);
console.log("The minimum number is: " + minNumber); // Output: "The minimum number is: 5"

```

#### 👉 bind()
- The JavaScript Function bind() method is used to create a new function. When a function is called, it has its own this keyword set to the provided value, with a given sequence of arguments.

  `Syntax: `
    - function.bind(thisArg[,arg1[,arg2[,...]])

  `Parameter: `
    - thisArg - The this value passed to the target function.
    - arg1,arg2,...argn - It represents the arguments for the function.

  `Example: `
```javascript
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "John",
  lastName: "Doe"
}

const person2 = {
  firstName: "Jane",
  lastName: "Doe"
}

// Using bind() to create a new function with person1 as 'this'
const person1FullName = person.fullName.bind(person1);

// Using bind() to create a new function with person2 as 'this'
const person2FullName = person.fullName.bind(person2);

console.log(person1FullName()); // Output: "John Doe"
console.log(person2FullName()); // Output: "Jane Doe"

```


#### 👉 toString()
- The JavaScript Function toString() method returns a string.Here, string represents the source code of the function.

  `Syntax: `
    - function.toString()

  `Example: `
```javascript
// 👉 Example :
 function add(num1,num2){
    return num1 + num2;
}

// document.writeln(add().toString());
document.writeln(add(10,20).toString());
document.write("<br/>");
document.writeln(typeof add.toString());

```

## 🎏 JavaScript Objects
