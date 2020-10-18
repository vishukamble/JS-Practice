const nums = [32, 2, 4, 55, 22, 12, 45, 37, 86];
const nums2 = new Array(32, 15, 78, 85, 37);

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
const mixed_arr = [
  'hello',
  3,
  false,
  undefined,
  null,
  { a: 1, b: 2 },
  new Date(),
];

let val;

//check length
val = nums.length;

//check if it is array
val = Array.isArray(nums);

//get single value
val = nums[3];

//insert into array
nums[2] = 100;

//find index of value
val = nums.indexOf(37);

//mutating arrays
//add to array
nums.push(250);

//add to first
nums.unshift(101);

// //pop from the array
// nums.pop();

// //remove from first
// nums.shift();

// //splice array
// nums.splice(1, 3);

// //reverse
// nums.reverse();

//concat two arrays
val = nums.concat(nums2);

//sort
val = fruits.sort();
// val = nums.sort();

// //compare function
// val = nums.sort(function (x, y) {
//   return x - y;
// });

// //reverse sort
// val = nums.sort(function (x, y) {
//   return y - x;
// });

//find
function under50(x) {
  return x < 50;
}

val = nums.find(under50);

console.log(nums);
console.log(val);
