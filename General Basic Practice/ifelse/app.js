const id = 100;

// if (id == 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// if (id != 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// const val = '100';

// if (val === '100') {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// if (val !== '100') {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// if (typeof id !== 'undefined') {
//   console.log(`The id is ${id}`);
// } else {
//   console.log('No Id');
// }

//greater less than
// if (id >= 200) {
//   console.log('id greater than 200');
// } else {
//   console.log('Incorrect');
// }

// const color = 'Yellow';

// if (color === 'red') {
//   console.log(' color is red');
// } else if (color === 'Yellow') {
//   console.log('color is yellow');
// } else {
//   console.log('Color is blue');
// }

//logical operations
const name = 'Vishu';
const age = 19;

if (age > 18) {
  console.log(`${name} is an adult`);
} else if (age > 13 && age < 18) {
  console.log(`${name} is a Teenager`);
} else {
  console.log(`${name} is an baby`);
}

if (age < 16 || age > 65) {
  console.log(`${name} cannot be in roller coaster`);
} else {
  console.log(`${name} can go to roller coaster`);
}

console.log(id === 100 ? 'Correct' : 'Incorrect');

if (id === 100)
  console.log("Without braces correct")
else
  console.log('Without braces incorrect')