// // function formalGreeting() {
// //     console.log("How are you?");
// //   }
// //   function casualGreeting() {
// //     console.log("What's up?");
// //   }
// //   function greet(type, greetFormal, greetCasual) {
// //     if(type === 'formal') {
// //       greetFormal();
// //     } else if(type === 'casual') {
// //       greetCasual();
// //     }
// //   }
// //   // prints 'What's up?'
// //   greet('formal', formalGreeting, casualGreeting);


// "========================================================================================================="
// const numbers = [1, 2, 3];

// const callback = number => {
//   console.log('number', number);
// };

// // forEach is a higher-order function
// // it takes a callback function as an argument
// numbers.forEach(callback);



function lessThan(y) {
    return function(x) {
      return x < y;
    }
  }


let less =  lessThan(30);
let ge = less(20)
console.log(ge)
console.log(lessThan(209)(78));