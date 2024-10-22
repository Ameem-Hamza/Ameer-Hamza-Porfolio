// //////////////////////JavaScript Learning//////////////////////////

////////////////Sweet Alert//////////////////////

// function del() {
//   Swal.fire({
//     title: 'Are you sure you want to delete this record?',
//     icon: 'warning',
//     showCancelButton: true,
//     focusConfirm: false,
//     confirmButtonColor: '#248C46',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes',
//     cancelButtonText: 'No'
//   })
// }

// let arr = [3, 5, 1, 2, 4];

// // for loop
// console.log ("For Loop");
// for (let i = 0; i < arr.length; i++) {
//     console.log (arr[i]);

// }

// // foreach loop
// console.log ("ForEach Loop");
// arr.forEach((Element) => {
//     console.log(Element);
//     // console.log(Element, typeof Element);
// })

// // Array.from
// console.log ("Array.From Loop");
// let name = "Hamza";
// let array = Array.from(name);
// console.log(array);

// //For of Loop
// console.log("For of Loop");
// for (let i of arr) {
//     console.log(i);
// }

// //For in Loop
// console.log("For in Loop");
// for (let item in arr) {
//     console.log(item);
// }

// let num1 = prompt("Enter the first number:");
// num1 = Number(num1);
// num1 = parseInt(num1);
// console.log(typeof num1);
// let num2 = prompt("Enter the second number:");
// let sum = Number(num1) + Number(num2);
// console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

////////////////////Set Time Out//////////////////////////////
////////////////////Set Time Interval//////////////////////////////
let red = document.getElementById("first");
// alert (red);
const sum = () => {
  //   red.className = "yellow";
  red.classList.toggle("yellow");
};

// function sum() {
// red.classList.toggle("yellow");
// }

// setTimeout(sum, 1000);
setInterval(sum, 1000);

///////////////////////////////////////////////
// 51_Callback

// function loadScript(src, Callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         console.log("SRC loaded : " + src);
//         Callback(src);
//     }
//     document.body.appendChild(script);
// }

// function hello(src) {
//     alert("Hello World " + src);
// }

// function good(src) {
//     alert("Morning " + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", hello);

//////////////////////////////////////////////

/////////////////////////////////////////////

// 51_Callback and Error Handling

// function loadScript(src, Callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("SRC loaded : " + src);
//     Callback(null, src);
//   };
//   script.onerror = function () {
//     console.log("Eror loading script with src : " + src);
//     Callback(new Error("SRC got some error"));
//   };
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error);
//   } else {
//     alert("Hello World " + src);
//   }
// }

// function good(error, src) {
//   if (error) {
//     console.log(error);
//     sendEmergencyMessageToCeo();
//   } else {
//     alert("Morning " + src);
//   }
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
//   good
// );

////////////////////////////////////////////

///////////////////////////////////////////

//Promises

// let promise = new Promise(function (resolve, reject) {
//   alert("hello");
//   resolve(1); //as task has done
//   reject(0); //as task has rejected
// })
// console.log("Hello");
// setTimeout(function () {
//   console.log("Hello in 2 seconds: ");
// }, 2000)

// console.log("My Name Is Hamza");
// console.log(promise);

//////////////////////////////////////////

//////////////////////////////////////////

//     .then() and .caught()     //

// let p1 = new Promise(function (resolve, reject) {
//   console.log("Promise is pending : ");
//   setTimeout(() => {
//     // console.log("Iam a promise and I am Resolved");
//     resolve(true); //as task has done
//   }, 5000);
// });

// let p2 = new Promise(function (resolve, reject) {
//   console.log("Promise is pending : ");
//   setTimeout(() => {
//     // console.log("Iam a promise and I am Rejected");
//     reject(new Error("I am an error")); //as task has rejected
//   }, 5000);
// });

// // console.log(p1, p2);

// p1.then((value) => {
//   console.log(value);
// });

// // p2.catch((error) => {
// //   console.log("Some error occured in P2");
// // });

// p2.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

////////////////////////////////////////////////

////////////////////////////////////////////////

// console.log("Promise Chaining");

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolve After 2 Seconds");
//     resolve(true);
//   }, 2000);
// });

// p1.then((value) => {
//   console.log("Value is: " + value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });
//   return p2;
// }).then((value) => {
//   console.log("We are Done! ");
// });

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.scr = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(1);

      script.onerror = () => { PromiseRejectionEvent(0) };
    };
  });
};
let p1 = loadScript("http://localhost:3000/index.js");
p1.then((value) => {
  console.log(value);
})