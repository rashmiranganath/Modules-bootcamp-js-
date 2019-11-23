var _ = require('lodash');

const source = {
    one: 1,
    nest: {
      two: 2,
      three: 3
    },
    four: [4, 'four'],
    log: function() {}
  };

  


// shallow clone - only copies inner object references
const assignClone = Object.assign({}, source);

// deep clone - the best option out there: use the existing work behind lodash
const lodashClone = _.cloneDeep(source);

source.one = 23;
source.nest.two = 5;
 







console.log(assignClone)
console.log(lodashClone)

