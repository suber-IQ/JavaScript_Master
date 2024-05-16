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

### 1. JavaScript Objects

#### 👉 What is object in JavaScript
- A JavaScript Object is an entity having state and behavior (properties and methods). For example: car,pen,bike,chair,glass,keyboard,monitor etc.
- JavaScript is an object-based language.Everything is an object in JavaScript
- JavaScript is template based not class based. Here, we don't create class to get the object. But,we direct create objects.

. `There are 3 ways to create objects.`

  1. By object literal
  2. By creating instance of Object directly (using new keyword)
  3. By using an object constructor (using new keyword)

#### 1. Object by Object literal
- The syntax of creating object using object literal is given below:

  `Syntax & Example: `
```javascript
//Syntax:
object = {
  property1: value1,
  property2: value2
  ...
  propertyN: valueN
}

//Example:-
// Creating an object using object literal notation
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "traveling", "hiking"],
  address: {
    street: "123 Main Street",
    city: "Anytown",
    country: "USA"
  },
  // Method defined inside the object
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Accessing properties of the object
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Hobbies:", person.hobbies);
console.log("Street:", person.address.street);
console.log("City:", person.address.city);
console.log("Country:", person.address.country);
console.log("Full Name:", person.fullName());

```
#### 2. By creating instance of Object

  `Syntax & Example: `
```javascript
  // 👉 Syntax:
     var objectName = new Object(); // Here,new keyword is used to create object

  // 👉 Example:
// Creating an instance of an object using Object() constructor
var person = new Object();

// Adding properties to the object using dot notation
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.hobbies = ["reading", "traveling", "hiking"];
person.address = {
  street: "123 Main Street",
  city: "Anytown",
  country: "USA"
};

// Adding a method to the object
person.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// Accessing properties of the object
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Hobbies:", person.hobbies);
console.log("Street:", person.address.street);
console.log("City:", person.address.city);
console.log("Country:", person.address.country);
console.log("Full Name:", person.fullName());

```

#### 3. By using an Object constructor
- You need to create function with arguments.Each argument value can be assigned in the current object by using this keyword.
- The this keyword refers to the current object.

  `Syntax & Example: `

```javascript
  // 👉 Example:
// Define a function using the Object constructor
function createPerson(firstName, lastName, age, hobbies, address) {
  // Use 'this' to refer to the current object being created
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.hobbies = hobbies;
  this.address = address;
}

// Create a new instance of the object using the function
var person = new createPerson("John", "Doe", 30, ["reading", "traveling", "hiking"], {
  street: "123 Main Street",
  city: "Anytown",
  country: "USA"
});

// Access properties of the object
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Hobbies:", person.hobbies);
console.log("Street:", person.address.street);
console.log("City:", person.address.city);
console.log("Country:", person.address.country);

```

#### 👉 How to define method in javascript object
- We can define method in JavaScript Object.But before defining method, we need to add property in the function with same name as method.

  `Example: `
```javascript
// 👉Example:
 function employee(id,name,salary){
  this.id = id;
  this.name = name;
  this.salary = salary;

  this.updateSalary = updateSalary;
  function updateSalary(newSalary){
    this.salary = newSalary;
  }
 }

var e1 = new employee(2,"Sumit kumar",80000);
document.writeln("Salary of " + e1.name + " is: " + e.salary);
e.updateSalary(100000);
document.writeln("Updated Salary of " + e1.name + " is: " + e.salary);

```

### 2. JavaScript Object Methods Part 1

| Methods                     | Description                                                                                           |
|-----------------------------|-------------------------------------------------------------------------------------------------------|
|  `1. Object.assign()`       | *This method is used to copy enumerable and own properties from a source object to a target object*  |
|  `2. Object.create()`       | *This method is used to create a new object with the specified prototype object and properties.*  |
|  `3. Object.freeze()`       | *This method prevents existing properties from being removed.*  |
|  `4. Object.is()`           | *This method determines whether two values are the same value.*  |
|  `5. Object.isExtensible()` | *This method determines if an object is extensible*  |
|  `6. Object.isFrozen()`     | *This method determines if an object was frozen*  |
|  `7. Object.isSealed()`     | *This method determines if an object is sealed*  |
|  `8. Object.seal()`         | *This method prevents new properties from being added and marks all existing properties as non-configurable.*  |
|  `9. Object.values()`       | *This method returns an array of values.*  |

  #### 1. Object.assign() Method

  `Example:- `
```javascript
// 👉Example 1:
// Define source objects
var source1 = { a: 1, b: 2 };
var source2 = { b: 3, c: 4 };

// Define a target object
var target = { c: 5, d: 6 };

// Use Object.assign() to copy properties from source objects to the target object
Object.assign(target, source1, source2);

// Output the modified target object
console.log(target);

// 🎉 output:-  { c: 4, d: 6, a: 1, b: 3 }

// 🎄 Note:💫 We have two source objects, source1 and source2, and a target object, target.

// 💫 We use Object.assign() to copy properties from source1 and source2 to the target object.

// 💫 The properties are copied in the order they are specified, and if there are properties with the same name, the later properties overwrite earlier ones.

// 💫 Finally, we output the modified target object, which now contains properties from both source objects.

// 💫 Object.assign() is useful for merging objects or creating a new object with properties copied from existing objects. It's important to note that Object.assign() only copies enumerable own properties and does not create deep copies of nested objects.
// 👉Example 2:
var object1 = {
  a:1,
  b:2,
  c:3
}
var object2 = {
  d:1,
  e:2,
  f:3
}

var object3 = Object.assign({c:5,d:6},object1)
console.log(object1,object3)

```

  #### 2. Object.create() Method

  `Example:- `
```javascript
  // 👉 Example 1:
  function fruit(){
    this.name = "Grapes";
  }
  function fun(){
    fruit.call(this);
  }

  fun.prototype = Object.create(fruit.prototype);
  const app = new fun();
  console.log(app)

  // 🎉 output:- fun of name: "Grapes"

  // 👉Example 2:
  // Define a prototype object
var personPrototype = {
  greet: function() {
    return "Hello, my name is " + this.name + ".";
  }
};

// Create a new object using Object.create() with the prototype object
var person = Object.create(personPrototype);

// Add properties to the object
person.name = "John";
person.age = 30;

// Access properties and call method
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log(person.greet());

// 🎉 output:-  Name: John
// Age: 30
// Hello, my name is John.


// 👉 Example 3:
// Define a parent object with some properties
var animal = {
  type: "animal",
  sound: "some sound",
  makeSound: function() {
    return "The " + this.type + " makes a " + this.sound + ".";
  }
};

// Create a new object using Object.create() with animal as the prototype
var dog = Object.create(animal);

// Add properties specific to the dog object
dog.type = "dog";
dog.sound = "bark";

// Access properties and call method
console.log(dog.makeSound()); // Output: The dog makes a bark.

// 🎄 Note:- 💫 We define a parent object animal with properties type, sound, and a method makeSound().

// 💫We then create a new object dog using Object.create() with animal as its prototype. This establishes prototypal inheritance, meaning dog inherits properties and methods from animal.

// 💫We override properties type and sound for the dog object to make it specific to a dog.

// 💫Finally, we call the makeSound() method on the dog object, which uses properties inherited from animal to generate a message specific to the dog.

// 💫 This example illustrates how Object.create() can be used to create objects that inherit properties and methods from a prototype object, facilitating the concept of prototypal inheritance in JavaScript.
```

### 3. JavaScript Object Methods Part 2

  #### 3. Object.freeze() Method

  `example: `
```javascript
  //  👉 Example:
// Define an object
var person = {
  name: "John",
  age: 30
};

// Freeze the object
Object.freeze(person);

// Attempt to modify the object
person.name = "Jane"; // This will not have any effect
person.address = "123 Main Street"; // This will not add a new property

// Output the modified object
console.log(person);
// 🎉 output:- { name: 'John', age: 30 }

// 🎄 Note:💫  We define an object person with properties name and age.

// 💫 We then use Object.freeze(person) to freeze the object, preventing any modifications to its properties.

// 💫 When we attempt to modify the properties (name and adding address), these attempts have no effect because the object is frozen.

// 💫 Finally, we output the object, which remains unchanged after attempting to modify it.

// 💫 Object.freeze() is useful when you want to ensure that an object's properties remain constant and immutable. It's important to note that freezing only applies to the immediate properties of the object and does not recursively freeze nested objects.

```

  #### 4. Object.is() Method

  `Example:- `
