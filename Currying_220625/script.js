// PROMISE CREATE AND CALLING

// const assignment = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         // console.log("I am Kohinoor ! My Work is Done !!!");
//         resolve("I am Kohinoor ! My Work is Done !!!");
//     },1000);
// });
// setTimeout(() => {
//     console.log(assignment);
// }, 2000);

// function task(){
//     const docs = assignment;
//     console.log("DATA", docs);
//     console.log("BYE")
// }

// task();

// Example without promise

// const assignment = function(){
//     setTimeout(()=>{
//         console.log("I am Kohinoor ! My Work is Done !!!");
//         return "BY"
//     },1000);
// }

// function task(){
//     const data = assignment();
//     console.log("DATA", data);
// }

// task();

// async await example

// console.log("Class started");

// const projectSubmission = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Project submitted");
//         resolve("Project submission successful");
//     }, 5000);
// });

// console.log("Lunch break");

// async function projectEvaluation() {
//     console.log("Attendance");
//     const projectFile = await projectSubmission;
//     console.log("DATA", projectFile);
//     console.log("Project evaluated");
// };

// projectEvaluation();

// console.log("Class ended");

//PROGRAM ---->   first Class start , Assignment  ---> Project Evaluation -> Marks -> End

// console.log("Class start");

// const projectSubmission = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Project submitted");
//         resolve("Project submission successful");
//     }, 5000);
// });

// async function projectEvalution() {
//     const file = await projectSubmission;
//     console.log("Project received and evaluated", file);
//     console.log("Class end");
// }

// projectEvalution();

// console.log("Outside of async function").await (projectEvalution);


// Working Example in Projects

// async function fetchProductData(){
//     const response = await fetch('https://dummyjson.com/products');
//     console.log(response);
    
// }
// fetchProductData();

// const data = fetch('https://dummyjson.com/products')
//     .then(res => res.json)
//     .then(data => console.log(data));

// console.log("Start");
// async function getProducts(){
//     try{
//         const res = await fetch('https://dummyjson.com/prod')
//         const resData = await res.json();
//         console.log(resData);
//     }
//     catch(error){
//         console.log("Error is "+error);
//     }
// }
// console.log("End");
// getProducts();

////////////////////////////////////////////////////////////////////////////////////

// call() apply() bind()

// function admissionProcess(greet, fees){
//     console.log(greet + this.name + fees);
// }

// const student1 = {name: "Kohinoor"}
// const student2 = {name: "Tiwari"}

// // call

// admissionProcess.call(student1, 'Hello ', ' Fees: 2 lac');

// // apply

// admissionProcess.apply(student2, ['Hello ', ' Fees: 2 lac']);

// // bind

// const student1data = admissionProcess.bind(student1, 'Hello ', ' Fee: 2 lac');
// student1data();

///////////////////////////////////////////////////////////////////////////////////////

// Currying in JS

// //Normal
// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(1,2,3));

// function one(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(one(1)(2)(3));

//Practical Example of Currying

// function burger(bread){
//     return function(patty){
//         return function(cheese){
//             return `Your bread: ${bread}, Your patty; ${patty}, Cheese: ${cheese}`;
//         }
//     }
// }

// console.log(burger('Multigrain')('Paneer')('With cheese'));

// Arrow function way
// const burger = (bread) => (patty) => (cheese) => `Your bread: ${bread}, Your patty; ${patty}, Cheese: ${cheese}`;

// let bread = 'Indian Pav';
// let patty = 'Aalu';
// let cheese = 'Yes';

// console.log(burger(bread)(patty)(cheese));

/////////////////////////////////////////////////////////////////////////////////////////////

// Event Capturing and Event Bubbling

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// grandparent.addEventListener('click', () => {
//     console.log('Grandparent cliced');
// }, true);

// parent.addEventListener('click', () => {
//     console.log('Parent Clicked');
// }, true);

// child.addEventListener('click', () => {
//     console.log("Child clicked");
// }, true);

grandparent.addEventListener('click', () => {
    console.log('Grandparent cliced');
}, false);

parent.addEventListener('click', () => {
    console.log('Parent Clicked');
}, false);

child.addEventListener('click', () => {
    console.log("Child clicked");
}, false);