// interview questions this keyword .js
// aang = {
//     element: 'air',
//     greet: function() {
//       console.log(
//         "Hi! I'm Aang. I can do cool things with",this.element
//       );
  
//       (function () {
//         console.log(
//           'I can make a ball with',
//           this.element
//         );
  
//          // logs 'I can make a ball with undefined'
//         //  The function has to be a method (attached to the owner object)
//         //  in order for `this` to represent the owner object
  
//         console.log('this', this); // logs the global object (Window, in the browser)
//       })();
//     }
//   };
  
//   aang.boast = function () {
//     console.log(
//       'I can make a ball with',
//       this.element
//     );
  
//     // logs 'I can make a ball with air'
//     // this boast function is now a member of the aang object
  
//     console.log('this', this); // logs the `aang` object
//   };
  
//   aang.greet();
//   aang.boast();

 " --------------------------------------------------------------------------------------"

// //  methods in this keyword:


// var coder = {
//   username: 'joe',
//   years: 3,
//   languages: ['JS', 'ruby', 'scala'],
//   company: {
//     name: 'Coder Inc.',
//     location: 'San Francisco'
//   },
//   // functions that are members of objects are called methods
//   logStatus: function() {
//     console.log('working from office');
//   },
//   // methods have access to `this`: a representation of the owner object
//   logProfile: function() {
//     console.log('username:', this.username);
//     console.log('years coding:', this.years);
//     console.log('languages:', this.languages.join(', '));
//     console.log('company name:', this.company.name);
//     console.log('company location:', this.company.location);
//   }
// };

// coder.logStatus();
// coder.logProfile();


"---------------------------------------------------------------------------------------------------------"
// more about this keyword
 // this = Window object
var coder = {
  username: 'joe',
  years: 3,
  logStatus: () => {
    // An arrow function does not create a `this` object
    // this = Window object
    console.log('working from office',this.username);
  },
  logProfile: function() {
    // A function expression creates a `this` object
    // this = owner object
    console.log('username:', this.username);
    console.log('years coding:', this.years);
  }
};

coder.logProfile();
coder.logStatus();