```javascript
//👉 Example 1: Comparing primitive values
console.log(Object.is(5, 5));      // 🎉 Output: true
console.log(Object.is(5, "5"));    // 🎉 Output: false
console.log(Object.is(0, -0));     // 🎉 Output: false
console.log(Object.is(NaN, NaN));  // 🎉 Output: true (NaN is considered equal to itself)

//👉 Example 2: Comparing objects
var obj1 = { a: 1 };
var obj2 = { a: 1 };
console.log(Object.is(obj1, obj2));    // 🎉 Output: false (different object references)

var obj3 = obj1;
console.log(Object.is(obj1, obj3));    //🎉  Output: true (same object reference)

// 🎅Note:-
//    🔷 Example 1 demonstrates comparisons of primitive values using Object.is().

// 💫 Object.is(5, 5) returns true because both values are numerically equal.
// 💫 Object.is(5, "5") returns false because the types are different.
// 💫 Object.is(0, -0) returns false because -0 is considered different from 0 in this case.
// 💫 Object.is(NaN, NaN) returns true because NaN is considered equal to itself according to the ECMAScript specification.

// 🔷 Example 2 demonstrates comparisons of objects.
// 💫 Object.is(obj1, obj2) returns false because obj1 and obj2 are distinct objects, despite having identical properties.
// 💫 Object.is(obj1, obj3) returns true because obj3 is assigned to reference the same object as obj1.

// 🚥 Object.is() is particularly useful when you need to compare values in a way that differs from the behavior of the === operator, such as for handling special cases like NaN and -0.

```

  #### 5. Object.isExtensible() Method

  `Example: `
```javascript
// 👉 Example:

// Define an object
var obj = { a: 1, b: 2 };

// Check if the object is extensible before sealing it
console.log(Object.isExtensible(obj));  // Output: true

// Make the object non-extensible
Object.preventExtensions(obj);

// Check if the object is extensible after preventing extensions
console.log(Object.isExtensible(obj));  // Output: false

// Attempt to add a new property to the object
obj.c = 3;

// Output the modified object
console.log(obj); // Output: { a: 1, b: 2 }

// 🎄 Note: 💫 We define an object obj with properties a and b.

// 💫 We use Object.isExtensible(obj) to check if the object is extensible before preventing extensions. Initially, it returns true.

// 💫 We then use Object.preventExtensions(obj) to make the object non-extensible.

// 💫After preventing extensions, Object.isExtensible(obj) returns false, indicating that new properties cannot be added to the object.

// 💫Finally, we attempt to add a new property c to the object, which has no effect because the object is non-extensible.

// 💫Object.isExtensible() is useful when you need to determine if an object can have new properties added to it, which can be important for ensuring the integrity of your data structures or enforcing certain constraints in your program.

```
  #### 6. Object.isFrozen() Method

  `Example: `
```javascript
// 👉 Example:
// Define an object
var obj = {
  prop1: 42,
  prop2: "foo"
};

// Check if the object is frozen before freezing it
console.log(Object.isFrozen(obj));  // Output: false

// Freeze the object
Object.freeze(obj);

// Check if the object is frozen after freezing it
console.log(Object.isFrozen(obj));  // Output: true

// Attempt to modify the object
obj.prop1 = 99;  // This modification will not take effect
obj.prop3 = "bar";  // This addition will not take effect

// Output the modified object
console.log(obj); // Output: { prop1: 42, prop2: "foo" }


// 🎄 Note: 💫 We define an object obj with properties prop1 and prop2.

// 💫 We use Object.isFrozen(obj) to check if the object is frozen before freezing it. Initially, it returns false.

// 💫 We then use Object.freeze(obj) to make the object frozen.

// 💫 After freezing the object, Object.isFrozen(obj) returns true, indicating that the object is now frozen and its properties cannot be modified.

// 💫 We attempt to modify the properties prop1 and add a new property prop3 to the object, but these attempts have no effect because the object is frozen.

// 💫 Object.isFrozen() is useful when you need to determine if an object is immutable, preventing unintended modifications to its properties. It's important to note that Object.freeze() only applies to the immediate properties of the object and does not recursively freeze nested objects.
```


  #### 7. Object.isSealed() Method

  `Example: `
```javascript
// 👉 Example:
// Define an object
var obj = {
  prop1: 42,
  prop2: "foo"
};

// Check if the object is sealed before sealing it
console.log(Object.isSealed(obj));  // Output: false

// Seal the object
Object.seal(obj);

// Check if the object is sealed after sealing it
console.log(Object.isSealed(obj));  // Output: true

// Attempt to modify the object
obj.prop1 = 99;  // This modification will take effect
obj.prop3 = "bar";  // This addition will not take effect

// Output the modified object
console.log(obj); // Output: { prop1: 99, prop2: "foo" }



```

  #### 8. Object.seal() Method
```javascript
// 👉 Example:
// Define an object
var obj = {
  prop1: 42,
  prop2: "foo"
};

// Seal the object
Object.seal(obj);

// Attempt to modify the object
obj.prop1 = 99;  // This modification will take effect
obj.prop3 = "bar";  // This addition will not take effect

// Output the modified object
console.log(obj); // Output: { prop1: 99, prop2: "foo" }

// Check if the object is sealed
console.log(Object.isSealed(obj));  // Output: true

```
  #### 9. Object.values() Method
```javascript
// 👉 Example:
// Define an object
var obj = {
  name: "John",
  age: 30,
  city: "New York"
};

// Get an array of values from the object
var values = Object.values(obj);

// Output the array of values
console.log(values); //🎉 Output: ["John", 30, "New York"]

```

### 4. JavaScript Arrays
- JavaScript array is an object that represents a collection of similar type of elements.
- **There are 3 ways to construct array in JavaScript**

  1. By array literal
  2. By creating instance of Array directly (using new keyword)
  3. By using an Array constructor (using new keyword)

#### 1 By array literal

  `Syntax & Example: `
```javascript
    // 👉 Syntax:
  //  var arrayname = [value1, value2....valueN];

    // 👉 Example:
    // Array literal
var fruits = ["apple", "banana", "orange", "kiwi"];

// Output the array
console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi"]


```
#### 2. Array using new keyword

  `Syntax & Example: `
```javascript
    // 👉 Syntax:
  //  var arrayname = new Array();

    // 👉 Example:
  // Array created using the new keyword
var colors = new Array();

colors[0] = "red";
colors[1] = "green";
colors[2] = "blue";
colors[3] = "yellow";
// Output the array
console.log(colors); // Output: ["red", "green", "blue", "yellow"]



```

#### 3. Array constructor

  `Syntax & Example: `
```javascript
    // 👉 Syntax:
  //  var arrayname = new Array();

    // 👉 Example 1:
  // Array created using Array constructor
var colors = new Array("red", "green", "blue", "yellow");

// Output the array
console.log(colors); // Output: ["red", "green", "blue", "yellow"]

    // 👉 Example 2:
    // Array created using the Array constructor
var numbers = Array(1, 2, 3, 4, 5);

// Output the array
console.log(numbers); // Output: [1, 2, 3, 4, 5]


```

### 5. JavaScript Array Methods Part 1


| Method | Description |
| ----------- | ----------- |
| `1. concat()` | It returns a new array object that contains two or more merged arrays. |
| `2. copyWithin()` | It copies the part of the given array with its own elements and returns the modified array. |
| `3. entries()` | It creates an iterator object and a loop that iterates over each key/value pair. |
| `4. every()` | It determines whether all the elements of an array are satisfying the provided function conditions. |
| `5. flat()` | It creates a new array carrying sub-array elements concatenated recursively till the specified depth. |
| `6. flatMap()` | It maps all array elements via mapping function, then flattens the result into a new array. |


  #### 1. concat() Array Method

  `Example: `
```javascript
// 👉 Example:
// Define two arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

// Concatenate the arrays
var mergedArray = arr1.concat(arr2);

// Output the concatenated array
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


```
  #### 2. copyWithin() Array Method

  `Example: `
```javascript
// 👉 Example:
// Define an array
var numbers = [1, 2, 3, 4, 5];

// Copy elements within the array
numbers.copyWithin(0, 3); // Copies elements starting from index 3 to the beginning

// Output the modified array
console.log(numbers); // Output: [4, 5, 3, 4, 5]

```
  #### 3. entries() Array Method

  `Example: `
```javascript
// 👉 Example:
// Define an array
var fruits = ["apple", "banana", "orange"];

// Create an iterator using the entries() method
var iterator = fruits.entries();

// Iterate over the entries using a for...of loop
for (let entry of iterator) {
  console.log(entry);
}

// 🎉 output:[0, "apple"]
          // [1, "banana"]
          // [2, "orange"]


```
  #### 4. every() Array Method

  `Example: `
```javascript
// 👉 Example:
// Define an array
var numbers = [1, 2, 3, 4, 5];

// Check if all elements are greater than 0
var allPositive = numbers.every(function(element) {
  return element > 0;
});

// Output the result
console.log(allPositive); //🎉 Output: true

```
  #### 5. flat() Array Method

  `Example: `
