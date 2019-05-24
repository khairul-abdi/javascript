/*
======== function ==============
- Function Declaration vs Function Expression
- Arrow Functions
- IIFE (Immediatly Invoked Function Expression)
- Default Parameter
*/

//=> Function Declaration
function hello(name) {
  console.log("Hello " + name);
  // console.log(name);
}
hello("Mario"); //dapat dibuat diatas declarasi kalau menggunakan function declaration

function multiply(a, b) {
  return a * b;
}

let result = multiply(3, 2);
console.log(result);

//=> Function Expression
const hello2 = function(name) {
  console.log("hello " + name);
};
hello2("bross"); //tidak dapat dibuat diatas declarasi

const multiply2 = function(a, b) {
  return a * b;
};

let result2 = multiply2(4, 3);
console.log(result2);
console.log(multiply2(10, 3));

/*  Kesimpulan
Mana yang terbaik itu tergantung kepada kita nyaman di mana apakah
Function Declaration atau Function Expression */

//=> Arrow Function
const hello3 = name => {
  console.log("hello " + name);
};
hello3("jhon");

const multiply3 = (a, b) => {
  return a * b;
};

console.log(multiply3(5, 4));

//Bisa disederhanakan menjadi
const multiply4 = (a, b = 1) => a * b;
console.log(multiply4(5));

/* default parameter seperti yang di atas yaitu b=1 fungsinya untuk
membuat nilai default seandainya nilai b kosong maka akan di gantikan oleh
si angka 1 */

//=> IIFE (Immediatly Invoked Function Expression)-->autorun(otomatis jalan)
(function() {
  console.log("auto execute");
})();
