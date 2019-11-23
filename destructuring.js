// Initialize local variables
// const planets = [
//     'mercury', 
//     'venus', 
//     'earth', 
//     ['mars', 'phobos', 'deimos']
//   ];
  
  // Array destructuring
//   const [one, two, three] = planets;

//   console.log(planets)

// const student = {
//     firstname: 'Glad',
//     lastname: 'Chinda',
//     country: 'Nigeria'
// };

// // Reassign firstname and lastname using destructuring
// // Enclose in a pair of parentheses, since this is an assignment expression
// console.log({ firstname, lastname,country } = student );

// // country remains unchanged (Canada)
// // console.log(firstname, lastname, country); // Glad Chinda Canada
"=========================================================================================="

// // default destructors
// const person = {
//     name: 'John Doe',
//     country: 'Canada'
// };

// // Assign default value of 25 to age if undefined
// const { name, country, age = 3 } = person;

// // Here I am using ES6 template literals
// console.log(name,country,age);

"========================================================"
// assigning to other variable names

// const person = {
//     name: 'John Doe',
//     country: 'Canada'
// };

// // Assign default value of 25 to years if age key is undefined
// const { name: fullname, country: place, age= 25 } = person;

// console.log(fullname , place , age)


"=================================================================================================="


// // nested  destructuring

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// // We define 3 local variables: name, maths, science
// const { name, scores: {maths, science = 50} } = student;

// console.log(name,science)