```javascript
// 👉 Example:
const nestedArray = [1, 2, [3, 4, [5, 6]]];
console.log(nestedArray.flat()); // Output: [1, 2, 3, 4, [5, 6]]

// You can specify the depth to which the array should be flattened
console.log(nestedArray.flat(2)); // Output: [1, 2, 3, 4, 5, 6]


```
  #### 6. flatMap() Array Method

  `Example: `
```javascript
// 👉 Example:
const arr = [1, 2, 3];

// Using flatMap(), we can achieve the same result more succinctly
const flattenedDoubledArray = arr.flatMap(num => [num * 2]);
console.log(flattenedDoubledArray); // Output: [2, 4, 6]

```
### 6. JavaScript Array Methods Part 2


| Method | Description |
| ----------------- | ----------- |
| `1. fill()` | It fills elements into an array with static values. |
| `2. from()` | It creates a new array carrying the exact copy of another array element.. |
| `3. filter()` | It returns the new array containing the elements that pass the provided function conditions |
| `4. find()` | It returns the valule of the first element in the given array that satisfies the specified condition. |
| `5. findIndex()` | It returns the index value of the first element in the given array that satisfies the specified condition. |
| `6. forEach()` | It invokes the provided function once for each element of an array. |

  #### 1. fill() Array Method

  `Example: `
```javascript
// 👉 Example:

const arr = [1, 2, 3];

// Suppose we want to create an array where each number is repeated twice
const repeatedArray = arr.flatMap(num => [num, num]);
console.log(repeatedArray); // Output: [1, 1, 2, 2, 3, 3]

// Now, let's use the fill method to repeat each number three times
const repeatedThriceArray = arr.flatMap(num => Array(3).fill(num));
console.log(repeatedThriceArray); // Output: [1, 1, 1, 2, 2, 2, 3, 3, 3]

```
  #### 2. from() Array Method

  `Example: `
```javascript
// 👉 Example:

// Suppose we want to create an array of length 5 filled with the value 0
const length = 5;
const filledArray = Array.from({ length }, () => 0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]

// 👉 Example 2:
    var func = function(){
         console.log(Array.from(arguments));
    }

    func("html","java","c");

```

  #### 3. filter() Array Method

  `Example: `

```javascript
// 👉 Example:
// Example array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtering even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

```

  #### 4. find() Array Method

  `Example: `

```javascript
// 👉 Example:
// Example array
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Find the first fruit that starts with 'o'
const fruitStartingWithO = fruits.find(fruit => fruit.startsWith('o'));

console.log(fruitStartingWithO); // Output: 'orange'

```
  #### 5. findIndex() Array Method

  `Example: `

```javascript
// 👉 Example:
// Example array
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Find the index of the fruit 'orange'
const indexOrange = fruits.findIndex(fruit => fruit === 'orange');

console.log(indexOrange); // Output: 2

```
  #### 6. forEach() Array Method

  `Example: `

```javascript
// 👉 Example:
// Example array
const numbers = [1, 2, 3, 4, 5];

// Function to log each number multiplied by 2
numbers.forEach(number => {
    console.log(number * 2);
});
// 🎉 output:- 2 4 6 8 10

```
### 7. JavaScript Array Methods Part 3


| Method | Description |
| ----------------- | ----------- |
| `1. includes()` | It checks whether the given array contains the specified element. |
| `2. indexOf()` | It searches the specified element in the given array and returns the index of the first match. |
| `3. isArray()` | It tests if the passed value in an array. |
| `4. join()` | It joins the elements of an array as a string. |
| `5. keys()` | It creates an iterator object that contains only the keys of the array, then loops through these keys. |
| `6. lastIndexOf()` | It searches the specified element in the given array and returns the index of the last match. |
| `7. map()` | It calls the specified function for every element and returns the new array. |

  #### 1. includes() Array Method

  `Example: `

```javascript
// 👉 Example:
// Example array
const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('kiwi'));   // Output: false

```
  #### 2. indexOf() Array Method

  `Example: `

```javascript
// 👉 Example:
// Example array
const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits.indexOf('banana')); // Output: 1
console.log(fruits.indexOf('kiwi'));   // Output: -1


```
  #### 3. isArray() Array Method

  `Example: `

```javascript
// 👉 Example:
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray('hello'));   // Output: false
console.log(Array.isArray({}));        // Output: false
console.log(Array.isArray(null));      // Output: false

```
  #### 4. join() Array Method

  `Example: `

```javascript
// 👉 Example:
const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits.join());        // Output: apple,banana,orange,grape
console.log(fruits.join(', '));    // Output: apple, banana, orange, grape
console.log(fruits.join(' - '));   // Output: apple - banana - orange - grape
console.log(fruits.join(''));      // Output: applebananaorangegrape


```
  #### 5. keys() Array Method

  `Example: `

```javascript
// 👉 Example:
const fruits = ['apple', 'banana', 'orange'];

const keysIterator = fruits.keys();

for (const key of keysIterator) {
  console.log(key);
}

// 🎉 output: 0 1 2

```

  #### 6. lastIndexOf() Array Method

  `Example: `

```javascript
// 👉 Example  1: Finding the last index of a string in an array of strings:

const words = ['apple', 'banana', 'orange', 'banana'];

console.log(words.lastIndexOf('banana'));   // Output: 3
console.log(words.lastIndexOf('kiwi'));     // Output: -1

// 👉 Example 2: Finding the last occurrence of an object in an array:

const people = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'John', age: 30 }];

const johnIndex = people.lastIndexOf({ name: 'John', age: 30 }); // Returns -1 because it's a different object reference

const john = { name: 'John', age: 30 };
const lastIndexOfJohn = people.lastIndexOf(john); // Returns 2 because it's the last occurrence of the object in the array

console.log(johnIndex);      // Output: -1
console.log(lastIndexOfJohn);// Output: 2

// 👉 Example 3: Using lastIndexOf() to remove the last occurrence of an element in an array:
let numbers = [1, 2, 3, 4, 2, 5];
const target = 2;
const lastIndex = numbers.lastIndexOf(target);
if (lastIndex !== -1) {
    numbers.splice(lastIndex, 1);
}

console.log(numbers); // Output: [1, 2, 3, 4, 5]


// 👉 Example 4: Searching for a substring within a string and finding its last occurrence:

const sentence = 'The quick brown fox jumps over the lazy dog';
const searchTerm = 'the';
const lastIndex = sentence.lastIndexOf(searchTerm);

console.log(lastIndex); // Output: 31

```

  #### 7. map() Array Method

  `Example: `

```javascript
// 👉 Example:
const numbers = [1, 2, 3, 4, 5];

// Doubling each number in the array
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


```


### 8. JavaScript Array Methods Part 4


| Method | Description |
| ----------------- | ----------- |
| `1. of()` | It creates a new array froma variable number of arguments, holding any type of argument. |
| `2. pop()` | It removes and returns the last element of an array.. |
| `3. push()` | It adds one or more elements to the end of an array. |
| `4. reverse()` | It reverses the elements of given array. |
| `5. reduce()` | It executes a provided function ofr each value from left to right and reduces the array to a single value. |
| `6. some()` | It determines if any element of the array  passes the test of the implemented function. |
| `7. shift()` | It removes and returns the first element of an array. |
| `8. slice()` | It returns a new array containing the copy of the part of the given array. |


  #### 1. of() Array Method

  `Example: `

```javascript
// 👉 Example:
// Using Array.of() to create an array with multiple elements
const arr1 = Array.of(1, 2, 3, 4, 5);
console.log(arr1); // Output: [1, 2, 3, 4, 5]

// Using Array.of() to create an array with a single element
const arr2 = Array.of("apple");
console.log(arr2); // Output: ["apple"]

// Using Array.of() with no arguments
const arr3 = Array.of();
console.log(arr3); // Output: []

// Without Array.of(), passing multiple arguments directly would create an array
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4); // Output: [1, 2, 3, 4, 5]

// However, passing a single argument without Array.of() would not create an array
const arr5 = ["apple"];
console.log(arr5); // Output: ["apple"]


```

  #### 2. pop() Array Method

  `Example: `

```javascript
// 👉 Example:
// Define an array
let fruits = ["apple", "banana", "orange", "grape"];

// Remove the last element from the array using pop()
const removedElement = fruits.pop();

// Log the removed element and the modified array
console.log("Removed element:", removedElement); // Output: "grape"
console.log("Modified array:", fruits); // Output: ["apple", "banana", "orange"]


```
  #### 3. push() Array Method

  `Example: `

```javascript
// 👉 Example:
// Define an array
let fruits = ["apple", "banana", "orange"];

// Add a single element to the end of the array using push()
fruits.push("grape");

// Log the modified array
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// Add multiple elements to the end of the array using push()
fruits.push("kiwi", "watermelon");

// Log the modified array
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi", "watermelon"]

```
  #### 4. reverse() Array Method

  `Example: `

