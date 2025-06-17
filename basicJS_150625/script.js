//TDZ : Temporal Dead Zone (variable cannot be accessed before declaration)

// var name = 'Kohinoor';
// console.log('Hello, ' + name + '!');

// if(true){
//     var x = 10;
// }
// console.log(x); // This will log 10 because 'var' is function-scoped or globally scoped, not block-scoped.

// if(true){
//     let y = 20;
// }
// console.log(y); // This will throw a ReferenceError because 'let' is block-scoped and 'y' is not defined outside the block.

// const z = 30;
// console.log(z); // This will log 30 because 'const' is block-scoped but 'z' is defined in the global scope.
// z = 40; // This will throw a TypeError because 'const' variables cannot be reassigned.

// console.log(a)
// var a = 10; // This will log 'undefined' because 'var' is hoisted to the top of its scope, but not initialized.
// console.log(a);

// console.log(b);
// let b = 20; // This will throw a ReferenceError because 'let' is not hoisted in the same way as 'var'.

// sayHi();
// function sayHi(){
//     console.log('Hi, from script.js');
// }

// greet(); // This will throw a TypeError because 'greet' is not defined yet due to hoisting.
// var greet = function() {
//     console.log('Hello, from script.js');
// }
// greet(); // This will run.

// Named Function Example
// const greet = function sayHi() {
//     console.log('Hi!');
// }
// greet(); // This will run.
// sayHi(); // This will give error.

// Arrow Function Example
// const greet = () => {
//     console.log('Hello, from script.js');
// };
// greet();


// function a(){
//     let x = 10;
//     function b(){
//         let y = 20;
//         console.log(x + y); // This will print 30 because x is accessible in this inner function.
//     }
//     b();
// }
// a();


// Closure Example
// function add(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     return increment;
// }
// const counter = add();
// counter(); // print 1
// counter(); // print 2
// counter(); // print 3


// SetTimeOut and SetInterval Example

// const interval = setInterval(() => {
//     console.log('Ticking...');
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval);
//     console.log('Stopped');
// }, 5000);


// Callback Example
// function greet(name, callback){
//     console.log("Hi, "+ name + "!");
//     callback();
// }
// function Bye(){
//     console.log("Goodbye!");
// }
// greet("Kohinoor", Bye);

// Event Listener Example
document.getElementById('greetBtn').addEventListener('click', function() {
    alert('Hello, from scipt.js');
});

// function handle() {
//     alert('Hello, from script.js');
// }
// document.getElementById('greetBtn').addEventListener('click', handle);

// const btn = document.getElementById('greetBtn');
// btn.addEventListener("mouseenter", () => console.log('Mouse detected!'));
// btn.addEventListener("mouseleave", () => console.log('Mouse left!'));

//For Loop Example
// for(let i=0; i<5; i++){
//     console.log(i);
// }

// for(var i=0; i<5; i++){
//     function logIndex(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000 * i);
//     }
//     logIndex(i);
// }                                    // 0 1 2 3 4

// for(var i=0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }                                    // 5 5 5 5 5

// for(let i=0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }                                    // 0 1 2 3 4