
// var _ = require('lodash');


// const luke = {
//     surname: 'Skywalker',
//     age: 19,
//     family: {
//       father: 'Anakin Skywalker',
//       mother: {
//         hello : 'hi'
//       },
//       siblings: ['Leia']
//     },
//     quote: function() {
//       console.log(
//         'I think that R2 unit may have been stolen'
//       );
//     }
//   };

//   const lodashClone = _.cloneDeep(luke);
//   const assignClone = Object.assign({}, luke);




//   luke.age = 25;
//   luke.family.father = 'Darth';
//   luke.family.mother = 'hehe'

//   console.log(lodashClone)
//   console.log(assignClone);
"====================================================================================================="



// const owner = { name: 'J.M.' };

// const car = {
//   color: 'blue',
//   doors: 4,
//   features: ['sunroof'],
//   details: {
//     year: 2019,
//     manufacturer: 'Mercedes'
//   },
//   sold: true,
//   owner
// };

// const shallowClone = Object.assign({}, car);
// const carClone = JSON.parse(JSON.stringify(car));

// car.owner.name = 'D.T.';

// console.log(shallowClone);
// console.log(carClone);
"======================================================================================"


// const inner = {
//   zoo: 10,
//   zar: 11
// };

// const source = {
//   name:{foo: 5},
//   bar: 6,
//   tee: inner
// };

// // shallow clone
// const shallowClone = Object.assign({}, source);
// // shallow clone
// const spreadClone = { ...source };

// source.bar  = 10;
// source.name.foo = -1;
// inner.zoo = -88;


// // console.log(shallowClone);

// console.log(Object.is(inner, shallowClone.tee)); // true

"====================================================================================================="


// const source = {
//   frank: 92,
//   elise: 95,
//   angie: 96,
//   timmy: 79,
//   joyce : 97,
//   rashmi :100,
//   komal  :100,
//   rahul : 80,


// };

// const target = {
//   timmy: 89,
//   joyce: 87,
//   rashmi : 10,
//   rahul :0,
//   komal : 0


// };

// const source2 = {
//   jacob: 91,
//   timmy: 99,
//   rashmi:50,
//   komal:0

// };

// // timmy in source2 will win. It's the right most argument
// const combined = Object.assign(target, source, source2);

// console.log('combined', combined);

"======================================================================================================="

const weapon = 'lightsaber';

// Property shorthand.
// When the property name and the variable name are identical,
// the property name only has to be specified once.
// const vader = {
//   title: 'darth',
//   children: ['Luke', 'Leia'],
//   weapon // this is equivalent to weapon: weapon
// };

// console.log(vader);

"==================================================================================================="
const wizard = {
  name: 'Harry',
  age: 17,
  info: {
    hobby: 'Quidditch',
    spells: ['Expelliarmus']
  }
};
const {
  name,
  age,
  house='Gryffindor',
  info: { hobby }, // nested object destructuring
  info // the nested destructuring above doesn't destructure the base property name. You have to destructure this separately.
} = wizard;

console.log(name, age, house, hobby, info);
