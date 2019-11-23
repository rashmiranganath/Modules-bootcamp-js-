// const rgb = [255, 200, 0];

// // Array Destructuring
// const [red, green, blue] = rgb;

// console.log(blue,red,black = 120)


"======================================================================================================"

// let red = 100;
// let green = 200;
// let blue = 50;

// const rgb = [50,100,150];

// // Destructuring assignment to red and green
// [blue,red, green] = rgb;

// console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 200, G: 255, B: 50


"==============================================================================================="
// const rgb = [200, 255, 100,45,78];

// // Skip the first two items
// // Assign the only third item to the blue variable
// const [, blue, , , ,grey] = rgb;

// console.log(blue,grey)

"========================================================="


const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];

// Use nested destructuring to assign red, green and blue
const [hex, [red, green],blue] = color;

console.log(hex, red, green,blue); // #FF00FF 255 0 255
