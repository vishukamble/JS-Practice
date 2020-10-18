// let val;

// val = 'Vishu Kamble';
// val = String(4 + 4);

// val = String(true);

// val = new Date();
// val = String(val);

// val = String([1, 2, 3, 4, 5]);

// // toString()

// val = (5).toString();
// val = true.toString();

// //string to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('Hello');
// val = Number([1, 2, 3]);

// val = parseInt(100.2);
// val = parseFloat(100.31);

// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = 5;
// const val2 = '5';
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 60;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 * num2;
// val = num1 % num2;

// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(25);
// // val = Math.abs(-3);
// // val = Math.pow(4);
// // val = Math.min(-2, 33, 44, 5, 52, 245, 54);
// // val = Math.max(4, 3, 2, 1);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

const firstName = 'Visshu';
const lastName = 'Kamble';
const sent = 'Hello There, my name is Vishu';
let val;

const age = 29;
val = firstName + lastName;

val = 'Hello my name is: ' + firstName + ' and I am ' + age;

val = "That's awesome, I can't wait";

val = firstName.length;
val = firstName.concat(' ', lastName);
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0];

val = firstName.indexOf('s');
val = firstName.indexOf('k');
val = firstName.lastIndexOf('s');
val = firstName.charAt('2');
val = firstName.charAt(firstName.length - 1);

val = firstName.substring(0, 3);

val = firstName.slice(0, 4);
val = firstName.slice(-5);

val = sent.split(' ');
val = sent.replace('Vishu', 'Visshu');

val = sent.includes('Vishu');

val = console.log(val);
