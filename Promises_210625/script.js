// Working with Objects – map(), filter(), and reduce()
// const users =[
//     {fname: 'Kohinoor', lname: 'Tiwari', age: 19},
//     {fname: 'Karan', lname: 'Singh', age: 21},
//     {fname: 'Suraj', lname: 'Jaiswal', age: 20},
//     {fname: 'Abhishek', lname: 'Sharma', age: 19},
//     {fname: 'Pratiyush', lname: 'Ray', age: 25}
// ]
// console.log(users);
//Map
// const names = users.map(user => user.fname + ' ' + user.lname);
// console.log(names); // Output: ['Kohinoor Tiwari', 'Karan Singh', 'Suraj Jaiswal', 'Abhishek Sharma', 'Pratiyush Ray']

//Reduce
// const totalAge = users.reduce(function(a,b){
//     return a + b.age;
// }, 0);
// const averageAge = totalAge / users.length;
// console.log(averageAge); // Output: 20.8

//Filter
// const adults = users
//     .filter(user => user.age >= 21)
//     .map(user => user.fname + ' ' + user.lname);
// console.log(adults); // Output: ['Karan Singh', 'Pratiyush Ray']
/*
const output2 = users.reduce(function(acc,curr){
    acc = acc+curr.age
    return acc
},0)

console.log(output2);

const outputFilter = users.filter (user => user.age <20).map((namee)=> namee.lastName);

console.log(outputFilter);

const finalResult = outputFilter.map((namee)=> namee.firstName);

console.log(finalResult);
*/
//////////////////////////////////////////////////////////////////////////////////////////

//Promises and Callback Chaining
//E-Commerce Example

// const cart = ["shoes", "shirt", "jeans", "watch", "glasses"];

//Callback Hell style
// createOrder(cart, function(orderId) {
//     proceedToPayment(orderId, function(paymentStatus) {
//         showOrderSummary(paymentStatus, function() {
//             updateWallet();
//         })
//     })
// })
//Hard to maintain and read so next is promise style (.then() and .catch())

//Promises style

// const cart = ["shoes", "shirt", "jeans", "watch", "glasses"];
// createOrder(cart)
//     .then(function(orderId){
//         return proceedToPayment(orderId);
//     })
//     .then(function(paymentStatus){
//         return showPaymentSummary(paymentStatus);
//     })
//     .then(function(updateWallet){
//         return updateWallet(paymentStatus);
//     })
//     .catch(function(err){
//         console.error('Error Occurred:', err);
//     });

// function createOrder(cart) {
//     return new Promise(function(resolve, reject) {
//         let orderId = '12345';
//         console.log("Order created with ID:", orderId);
//         console.log("Cart items:", cart);
//         //resolve(orderId);
//         reject(orderId);
//     });
//     // let orderId = "12345";
//     // console.log("Order created with ID:", orderId);
//     // console.log("Cart items:", cart);
//     // return orderId;
// }

// const promise = createOrder(cart);

// console.log(promise);

// promise.then(function(orderId) {
//     console.log(".then Order ID:", orderId);
// }).catch(function(err) {
//     console.error("Error creating order:", err);
// });

// const myPromise = new Promise(function(resolve, reject) {
//     resolve("Promise resolved successfully!");
//     setTimeout(() => {
//         reject("Promise resolved after 2 seconds!");
//     }, 2000);
// });

// console.log(myPromise);

// const isOrderCreated = true;
// const myPromise2 = new Promise(function(resolve, reject) {
//     if(isOrderCreated){
//         resolve("Promise2 resolved successfully!");
//     }else{
//         reject("Promise rejected!");
//     }
//     // setTimeout(() => {
//     //     reject("Promise rejected after 2 seconds!");
//     // }, 2000);
// });
// console.log(myPromise2);

// myPromise2.then(function() {
//     console.log("THEN Activated");
// }).then(function() {
//     console.log("THEN Activated again 1");
// }).then(function() {
//     console.log("THEN Activated again 2");
// }).then(function() {
//     console.log("THEN Activated again 3");
// }).then(function() {
//     console.log("THEN Activated again 4");
// }).catch(function(err) {
//     console.log("CATCH Activated:", err);
// });

////////////////////////////////////////////////////////////////////////////////////////

// Promise APIs

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 rejected");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 rejected");
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Promise 3 resolved");
        reject("Promise 3 rejected");
    }, 500);
});

// Promise.all
// Promise.all([p1, p2, p3])
//     .then((results) => {
//         console.log("All promises resolved:", results);
//     })
//     .catch((error) => {
//         console.error("One or more promises failed:", error);
//     });

// Promise.allSettled
// Promise.allSettled([p1, p2, p3])
//     .then((results) => {
//         console.log("All promises settled:", results);
//     })
//     .catch((error) => {
//         console.error("Error in allSettled:", error);
//     });

// Promise.race
// Promise.race([p1, p2, p3])
//     .then((results) => {
//         console.log("All promises settled:", results);
//     })
//     .catch((error) => {
//         console.error("Error in allSettled:", error);
//     });

// Promise.any
// Promise.any([p1, p2, p3])
//     .then((result) => {
//         console.log("First resolved promise:", result);
//     })
//     .catch((error) => {
//         console.error("All promises failed:", error);
//     });
