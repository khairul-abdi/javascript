/*
================Spread Operator===============
    - Immutable vs Mutable Data
    - Spread Operator ...
    - Rest Parameter
*/

// Immutable -->tidak bisa di rubah
// Mutable -->bisa dirubah

/*
Case : Copy & Update
Rule : Don`t change original
*/

// Immutable <-- primitive type data
let str = "Hello world";
let newStr = str;
newStr = "Update Hello World";
console.log(newStr);
console.log(str);

let num = 10;
let newNum = num;
newNum = 12;
console.log(newNum);
console.log(num);

// Mutable <-- object
let book = {
  title: "Javascript Advance",
  author: "Jhon Doe"
};

// let newBook = book; //copy reference
let newBook = { ...book }; //kasih tanda spread operator (...) agar bisa immutable
newBook.title = "Update Javascript Advance ";

console.log(newBook);
console.log(book);

const hobbies = ["music", "dancing", "sleeping"];
const newHobbies = [...hobbies];
newHobbies.push("coding");

console.log(newHobbies);
console.log(hobbies);

const sum = (a, b, c) => a + b + c;
const number = [2, 4, 3];
const result = sum(...number);
console.log(result);

const sum2 = (...allNums) => {
  let total = 0;
  allNums.forEach(num => (total = total + num));
  return total;
};

const result2 = sum2(2, 4, 5, 6, 8, 3, 5, 3);
console.log(result2);
