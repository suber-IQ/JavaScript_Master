# JAVASCRIPT MASTER

## 🎏 Introduction to JavaScript

### 🍦 Introduction to JavaScript

- JavaScript (js) is a light-weight object-oriented programming language which is used by several website for scripting webpages.
- It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document.
- It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser.
- JavaScript is an object-based scripting language which is light-weight and cross-platform.
- JavaScript is not a compiled language, but it is a translated language. The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser
- With JavaScript users can build modern web applications to interact directly without reloading the page every time.
- The traditional website uses js to provide several forms of interactivity and simplicity.
- Although,JavaScript has no connectivity with Java programming languages. In addition to web browsers, databases such as CouchDB and MongoDB uses JavaScript as their scripting and query language.

### 🍦 Features of JavaScript

- All popular web browsers support Javascript as they provide built-in execution environments.
- JavaScript follows the syntax and structure of the C programming language. Thus, it is a strutured programming language.
- JavaScript is a weakly typed language, where certain types are implicitly cast(depending the operation).
- JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.
- It is a light-weighted and interpreted language.
- It is a case-sensitive language.
- JavScript is supportable in several operating systems including, Windows,macOS etc.
- It provides good control to the users over the web browsers.
  
#### 🍦 Application of Javascript (JavaScript is used to create interactive websites.)

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
### 🍦 Ways to write and Add Javascript code

1. Between the body tag of html
`<body><script>...</script></body>`
2. Between the head tag of html
`<head><script>...</script></head>`
3. In .js file (external javascript)
`<script src=""></script>`
  
#### 🍦 Advantages of External Javascript

1. It helps in the reusability of code in more than one HTML file.
2. It allows easy code readability.
3. It is time-efficient as web browsers cache the external js files, which further reduces the page loading time.
4. It enables both web designers and coders to work with html and js files parallelly and separately, i.e., without facing any code conflictions.
5. The length of the code reduces as only we need to specify the location of the js file.

#### 🍦 Disadvantages of External Javascript

1. The stealer may download the coder's code using the url of the js file.
2. If two js files are dependent on one another, then a failure in one file may affect the execution of the other dependent file.
3. The web browser needs to make an additional http request to get the js code.
4. A tiny to a large change in the js code may cause unexpected results in all its dependent files.
5. We need to check each file that depends on the commonly created external javascript file.
6. If it is a few lines of code, then better to implement the internal javascript code.
   
### 🍦 What is Comment

- The Javascript comments are meaningful way to deliver message.
- It is used to add information about the code, warnings or suggestions so that end user can easily interpret the code.
- The Javascript comment is ignored by the JavaScript engine i.e embedded in the browser.
  
#### 🍦 Advantages of Comment

- There are mainly two advantages of Javascript comments.
- To make code easy to understand it can be used to elaborate the code so that end user can easily understand the code.
- To avoid the unnecessary code it can also be used to avoid the code being executed, Sometimes, we add the code to perform some action. But after sometime, there may be need to disable the code.In such case, it is better to use comments.

