//  var _ = require( 'lodash');

// custom function for deep cloning function that mostly works
// it needs to handle arrays as well
// const clonedeep = source => {
//   const result = {};

//   // [[a, b], [a, b]]
//   const entries = Object.entries(source);

//   entries.forEach(entry => {
//     // entry: [a, b]
//     const [a, b] = entry;
//     // console.log([a,b])

//     if (typeof b === 'object') {
//       // clone the object's properties
//       result[a] = clonedeep(b);
//     } else {
//       result[a] = b;
//     }
//   });

//   return result;
// };

const source = {
  one: 1,
  nest: {
    two: 2,
    three: 3
  },
  four: [4, 'four'],
  log: function() {}
};


// deep clone - works, but needs to handle arrays
// const customClone = clonedeep(source);

// console.log('customClone', customClone);


// deep clone - the best option out there: use the existing work behind lodash
// const lodashClone = _.cloneDeep(source);
// console.log(lodashClone)


const jsonClone = JSON.parse(JSON.stringify(source));
console.log(jsonClone)