```javascript
// 👉 Example:
// Define an array
let fruits = ["apple", "banana", "orange", "grape"];

// Reverse the order of the elements in the array using reverse()
fruits.reverse();

// Log the modified array
console.log(fruits); // Output: ["grape", "orange", "banana", "apple"]


```
  #### 5. reduce() Array Method

  `Example: `

```javascript
// 👉 Example:
// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using reduce() to calculate the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// Log the result
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

// 🎄 Note: The function's return value is assigned to the accumulator for the next iteration. In the initial iteration, the accumulator is initialized with the value 0, which is provided as the second argument to reduce(). The final result after all iterations is the accumulated sum of all numbers in the array.

```

  #### 6. some() Array Method

  `Example: `

```javascript
// 👉 Example:
// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Check if at least one element is even
const isAnyEven = numbers.some((number) => {
    return number % 2 === 0;
});

// Log the result
console.log(isAnyEven); // Output: true (because at least one element is even)

// 🎄 Note: In this example, numbers.some() checks whether at least one element in the numbers array is even. The provided callback function (number) => number % 2 === 0 checks if a number is even by performing a modulo operation with 2. If any element passes the test (i.e., if any element is even), the some() method returns true, indicating that at least one element meets the condition. Otherwise, it returns false.


```

  #### 7. shift() Array Method

  `Example: `

```javascript
// 👉 Example:
// Define an array
let fruits = ["apple", "banana", "orange", "grape"];

// Remove the first element from the array using shift()
const removedElement = fruits.shift();

// Log the removed element and the modified array
console.log("Removed element:", removedElement); // Output: "apple"
console.log("Modified array:", fruits); // Output: ["banana", "orange", "grape"]


```
  #### 8. slice() Array Method

  `Example: `

```javascript
// 👉 Example:
// Define an array
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Use slice() to create a new array with a subset of elements
const slicedFruits = fruits.slice(1, 4);

// Log the new array
console.log(slicedFruits); // Output: ["banana", "orange", "grape"]

// The original array remains unchanged
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi"]

// 🎄 Note: In this example, fruits.slice(1, 4) creates a new array starting from index 1 (inclusive) up to index 4 (exclusive) from the fruits array. So, the elements at indices 1, 2, and 3 ("banana", "orange", and "grape") are copied into the new array slicedFruits. The original fruits array remains unaltered.

```

### 9. JavaScript Array Methods Part 5


| Method | Description |
| ----------------- | ----------- |
| `1. sort()` | It returns the element of the given array in a sorted order. |
| `2. splice()` | It add/remove elements to/from the given array. |
| `3. toLocaleString()` | It returns a string containing all the elements of a specified array. |
| `4. toSring()` | It converts the elements of a specified array into string from, without affecting the original array. |


  #### 1. sort() Array Method

  `Example: `

```javascript
// 👉 Example:
// Define an array of numbers
const numbers = [3, 1, 5, 2, 4];

// Sort the array in ascending order numerically
numbers.sort((a, b) => a - b);

// Log the sorted array
console.log(numbers); // Output: [1, 2, 3, 4, 5]


```
  #### 2. splice() Array Method

  `Example: `

```javascript
// 👉 Example:
// Define an array
let fruits = ["apple", "banana", "orange", "grape"];

// Remove "orange" from the array
const removedElement = fruits.splice(2, 1);

// Log the removed element and the modified array
console.log("Removed element:", removedElement); // Output: ["orange"]
console.log("Modified array:", fruits); // Output: ["apple", "banana", "grape"]

// Add "kiwi" and "watermelon" at index 2, replacing 0 elements
fruits.splice(2, 0, "kiwi", "watermelon");

// Log the modified array
console.log("Modified array after adding elements:", fruits); // Output: ["apple", "banana", "kiwi", "watermelon", "grape"]


```

  #### 3. toLocaleString() Array Method

  `Example: `

```javascript
// 👉 Example 1:

// Define an array containing numbers
const numbers = [1000, 20000, 300000];

// Use toLocaleString() to format the array elements
const formattedString = numbers.toLocaleString();

// Log the formatted string
console.log(formattedString); // Output: "1,000, 20,000, 300,000"

// 👉 Example 2:
// Define an array containing currency values
const prices = [1000, 20000, 300000];

// Use toLocaleString() with options to format the array elements as currency
const formattedCurrency = prices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

// Log the formatted currency string
console.log(formattedCurrency); // Output: "$1,000.00, $20,000.00, $300,000.00"

```
  #### 4. toSring() Array Method

  `Example: `

```javascript
// 👉 Example :
// Define an array
const fruits = ["apple", "banana", "orange", "grape"];

// Use toString() to convert the array to a string
const fruitsString = fruits.toString();

// Log the string representation of the array
console.log(fruitsString); // Output: "apple,banana,orange,grape"

```

### 10. JavaScript Array Methods Part 6


| Method | Description |
| ----------------- | ----------- |
| `1. unshift()` | It adds one or more elements in the beginning of the given array. |
| `2. values()` | It creates a new iterator object carrying values for each element in the array. |



  #### 1. unshift() Array Method

  `Example: `

```javascript
// 👉 Example :
// Define an array
let fruits = ["orange", "banana", "grape"];

// Add a single element to the beginning of the array using unshift()
fruits.unshift("apple");

// Log the modified array
console.log(fruits); // Output: ["apple", "orange", "banana", "grape"]

// Add multiple elements to the beginning of the array using unshift()
fruits.unshift("kiwi", "watermelon");

// Log the modified array
console.log(fruits); // Output: ["kiwi", "watermelon", "apple", "orange", "banana", "grape"]


```

  #### 2. values() Array Method

  `Example: `

```javascript
// 👉 Example :
// Create an array
const fruits = ['apple', 'banana', 'cherry'];

// Get the iterator using the values() method
const iterator = fruits.values();

// Iterate through the values using a for...of loop
for (const value of iterator) {
  console.log(value);
}

// 🎉 output: apple banana cherry


```

### 11. JavaScript String
- The JavaScript string is an object that represents a sequence of characters.

  `There are 2 way to create string in Javascript`
    1. By string literal
    2. By string object (using new keyword)

#### 1. By string literal
- The string literal is created using double quotes. The syntax of creating string using string literal is given below:

  `Syntax:  var stringname = "string value";`
```javascript
// 👉 Example:
var str = "This is string literal"
console.log(str)
```
#### 2.  By string object (using new keyword)

  `Syntax & Example: `
```javascript
 // Create a string object using the String constructor
const strObject = new String('Hello, World!');

// Access methods and properties of the string object
console.log(strObject.length); // Output: 13
console.log(strObject.toUpperCase()); // Output: "HELLO, WORLD!"

```

#### 👉 String Methods


| Method | Description |
| ----------------- | ----------- |
| `1. charAt()` | It provides the char value present at the specified index. |
| `2. charCodeAt()` | It provides the Unicode value of a character present at the specified index. |
| `3. concat()` | It provides a combination of two or more strings. |
| `4. indexOf()` | It provides the position of a char value present in the given string. |
| `5. lastIndexOf()` | It provides the position of a char value present in the given string by searching a character from the last position. |
| `6. search()` | It searches a specified regular expression in a given string and returns its position if a match occurs . |
| `7. match()` |  It searches a specified regular expression in a given string and returns that regular expression if a match occurs. |



  #### 1. charAt() String Method

  `Example: `

```javascript
// 👉 Example :
// Define a string
var str = "Hello, World!";

// Access the character at index 0
var firstChar = str.charAt(0);
console.log("The first character is:", firstChar); // Output: The first character is: H

// Access the character at index 7
var seventhChar = str.charAt(7);
console.log("The seventh character is:", seventhChar); // Output: The seventh character is: W

// Access the character at an index beyond the length of the string
var beyondLengthChar = str.charAt(20);
console.log("Character beyond the length of the string is:", beyondLengthChar); // Output: Character beyond the length of the string is:

// Note that when the index is out of range, an empty string is returned


```
  #### 2. charCodeAt() String Method(UTF-16 code unit)

  `Example: `

```javascript
// 👉 Example :
// Define a string
var str = "Hello, World!";

// Get the Unicode value of the character at index 0
var firstCharCode = str.charCodeAt(0);
console.log("The Unicode value of the first character is:", firstCharCode); // Output: The Unicode value of the first character is: 72

// Get the Unicode value of the character at index 7
var seventhCharCode = str.charCodeAt(7);
console.log("The Unicode value of the seventh character is:", seventhCharCode); // Output: The Unicode value of the seventh character is: 87

// Get the Unicode value of the character at an index beyond the length of the string
var beyondLengthCharCode = str.charCodeAt(20);
console.log("Unicode value of character beyond the length of the string is:", beyondLengthCharCode); // Output: Unicode value of character beyond the length of the string is: NaN


```
  #### 3. concat() String Method

  `Example: `

