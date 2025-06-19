// console.log("Started a Day")

// setTimeout(() => {                                   // This is an asynchronous operation
//     console.log("Serve Water");
// }, 5000);
// setTimeout(() => {
//     console.log("Serve Food");
// }, 2000);
// setTimeout(() => {
//     console.log("Serve Dessert");
// }, 3000);
// setTimeout(() => {
//     console.log("Serve Bill");
// }, 1000);

// function serveWater(callback){                       // This is a synchronous operation (callback-based) (function chaining)
//     console.log("Serve Water");
//     setTimeout(callback, 1000);
// }
// function serveFood(callback){
//     console.log("Serve Food");
//     setTimeout(callback, 1000);
// }
// function serveDessert(callback){
//     console.log("Serve Dessert");
//     setTimeout(callback, 1000);
// }
// function serveBill(callback){
//     console.log("Serve Bill");
//     setTimeout(callback, 1000);
// }

// serveWater(() => {                                   // This is called Callback Hell
//     serveFood(() => {
//         serveDessert(() => {
//             serveBill(() => {
//                 console.log("All services completed");
//             });
//         });
//     });
// });

// console.log("End of Day");                   // This will execute before the above code because of the asynchronous nature of JavaScript


// Promise-based approach           //Two methods: Promise chaining and Async/Await

// function serveWater(){
//     return new Promise((resolve) => {
//         console.log("Serve Water");
//         setTimeout(resolve, 1000);
//     })
// }
// function serveFood(){
//     return new Promise((resolve) => {
//         console.log("Serve Food");
//         setTimeout(resolve, 1000);
//     })
// }
// function serveDessert(){        
//     return new Promise((resolve) => {
//         console.log("Serve Dessert");
//         setTimeout(resolve, 1000);
//     })
// }
// function serveBill(){
//     console.log("Serve Bill");
// }

// Using Promise chaining
// console.log("Start of Day");
// serveWater()
//     .then(serveFood)
//     .then(serveDessert)
//     .then(serveBill)
//     .then(() => console.log("All services completed"))
//     .then(() => console.log("End of Day"));

// Async/Await approach
// async function serveDay() {
//     console.log("Start of Day");

//     await serveWater();
//     await serveFood();
//     await serveDessert();
//     serveBill();

//     console.log("All services completed");
//     console.log("End of Day");
// }
// serveDay();

// Microtask and Macrotask Queue Example
// console.log("Program Start");       

// setTimeout(() => {                                    // This is a Macrotask
//     console.log("I am SetTimeout");
// }, 2000);

// fetch("https://dummyjson.com/products").then(() => {                 //This is a Microtask
//     console.log("DATA : FETCH");
// });

// console.log("Program End");                                            //Proram Start -> Program End -> DATA : SOMETHING -> I am SetTimeout

// Microtask runs before Macrotask whatever the time is set for Macrotask


//Call Stack, Event Loop, and Task Queue Example
// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("C");                                              
// });                                                              
// console.log("D");

// CallStack["A"] -> CallStack["D"] -> CallStack["C"] -> CallStack["B"]


// Higher Order Functions Example
// const plus10 = function (data) {
//   return data + 10;
// };

// const calculate = function (data, logic) {
//     let output = [];
//     for (let i = 0; i < data.length; i++) {
//         output.push(logic(data[i]));
//     }
//     return output;
// };

// const data1 = [8, 4, 2, 6, 1];

// console.log(calculate(data1, plus10)); // [18, 14, 12, 16, 11]


//Map Example
// const arr = [1, 2, 3, 4, 5];
// function double(num) {
//     return num * 2;
// }
// const output = arr.map(double);
// console.log(output); // [2, 4, 6, 8, 10]

//Custom Map Implementation
// Array.prototype.calculate = function (logic) {
//     let output = [];
//     for(let i=0; i<this.length; i++){
//         output.push(logic(this[i]));
//     };
//     return output;
// };

// const output = arr.calculate(double);
// console.log(output); // [2, 4, 6, 8, 10]

//Filter Example
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function isOdd(num) {
//     return num % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output); // [1, 3, 5, 7, 9]

//Reduce Example
const arr = [1, 2, 3, 4, 5];
// function sum(acc, curr) {
//     return acc + curr;
// }
// const total = arr.reduce(sum, 0);
// console.log(total); // 15

//Also,
const total = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total); // 15

