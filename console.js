// const readline = require('readline-sync');

// readline.question('What do you think of Node.js? ')
// console.log(this)

// function trailer(){
//     console.log(this)
// }

// trailer();

var func = () => {
    console.log(this)
}
func();


// var vehicle = {
//   type: 'sedan',
//   logInfo: function() {
//     var self = this;
//     console.log('1. this.type', self.type);
//     console.log('1. THIS.type', self.type);
 
//     (function() {
//       console.log('2. this.type', self.type);
//       console.log('2. THIS.type', self.type);
//     })();
//   }
// }
 
// vehicle.logInfo()




// var vehicle = {
//     type: 'sedan',
//     logInfo: function() {
//       var THIS = this;
//       console.log('1. this.type', this.type);
//       console.log('1. THIS.type', THIS.type);
   
//       (function() {
//         console.log('2. this.type', this.type);
//         console.log('2. THIS.type', THIS.type);
//         // var take = this;
//     (function(){
        

//         console.log("3. this.hfhy",THIS.type);
//     })();
//       })();
//     }
//   }
   
//   vehicle.logInfo()