```javascript
// 👉 Example :
// Define two strings
var str1 = "Hello";
var str2 = " World";

// Concatenate the two strings
var result = str1.concat(str2);
console.log("Concatenated string:", result); // Output: Concatenated string: Hello World

// Concatenate multiple strings
var str3 = "!";
result = str1.concat(str2, str3);
console.log("Concatenated string with multiple values:", result); // Output: Concatenated string with multiple values: Hello World!

// You can also use concat directly on a string literal
result = "Hey".concat(", ", "how", " ", "are", " ", "you", "?");
console.log("Concatenated string with literals:", result); // Output: Concatenated string with literals: Hey, how are you?


```
  #### 4. indexOf() String Method

  `Example: `

```javascript
// 👉 Example :
// Define a string
var str = "Hello, World!";

// Find the index of substring "World"
var indexOfWorld = str.indexOf("World");
console.log("Index of 'World':", indexOfWorld); // Output: Index of 'World': 7

// Find the index of substring "l"
var indexOfL = str.indexOf("l");
console.log("Index of 'l':", indexOfL); // Output: Index of 'l': 2

// Find the index of substring "Universe" (not found)
var indexOfUniverse = str.indexOf("Universe");
console.log("Index of 'Universe':", indexOfUniverse); // Output: Index of 'Universe': -1

// Find the index of substring "o" starting from index 5
var indexOfOAfter5 = str.indexOf("o", 5);
console.log("Index of 'o' after index 5:", indexOfOAfter5); // Output: Index of 'o' after index 5: 8

```


  #### 5. lastIndexOf() String Method

  `Example: `

```javascript
// 👉 Example :

// Define a string
var str = "The quick brown fox jumps over the lazy dog";

// Find the index of the last occurrence of substring "fox"
var lastIndexFox = str.lastIndexOf("fox");
console.log("Last index of 'fox':", lastIndexFox); // Output: Last index of 'fox': 16

// Find the index of the last occurrence of substring "the"
var lastIndexThe = str.lastIndexOf("the");
console.log("Last index of 'the':", lastIndexThe); // Output: Last index of 'the': 31

// Find the index of the last occurrence of substring "dog"
var lastIndexDog = str.lastIndexOf("dog");
console.log("Last index of 'dog':", lastIndexDog); // Output: Last index of 'dog': 44

// Find the index of the last occurrence of substring "cat" (not found)
var lastIndexCat = str.lastIndexOf("cat");
console.log("Last index of 'cat':", lastIndexCat); // Output: Last index of 'cat': -1

// Find the index of the last occurrence of substring "brown" starting from index 20
var lastIndexBrownAfter20 = str.lastIndexOf("brown", 20);
console.log("Last index of 'brown' after index 20:", lastIndexBrownAfter20); // Output: Last index of 'brown' after index 20: 10


```

#### 6. search() String Method

  `Example: `

```javascript
// 👉 Example :
// Define a string
var str = "Hello, World!";

// Search for the position of the substring "World"
var position = str.search("World");
console.log("Position of 'World':", position); // Output: Position of 'World': 7

// Search for the position of the substring "o"
position = str.search("o");
console.log("Position of 'o':", position); // Output: Position of 'o': 4

// Search for the position of the substring "Universe" (not found)
position = str.search("Universe");
console.log("Position of 'Universe':", position); // Output: Position of 'Universe': -1

```

#### 7. match() String Method

  `Example: `

```javascript
// 👉 Example :
// Define a string
var str = "The quick brown fox jumps over the lazy dog";

// Match the word "fox" in the string
var matchResult = str.match("fox");
console.log("Match result:", matchResult); // Output: Match result: ["fox"]

// Match the letter "o" in the string
matchResult = str.match("o");
console.log("Match result:", matchResult); // Output: Match result: ["o"]

// Match a regular expression pattern for three consecutive word characters
matchResult = str.match(/\w{3}/);
console.log("Match result:", matchResult); // Output: Match result: ["The"]

// Match a regular expression pattern for two or more consecutive word characters
matchResult = str.match(/\w{2,}/g);
console.log("Match result:", matchResult); // Output: Match result: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// Match a pattern that does not exist in the string
matchResult = str.match("unicorn");
console.log("Match result:", matchResult); // Output: Match result: null


```

### 12. JavaScript String Methods Part 1

| Method | Description |
| ----------------- | ----------- |
| `1. replace()` | It replaces a given string with the specified replacement. |
| `2. substr()` | It is used to fetch the part of the given string on the basis of the specified starting position and length. |
| `3. substring()` | It is used to fetch the part of the given string on the basis of the specified index. |
| `4. slice()` | It is used to fetch the part of the given string. It allows us to assign positive as well negative index. |
| `5. toLowerCase()` | It converts the given string into lowercase letter. |
| `6. toLocaleLowerCase()` | It converts the given string into lowercase letteron local host?s current locale. |



#### 1. replace() String Method

  `Example: `

```javascript
// 👉 Example :
// Define a string
var str = "Hello, World!";

// Replace the substring "World" with "Universe"
var newStr = str.replace("World", "Universe");
console.log("New string:", newStr); // Output: New string: Hello, Universe!

// Replace the first occurrence of the letter "o" with "x"
newStr = str.replace("o", "x");
console.log("New string:", newStr); // Output: New string: Hellx, World!

// Replace all occurrences of the letter "o" with "x" using a regular expression with the 'g' flag
newStr = str.replace(/o/g, "x");
console.log("New string:", newStr); // Output: New string: Hellx, Wxrld!

// Replace a pattern using a function
var replacedStr = str.replace(/\w+/g, function(match) {
    return match.toUpperCase(); // Convert each word to uppercase
});
console.log("Replaced string:", replacedStr); // Output: Replaced string: HELLO, WORLD!


```

#### 2. substr() String Method

  `Example: `

```javascript
// 👉 Example :
// Define a string
var str = "Hello, World!";

// Extract a substring starting from index 7 and extending for 5 characters
var substr1 = str.substr(7, 5);
console.log("Substring:", substr1); // Output: Substring: World

// Extract a substring starting from index 2 (until the end of the string)
var substr2 = str.substr(2);
console.log("Substring:", substr2); // Output: Substring: llo, World!

// Extract a substring starting from index -3 (counts from the end of the string) and extending for 3 characters
var substr3 = str.substr(-3, 3);
console.log("Substring:", substr3); // Output: Substring: ld!

```

#### 3. substring() String Method

  `Example: `

```javascript
// 👉 Example :
// Define a string
var str = "Hello, World!";

// Extract a substring starting from index 7 and ending at index 12 (exclusive)
var sub = str.substring(7, 12);
console.log("Substring:", sub); // Output: Substring: World

// Extract a substring starting from index 2 and ending at index 6 (exclusive)
sub = str.substring(2, 6);
console.log("Substring:", sub); // Output: Substring: llo,

// If only one parameter is provided, substring from that index to the end of the string is returned
sub = str.substring(7);
console.log("Substring:", sub); // Output: Substring: World!

// If the first index is greater than the second index, the substring will start at the second index and end at the first index
sub = str.substring(12, 7);
console.log("Substring:", sub); // Output: Substring: Worl


```

#### 4. slice() String Method

  `Example: `

```javascript
// 👉 Example :

// Define a string
var str = "Hello, World!";

// Extract a substring starting from index 7 and ending at index 12 (exclusive)
var sliced1 = str.slice(7, 12);
console.log("Sliced:", sliced1); // Output: Sliced: World

// Extract a substring starting from index 2 and ending at index 6 (exclusive)
var sliced2 = str.slice(2, 6);
console.log("Sliced:", sliced2); // Output: Sliced: llo,

// If only one parameter is provided, slice from that index to the end of the string is returned
var sliced3 = str.slice(7);
console.log("Sliced:", sliced3); // Output: Sliced: World!

// If the first index is greater than the second index, an empty string is returned
var sliced4 = str.slice(12, 7);
console.log("Sliced:", sliced4); // Output: Sliced: ""

// Negative indices can be used, counting from the end of the string
var sliced5 = str.slice(-6);
console.log("Sliced:", sliced5); // Output: Sliced: World!

// Negative indices can also be used for the start and end positions
var sliced6 = str.slice(-6, -1);
console.log("Sliced:", sliced6); // Output: Sliced: World

```

#### 5. toLowerCase() String Method

  `Example: `

