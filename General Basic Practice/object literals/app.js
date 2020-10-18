let val;

const today = new Date();
val = today;
console.log(val);
console.log(typeof val);

val = today.toString();
console.log(typeof val);

let birthDay = new Date('7-14-1991');
val = birthDay;
console.log(val);

birthDay = new Date('July 14 1991');
console.log(birthDay);

birthDay = new Date('7/14/1991');
console.log(birthDay);

console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getFullYear());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getTime());


