// //-------------------- var
// // global scope
// var greeter = 'hey hi';

// function newFunction() {
//   // function scope
//   var hello = 'hello';
// }

// console.log(hello);

// // var variables can be re-declared and updated
// var greeter = 'hey hi';
// var greeter = 'say Hello';

// console.log('greeter', greeter);

// var greeterInVietNamese = 'chào';
// greeterInVietNamese = 'hê lô';
// console.log('greeter', greeterInVietNamese);



// // Hoisting of var
// console.log (greeter);
// var greeter = "say hello"

// // Problem with var

// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//     var greeter = "say Hello instead"; 
// }

// console.log(greeter) // "say Hello instead"



//---------------------------- let, const

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//      let greeting = "say Hello instead";
//      console.log(greeting);// "say Hello instead"
//  }
// console.log(greeting) // hello is not defined

// let can be updated but not re-declared.
// let greeting = "say Hi";
// greeting = "say Hello instead";


// let greeting = "say Hi";
// not allow.
// greeting = "say Hello instead";

// Hoisting of let
console.log (greeter);
let greeter = "say hello"