```javascript
// 👉 Example :
// Define a string with mixed case characters
var str = "Hello, World!";

// Convert all characters to lowercase
var lowerCaseStr = str.toLowerCase();
console.log("Lowercased string:", lowerCaseStr); // Output: Lowercased string: hello, world!

```
#### 6. toLocaleLowerCase() String Method

  `Example: `

```javascript
// 👉 Example :
// Define a string with mixed case characters
var str = "HÉLLÒ, WÖRLD!";

// Convert all characters to lowercase based on locale-specific case mappings
var lowerCaseStr = str.toLocaleLowerCase();
console.log("Locale Lowercased string:", lowerCaseStr); // Output: Locale Lowercased string: héllò, wörld!

```
### 13. JavaScript String Methods Part 2

| Method | Description |
| ----------------- | ----------- |
| `1. toLocaleUpperCase()` | It converts the given string into uppercase letter on the basis of host?s current locale. |
| `2. toString()` | It provides a string representing the particular object. |
| `3. valueOf()` | It provides the primitive value of string object. |
| `4. split()` | It splits a string into substring array, then returns that newly created array. |
| `5. trim()` | It trims the white space from the left and right side of the string. |


#### 1. toLocaleUpperCase() String Method

  `Example: `

```javascript
// 👉 Example :
let str = "guten tag";
let upperCaseStr = str.toLocaleUpperCase('de-DE'); // Convert to uppercase using German locale

console.log(upperCaseStr); // Output: "GUTEN TAG"


```
#### 2. toString() String Method

  `Example: `

```javascript
// 👉 Example :
let num = 123;
let str = num.toString();

console.log(typeof str); // Output: "string"
console.log(str); // Output: "123"


```
#### 3. valueOf() String Method

  `Example: `

```javascript
// 👉 Example :
let obj = {
  value: 42,
  valueOf: function() {
    return this.value;
  }
};

console.log(obj.valueOf()); // Output: 42
console.log(obj + 10); // Output: 52

// 👉 Exmaple 2:
let date = new Date();
console.log(date); // Output: Current date and time in the default format

let primitiveValue = date.valueOf();
console.log(primitiveValue); // Output: Number of milliseconds since January 1, 1970

let anotherDate = new Date(primitiveValue);
console.log(anotherDate); // Output: Date reconstructed from the primitive value


```

#### 4. split() String Method

  `Example: `

```javascript
// 👉 Example :
let str = "apple,banana,orange";
let fruits = str.split(",");

console.log(fruits); // Output: ["apple", "banana", "orange"]


```
#### 5. trim() String Method

  `Example: `

```javascript
// 👉 Example :
let str = "   Hello, World!   ";
let trimmedStr = str.trim();

console.log(trimmedStr); // Output: "Hello, World!"


```

### 14. JavaScript Date Objects Part 1
- The JavaScript date object can be used to get year, month and day. You can display a timer on the webpage by the help of JavaScript date object.

- You can use different Date, constructors to create date object. It provides methods to get and set day,month,year,hour, minute and seconds.

  **Constructor:**
    - You can use 4 variant of Date constructor to create date object.

    1. Date()
    2. Date(milliseconds)
    3. Date(dateString)
    4. Date(year,month,day,hours,minutes,seconds milliseconds)

`Example: `

`1. Current Date and Time:`
```javascript
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time

```
`2. Date with Specific Parameters:`
```javascript
let specificDate = new Date(2024, 4, 14); // Note: Month is zero-based (0 is January)
console.log(specificDate); // Output: May 14, 2024

```
`3. Date and Time with Specific Parameters:`
```javascript
let specificDateTime = new Date(2024, 4, 14, 12, 30, 0); // Year, month, day, hours, minutes, seconds
console.log(specificDateTime); // Output: May 14, 2024 12:30:00

```
`4. Date from a String:`
```javascript
let dateString = "2024-05-14T12:30:00";
let dateFromString = new Date(dateString);
console.log(dateFromString); // Output: May 14, 2024 12:30:00

```
`5. Date from Milliseconds Since Epoch:`
```javascript
let millisecondsSinceEpoch = 1590000000000; // For example
let dateFromMilliseconds = new Date(millisecondsSinceEpoch);
console.log(dateFromMilliseconds); // Output: May 21, 2020 (or any other date depending on the milliseconds)

```
`6. Date from a String in a Specific Format:`
```javascript
let dateString = "May 14, 2024 12:30:00";
let dateFromStringWithFormat = new Date(dateString);
console.log(dateFromStringWithFormat); // Output: May 14, 2024 12:30:00

```

### 15. JavaScript Date Objects Part 2

#### 👉 Date Methods

| Method | Description |
| ----------------- | ----------- |
| `1. getDate()` | It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of local time. |
| `2. getDay()` | It returns the integer value between 0 and 6 that represents the day of the week on the basis of local time. |
| `3. getFullYears()` | It returns the integer value that represents the year on the basis of local time. |
| `4. getHours()` | It returns the integer value between 0 and 23 that rerpresents the hours on the basis of local time. |
| `5. getMilliseconds()` | It returns the integer value between 0 and 99 that represent milliseconds on the basis of local time. |
| `6. getMilliseconds()` | It returns the integer value between 0 and 59 that represents the minutes on the basis of local time. |
| `7. getMonth()` | It returns the integer value between 0 and 11 that represents the month on the basis of local time. |
| `8. getSeconds()` | It returns the integer value between 0 and 60 that represents the seconds on the basis of local time. |
| `9. toDateString()` | It returns the date portion of a Date object. |
| `10. toString()` | It returns the date in the form of string. |
| `11. toTimeString()` | It returns the time portion of a Date object. |

  `Example: `
```javascript
//  👉  1. getFullYear(): Get the year (4 digits) of the specified date according to local time.
let currentDate = new Date();
let year = currentDate.getFullYear();
console.log(year); // Output: Current year (e.g., 2024)

//  👉  2. getMonth(): Get the month (0-11) of the specified date according to local time.
let currentDate = new Date();
let month = currentDate.getMonth();
console.log(month); // Output: Current month (0-11, January is 0)

//  👉  3. getDate(): Get the day of the month (1-31) for the specified date according to local time.
let currentDate = new Date();
let day = currentDate.getDate();
console.log(day); // Output: Current day of the month (e.g., 14)

//  👉  4. getDay(): Get the day of the week (0-6) for the specified date according to local time.
let currentDate = new Date();
let dayOfWeek = currentDate.getDay();
console.log(dayOfWeek); // Output: Current day of the week (0-6, Sunday is 0)

//  👉  5. getHours(): Get the hour (0-23) for the specified date according to local time.
let currentDate = new Date();
let hours = currentDate.getHours();
console.log(hours); // Output: Current hour (e.g., 15 for 3 PM)

//  👉  6. getMinutes(): Get the minutes (0-59) for the specified date according to local time.
let currentDate = new Date();
let minutes = currentDate.getMinutes();
console.log(minutes); // Output: Current minutes (e.g., 30)

//  👉 7. getSeconds(): Get the seconds (0-59) for the specified date according to local time.
let currentDate = new Date();
let seconds = currentDate.getSeconds();
console.log(seconds); // Output: Current seconds (e.g., 45)

//  👉 8.getTime(): Get the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.
let currentDate = new Date();
let millisecondsSinceEpoch = currentDate.getTime();
console.log(millisecondsSinceEpoch); // Output: Number of milliseconds since epoch


//  👉 9. toString(): Convert the Date object to a string, representing the date and time.
let currentDate = new Date();
let dateString = currentDate.toString();
console.log(dateString); // Output: String representation of current date and time


//  👉 10. toLocaleString(): Convert the Date object to a string, representing the date and time, using the appropriate locale-specific format.
let currentDate = new Date();
let localeDateString = currentDate.toLocaleString();
console.log(localeDateString); // Output: Locale-specific string representation of current date and time

//  👉 11. toDateString(): Convert the Date object to a string, representing the date portion only.
let currentDate = new Date();
let dateOnlyString = currentDate.toDateString();
console.log(dateOnlyString); // Output: String representation of current date (e.g., "Fri May 14 2024")

//  👉 12. toISOString(): Convert the Date object to a string, representing the date and time in simplified extended ISO format (ISO 8601).
let currentDate = new Date();
let isoString = currentDate.toISOString();
console.log(isoString); // Output: ISO 8601 string representation of current date and time

//  👉 13. toUTCString(): Convert the Date object to a string, representing the date and time in UTC (Coordinated Universal Time).
let currentDate = new Date();
let utcString = currentDate.toUTCString();
console.log(utcString); // Output: UTC string representation of current date and time


```

### 16. JavaScript Math Objects Part 1

#### 👉 Math and Math Methods
- The JavaScript math object provides several constants and methods to perform mathematical operation. Unlike date object,it doesn't have constructors.

