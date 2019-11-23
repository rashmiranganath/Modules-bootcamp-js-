const weapon = 'lightsaber';

// Property shorthand.
// When the property name and the variable name are identical,
// the property name only has to be specified once.
const vader = {
  title: 'darth',
  children: ['Luke', 'Leia'],
  weapon // this is equivalent to weapon: weapon
};

console.log(vader);