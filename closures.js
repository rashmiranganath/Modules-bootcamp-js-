
// let greet = "google"
// function init(num) {
//     // var name = greet; // name is a local variable created by init
//     function displayName(hi) { // displayName() is the inner function, a closure

//         var go = "rash"
//       console.log(greet); // use variable declared in the parent function
//   }
//     displayName(5);
//   }
//   init(9);

  "============================================================================"


// function outer() {
//     // outer scope
//     let username = '';
//     let password = '';
  
//     function innerClosure() {
//       // inner scope
//       username = 'drew';
//       console.log('username', username);
//     }
//     innerClosure()

// }
// outer();

"============================================================"

// function outer() {
//     // outer scope
//     let username = '';
//     let password = '';
  
//     // function innerClosure() {
//     //   // inner scope
//     //   username = 'drew';
//     //   console.log('username', username);
//     // }
  
//     // private closure
//     function setUsername(newUsername) {
//       username = newUsername;
//     }
  
//     // private closure
//     function setPassword(newPassword) {
//       password = newPassword;
//     }
  
//     return {
//       signup: function(user, pass) {
//         setUsername(user);
//         setPassword(pass);
//       },
//       debug: function() {
//         console.log('username', username, 'password', password);
//       },
//       signin: function(user, pass) {
//         return (user === username) && (pass === password);
//       }
//     };
//   }
  
//   const account = outer();
//   account.signup('jerry', 'foo123');
  
//   console.log(account); //  signup: [Function], debug: [Function], signin: [Function] }
  
//   account.debug(); // username jerry password foo123
  
//   const attempt1 = account.signin('jerry', 'foo123'); // true
// //   const attempt2 = account.signin('hackr', 'fo1234'); // false

"================================================================="

function foo(outer_arg) { 
  
    function inner(inner_arg) { 
        return outer_arg + inner_arg; 
    } 
    return inner; 
} 
var get_func_inner = foo(5); 
  
console.log(get_func_inner(4)); 
console.log(get_func_inner(3)); 