| Method | Description |
| ----------------- | ----------- |
| `1. abs()` | It returns the absolute value of the given number. |
| `2. ceil()` | It returns a smallest integer value, greater that or equal to the given number.. |
| `3. exp()` | It returns the exponential form of the given number. |
| `4. floor()` | It returns largest integer value, lower than or equal to the given number. |
| `5. log()` | It returns natural logarithm of a number. |
| `6. max()` | It returns maximum value of the given numbers. |
| `7. min()` | It returns minimum value of the given numbers. |
| `8. pow()` | It returns value of base to the power of exponent. |
| `9. random()` | It returns random number between 0(inclusive) and 1(exclusive). |
| `10. round()` | It returns closest integer value of the given number. |
| `11. sign()` | It returns the sign of the given number. |
| `12. sqrt()` | It returns the square root of the given number. |
| `13. cbrt()` | It returns the cube root of the given number. |
| `14. trunc()` | It returns an integer part of the given number. |

`Example: `

```javascript
//  👉  1. abs(): Returns the absolute value of a number.
let num = -10;
let absValue = Math.abs(num);
console.log(absValue); // Output: 10

//  👉  2. ceil(): Returns the smallest integer greater than or equal to a given number.
let num = 9.25;
let ceilValue = Math.ceil(num);
console.log(ceilValue); // Output: 10

//  👉 3 exp(): Returns Euler's number (approximately 2.718) raised to the power of a specified number.

let exponent = 2;
let expValue = Math.exp(exponent);
console.log(expValue); // Output: Approximately 7.389


//  👉  4. floor(): Returns the largest integer less than or equal to a given number.
let num = 9.25;
let floorValue = Math.floor(num);
console.log(floorValue); // Output: 9


//  👉  5. log(): Returns the natural logarithm (base e) of a number.
let num = 10;
let logValue = Math.log(num);
console.log(logValue); // Output: Approximately 2.303

//  👉  6.max(): Returns the largest of zero or more numbers.
let maxNumber = Math.max(10, 20, 5, 30);
console.log(maxNumber); // Output: 30

//  👉 7. min(): Returns the smallest of zero or more numbers.
let minNumber = Math.min(10, 20, 5, 30);
console.log(minNumber); // Output: 5

//  👉 8. pow(): Returns the base to the exponent power, that is, base^exponent.
let base = 2;
let exponent = 3;
let result = Math.pow(base, exponent);
console.log(result); // Output: 8 (2^3)

//  👉 9. random(): Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
let randomNumber = Math.random();
console.log(randomNumber); // Output: Random number between 0 and 1

//  👉 10.round(): Returns the value of a number rounded to the nearest integer.
let num = 9.49;
let roundedValue = Math.round(num);
console.log(roundedValue); // Output: 9

//  👉 11. sign(): Returns the sign of a number, indicating whether the number is positive, negative, or zero.
let positiveNum = 5;
let negativeNum = -5;
let zero = 0;
console.log(Math.sign(positiveNum)); // Output: 1 (positive)
console.log(Math.sign(negativeNum)); // Output: -1 (negative)
console.log(Math.sign(zero)); // Output: 0 (zero)


//  👉 12.sqrt(): Returns the square root of a number.
let num = 25;
let squareRoot = Math.sqrt(num);
console.log(squareRoot); // Output: 5

//  👉 13. cbrt(): Returns the cube root of a number.
let num = 8;
let cubeRoot = Math.cbrt(num);
console.log(cubeRoot); // Output: 2

//  👉 14. trunc(): Returns the integer part of a number by removing any fractional digits.
let num = 9.99;
let truncatedValue = Math.trunc(num);
console.log(truncatedValue); // Output: 9

```

### 17. JavaScript Math Object Part 2

#### 👉 Math Trignometric Methods

| Method | Description |
| ----------------- | ----------- |
| `1. cos()` | It returns the cosine of the given number. |
| `2. sin()` | It returns the sine of the given number. |
| `3. tan()` | It returns the tangent of the given number. |
| `4. cosh()` | It returns the hyperbolic cosine of the given number. |
| `5. sinh()` | It returns the hyperbolic sine of the given number. |
| `6. tanh()` | It returns the hyperbolic tangent of the given number. |
| `7. acos()` | It returns the arccosine of the given number. |
| `8. asin()` | It returns the arcosine of the given number. |
| `9. atan()` | It returns the arc-tangent of the given number in radians. |


`Example: `
```javascript
// 👉 1. cos(): Returns the cosine of a number (specified in radians).
let angleInRadians = Math.PI / 3; // 60 degrees in radians
let cosineValue = Math.cos(angleInRadians);
console.log(cosineValue); // Output: Approximately 0.5

// 👉 2. sin(): Returns the sine of a number (specified in radians).
let angleInRadians = Math.PI / 6; // 30 degrees in radians
let sineValue = Math.sin(angleInRadians);
console.log(sineValue); // Output: Approximately 0.5

// 👉 3. tan(): Returns the tangent of a number (specified in radians).
let angleInRadians = Math.PI / 4; // 45 degrees in radians
let tangentValue = Math.tan(angleInRadians);
console.log(tangentValue); // Output: Approximately 1

// 👉 4. cosh(): Returns the hyperbolic cosine of a number.
let number = 2;
let hyperbolicCosineValue = Math.cosh(number);
console.log(hyperbolicCosineValue); // Output: Approximately 3.762

// 👉 5. sinh(): Returns the hyperbolic sine of a number.
let number = 2;
let hyperbolicSineValue = Math.sinh(number);
console.log(hyperbolicSineValue); // Output: Approximately 3.627

// 👉 6.tanh(): Returns the hyperbolic tangent of a number.
let number = 2;
let hyperbolicTangentValue = Math.tanh(number);
console.log(hyperbolicTangentValue); // Output: Approximately 0.964

// 👉 7.acos(): Returns the arccosine (inverse cosine) of a number, in radians.
let value = 0.5; // Cosine value
let arccosineValue = Math.acos(value);
console.log(arccosineValue); // Output: Approximately 1.047 (in radians)

// 👉 8.asin(): Returns the arcsine (inverse sine) of a number, in radians.
let value = 0.5; // Sine value
let arcsineValue = Math.asin(value);
console.log(arcsineValue); // Output: Approximately 0.524 (in radians)

// 👉 9. atan(): Returns the arctangent (inverse tangent) of a number, in radians.
let value = 1; // Tangent value
let arctangentValue = Math.atan(value);
console.log(arctangentValue); // Output: Approximately 0.785 (in radians)

```

### 18. JavaScript Numbers and Number Constants

#### 👉 Number Object
- The JavaScript number object enables you to represent a numeric value. It may be integer or floating-point. JavaScript number object follows IEEE standard to represent the floating-point numbers.
- By the help of Number() constructor, you can create number object in JavaScript.

`Syntax: var n = new Number(value)`

#### 👉 Number Example
- var x = 102; //integer value
- var y = 102.7; //floating point value
- var z = 13e4; //exponent value, output: 130000
- var n = new Number(16); //integer value by number object

#### 👉 Number constants in javascript
- **MIN_VALUE** : returns the largest minimum value.

`Example: `
```javascript
function multiply(x,y){
  if(x * y < Number.MIN_VALUE){
    return 'Process as -Infinity'
  }
  return (x * y)
}

console.log(multiply(5e-324,1));
// expected output: 5e-324
console.log(multiply(-1.7976931348623157e+308,2))
// expected output: Process as -Infinity

// 👉 Another exmaple
console.log(Number.MIN_VALUE);

```
#### 👉 Number constants in javascript
- **MAX_VALUE** : returns the largest maximum value.

`Example: `
```javascript
function multiply(x,y){
  if(x * y < Number.MAX_VALUE){
    return 'Process as -Infinity'
  }
  return (x * y)
}

console.log(multiply(1.7976931348623157e+308,1));
// expected output: 1.7976931348623157e+308
console.log(multiply(1.7976931348623157e+308,2))
// expected output: Process as Infinity

// 👉 Another exmaple
console.log(Number.MAX_VALUE);

```

### 19. JavaScript Number Methods

| Method | Description |
| ----------------- | ----------- |
| `1. isFinit()` | It determines whether the given value is a finite number. |
| `2. isInteger()` | It determines whether the given value is an integer. |
| `3. parseFloat()` | It converts the given string into a floating point number. |
| `4. parseInt()` | It converts the given string into an integer number. |
| `5. toExponential()` | It returns the string that represents exponential notation of the given number. |
| `6. toFixed()` | It returns the string that represents a number with exact digits after a decimal point. |
| `7. toPrecision()` | It returns the string  represents a number of specified precision.  |
| `8. toString()` | It return the given number in the form of string.  |


