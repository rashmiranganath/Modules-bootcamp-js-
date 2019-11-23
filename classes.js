// class Structure {
//   constructor() {
//     this.isStructure = true;
//     this.humanMade = true;
//   }
// }

// // Class inheritance is achieved through the `extends` keyword
// class Building extends Structure {
//   constructor(name, stories, address) {
//     // A super call is necessary to invoke the parent constructor
//     // Even if the parent constructor has no arguments
//     //   This is helpful because the parent constructor could theoretically
//     //   be setting up some important properties
//     super();
//     this.name = name;
//     this.stories = stories;
//     this.address = address;
//     this.guests = [];
//   }

//   info() {
//     console.log(
//       'name:',
//       this.name,
//       '| stories:',
//       this.stories,
//       '| address:',
//       this.address
//     );
//   }

//   get needElevator() {
//     return this.stories > 10;
//   }

//   set guest(value) {
//     this.guests.push(value);
//   }
// }

// class Restaurant extends Building {
//   constructor(name, stories, address, cuisine) {
//     super(name, stories, address);

//     this.cuisine = cuisine;
//   }

//   // In addition to the constructor, methods can be overridden as well
//   // Call the methods implemented in the parent using `super`
//   info() {
//     (super.info());
//     console.log(`We serve ${this.cuisine} cusine`);
//   }
// }

// const kaiju = new Restaurant(
//   'kaiju',
//   12,
//   'SF, CA',
//   'Japanese'
// );

// // console.log('kaiju', kaiju);
// // kaiju Restaurant {
// //   isStructure: true,
// //   humanMade: true,
// //   name: 'kaiju',
// //   stories: 2,
// //   address: 'SF, CA',
// //   guests: [],
// //   cuisine: 'Japanese'
// // }

// var k = (kaiju.guest = "r");
// console.log(kaiju.guests)
// // name: kaiju | stories: 2 | address: SF, CA
// // We serve Japanese cusine


// "======================================================================================="


// // class Person {
// //   constructor(name) {
// //     this.name = name;
// //   }

// //   get nameget() {
// //     return this.name.toUpperCase();
// //   }

// //   set nameget(newName) {
// //     this.name = newName;   // validation could be checked here such as only allowing non numerical values
// //   }

// //   walk() {
// //     console.log(this.name + ' is walking.');
// //   }
// // }
         
// // let bob = new Person('rashmi');
// // // console.log(bob.name('ras'));  // Outputs 'BOB'

// // console.log(bob.nameget);
// // bob.nameget = "bob"
// // console.log(bob.nameget)


"========================================================================================="



// class Building {
//   constructor(name, stories, address) {
//     this.name = name;
//     this.stories = stories;
//     this.address = address;
//     this.guests = [];
//   }

//   info() {
//     console.log(
//       'name:',
//       this.name,
//       '| stories:',
//       this.stories,
//       '| address:',
//       this.address
//     );
//   }

//   // getter methods can do dynamic calculation
//   // they take no arguments
//   get needElevator() {
//     return this.stories > 10;
//   }

//   // setter methods can do dynamic calculation
//   // they take one argument
//   set guest(value) {
//     this.guests.push(value);
//   }
// }

// const empireState = new Building(
//   'Empire State Building',
//   102,
//   'NY, NY'
// );

// // console.log('empireState', empireState);

// empireState.info();

// const salesforceTower = new Building(
//   'Salesforce Tower',
//   61,
//   'SF, CA'
// );

// // console.log(salesforceTower)

// salesforceTower.info();

// console.log(
//   'salesforceTower.needElevator',
//   salesforceTower.needElevator // invoking the `needElevator` getter
// );

// // invoking the `guest` setter, twice
// salesforceTower.guest = 'J. Smith';
// salesforceTower.guest = 'A. Seedy';

// console.log(
//   'salesforceTower.guests',
//   salesforceTower.guests
// );


"========================================================================================================="


// // Building is a constructor function
// // In object-oriented programming terms, this would be an object template
// function Building(name, stories, address) {
//   this.name = name;
//   this.stories = stories;
//   this.address = address;
//   this.info = function() {
//     console.log(
//       'name:',
//       this.name,
//       '| stories:',
//       this.stories,
//       '| address:',
//       this.address
//     );

//   }
//   this.needElevator = function() {
//     return this.stories > 10;
//   }
  
// }



// // empireState is an instance of the building template
// // Notice that the `new` keyword is necessary
// //   It's implicitly creating an owner object around the
// //   this` keyword for the instance of the Building constructor
// const empireState = new Building(
//   'Empire State Building',
//   102,
//   'NY, NY'
// );

// // console.log('empireState', empireState);

// empireState.info();
// console.log(empireState.needElevator());

// // salesforceTower is an instance of the building template
// // const salesforceTower = new Building(
// //   'Salesforce Tower',
// //   61,
// //   'SF, CA'
// // );

// // salesforceTower.info();


"================================================================================"

function Artist(name, talent) {
  this.name = name;
  this.talent = talent;
}

const rashmi = new Artist('rashmi ranganath','xyz');

class Musician extends Artist {
  constructor(name, talent, instrument) {
    super(name, talent);

    this.instrument = instrument;
  }
}

const frank = new Musician(
  'Frank Sinatra',
  'singer',
  'voice'
);

// const rashmi = new Musician('rashmi ranganath','xyz');

Object.prototype.hi = function() {
  console.log('this', this);
}

// What is the output of;

rashmi.hi();
frank.hi();