`Example: `
```javascript
// 👉 1. isFinite: Checks if a value is a finite number.
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false

// 👉 2. isInteger: Checks if a value is an integer.
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.1)); // false

// 👉 3. parseFloat: Parses a string argument and returns a floating point number.
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("314e-2")); // 3.14
console.log(parseFloat("3.14text")); // 3.14
console.log(parseFloat("text3.14")); // NaN

// 👉 4. parseInt: Parses a string argument and returns an integer.
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42
console.log(parseInt("3.14")); // 3
console.log(parseInt("px3.14")); // NaN

// 👉 5. toExponential: Returns a string representing the number in exponential notation.
console.log((123456).toExponential()); // 1.23456e+5
console.log((123456).toExponential(2)); // 1.23e+5

// 👉 6. toFixed: Formats a number using fixed-point notation.
console.log((3.14159).toFixed()); // "3"
console.log((3.14159).toFixed(2)); // "3.14"

// 👉 7. toPrecision: Formats a number to a specified precision.
console.log((1234.56789).toPrecision(4)); // "1235"
console.log((1234.56789).toPrecision(6)); // "1234.57"

// 👉 8. toString: Converts a number to a string.
console.log((42).toString()); // "42"
console.log((3.14).toString()); // "3.14"


```

## 🎏 Browser Object Model

### 1. JavaScript Window - The Browser Object Model
- The Browser Object Model(BOM) is used to interact with the browser.
- The default object of browser is window means you can all the functions of window by specifying window or directly.

  `For example:
    window.alert("Hello JavaScript!");`

  `Above is same as: alert("hello JavaScript!");`

### 2. JavaScript Dom - Window Object
- The window object represents a window in browser. An Object of window is created automatically by the browser.
- Window is the object of browser, it is not the object of javascript. The javascript objects are string,array,date etc.
- There are several Window Methods Available in through Window Object

#### 👉 Methods of Window Object

| Method | Description |
| ----------------- | ----------- |
| `1. alert()` | displays the alert box containing message with ok button. |
| `2. confirm()` | displays the confirm dialog box containing message with ok and cancel button. |
| `3. prompt()` | displays a dialog box to get input from the user. |
| `4. open()` | opens the new window. |
| `5. close()` | closes the current window. |
| `6. setTimeout()` | performs action after specified time like calling function,evaluating expressions etc. |

  `Example: `
```javascript
// 👉 1 Alert Method:
// Display an alert dialog box
window.alert("Hello! This is an alert message.");

// 👉 2:Confirm Method:
 // Display a confirmation dialog box
var result = window.confirm("Are you sure you want to proceed?");
if (result) {
    // User clicked 'OK'
    console.log("User confirmed.");
} else {
    // User clicked 'Cancel'
    console.log("User cancelled.");
}

// 👉 3:Prompt Method:
// Display a dialog box with a message and an input field
var userInput = window.prompt("Please enter your name:");
if (userInput !== null) {
    console.log("User entered: " + userInput);
} else {
    console.log("User cancelled.");
}

// 👉 4. Open Method:
// Open a new browser window
var newWindow = window.open("https://example.com", "_blank", "width=600,height=400");

// 👉 5. Close Method:
// Close the current browser window
window.close();

// 👉 6. setTimeout Method:
// Execute a function after a specified delay (in milliseconds)
function sayHello() {
    console.log("Hello!");
}
setTimeout(sayHello, 2000); // Display "Hello!" after 2 seconds


```

### 3. JavaScript Dom - History Object
- The JavaScript history object represents an array of URLs visited by the user. By using this object,you can load previous, forward or any particular page.

  `Syntax: window.history or history`

#### 👉 Property
- There is only one Property in History Object
`history.length;`

- The length property returns the number of URLs in the history list of the current browser window.
- The property returns at least 1, because the list includes the currently loaded page.

`Example: var x = history.length;`

#### 👉 History back() Method
- The back() method loads the previous URL in the history list. This is the same as clicking the "Back button" in your browser.

`Example: `
```javascript
<script>
  <button onclick="goBack()">Go Back</button>
  function goBack(){
    window.history.back();
  }
```
#### 👉 History forward() Method
- Clicking the "Go Forward" button will take you to the next page in the browsing history, just like clicking the browser's forward button.

  `Example: `
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>History Navigation</title>
</head>
<body>

<button onclick="goBack()">Go Back</button>
<button onclick="goForward()">Go Forward</button>

<script>
function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}
</script>

</body>
</html>

```

#### 👉 History go() Method
- The go() method loads a specific URL from the history list.

  `Example: `
```javascript
 <button onclick="goBack()"> Go Back 2 Pages </button>

 <script>
  function goBack(){
    window.history.go(-2)
    {/* window.history.go(2) */}
  }
  </script>
```

### 4. JavaScript Dom - Navigator Object
- The JavaScript navigator object is used for browser detection.It can be used to get browser information such as appName,appCodeName,userAgent etc.

`Syntax: window.navigator or navigator`

#### 👉 Navigator Object Property

| Property | Description |
| ----------------- | ----------- |
| `1. appName` | returns the name. |
| `2. appVersion` | returns the version. |
| `3. appCodeName` | returns the code name. |
| `4. cookieEnabled` | returns true if cookie is enabled otherwise false. |
| `5. userAgent` | returns the user agent. |
| `6. language. ` | returns the language. It is supported in  Netscape and Firefox only. |
| `7. userLanguage ` | returns the user language. It is supported in IE only. |
| `8. plugins ` | returns the plugins. it is supported in Netscape and Firefox only. |
| `9. systemLanguage ` | returns the system language. It is supported in IE only. |
| `10. mimeTypes[] ` | returns the array of mime type. It is supported in Netscape Firfox only. |

  `Exameple: `
```javascript
  // 👉1.  appName:
  // Get the name of the browser
var browserName = window.navigator.appName;
console.log("Browser Name: " + browserName);

  // 👉2. appVersion:
// Get the version information of the browser
var browserVersion = window.navigator.appVersion;
console.log("Browser Version: " + browserVersion);

  // 👉3.appCodeName:
// Get the code name of the browser
var browserCodeName = window.navigator.appCodeName;
console.log("Browser Code Name: " + browserCodeName);

  // 👉4. cookieEnabled:
// Check if cookies are enabled in the browser
var areCookiesEnabled = window.navigator.cookieEnabled;
console.log("Cookies Enabled: " + areCookiesEnabled);

  // 👉5. userAgent:
// Get the user agent string of the browser
var userAgentString = window.navigator.userAgent;
console.log("User Agent: " + userAgentString);

  // 👉6. language:
// Get the preferred language of the user
var preferredLanguage = window.navigator.language;
console.log("Preferred Language: " + preferredLanguage);

  // 👉7. userLanguage:
// Get the language of the user interface
var userInterfaceLanguage = window.navigator.userLanguage;
console.log("User Interface Language: " + userInterfaceLanguage);

  // 👉8. plugins:
// Get information about installed plugins
var installedPlugins = window.navigator.plugins;
console.log("Installed Plugins: ", installedPlugins);


  // 👉9. systemLanguage:
// Get the system's language
var systemLanguage = window.navigator.systemLanguage;
console.log("System Language: " + systemLanguage);

  // 👉10. mimeTypes:
// Get information about supported MIME types
var supportedMimeTypes = window.navigator.mimeTypes;
console.log("Supported MIME Types: ", supportedMimeTypes);

// 👉 another properties:

 document.writeln("<br/> platform: " + navigator.platform);
     document.writeln("<br/> online: " + navigator.online);

    //  👉 Navigator method
    document.writeln("<br/> Check if JAVA is enabled: " + navigator.javaEnabled());
    document.writeln("<br/> Check if taint is enabled: " + navigator.taintEnabled()); //navigator.taintEnabled is not a function (remove)


```

### 5. JavaScript Dom - Screen Object
- The JavaScript screen object holds information of browser screen. It can be used to display screen width,height,colorDepth,pixelDepth etc.

  `Syntax: window.screen or screen`


#### 👉 Screen Object Property

  | Property | Description |
| ----------------- | ----------- |
| `1. width` | returns the width of the screen. |
| `2. height` | returns the height of the screen. |
| `3. availWidth` | returns the available width. |
| `4. availHeight` | returns the available height. |
| `5. colorDepth` | returns the color depth. |
| `6. pixelDepth` | returns the pixel depth. |

  `Example: `
```javascript
 //   👉 Screen Object Properties
         document.writeln("<br/> Screen width: " + screen.width)
         document.writeln("<br/> Screen height: " + screen.height)
         document.writeln("<br/> Screen Available width: " + screen.availWidth)
         document.writeln("<br/> Screen Available height: " + screen.availHeight)
         document.writeln("<br/> Screen Color Depth: " + screen.colorDepth)
         document.writeln("<br/> Screen Pixel Depth: " + screen.pixelDepth)
```