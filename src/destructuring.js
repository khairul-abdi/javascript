/*
============= Destructuring =============
- object
- array
-function parameter
*/

//=> Object
const user = {
  firstName: "Jhon",
  lastName: "Dhoe",
  country: "Indonesia",
  languange: "Bahasa",
  links: {
    social: {
      twitter: "https://twitter.com/jhondoe",
      twitter: "https://facebook.com/jhondoe"
    },
    web: {
      blog: "https://jhondoe.com"
    }
  }
};

//cara biasa untuk mengambil data dari object
// let firstName = user.firstName;
// let lastName = user.lastName;

// console.log(firstName);
// console.log(lastName);

// console.log(firstName, lastName);

//Cara Destructuring
let { firstName, lastName, languange: lang } = user;
let { twitter, facebook } = user.links.social;
console.log(firstName, lastName, lang, twitter, facebook);

//=> Array
//Cara biasa
let myArray = [1, 2, 3, [4.1, 4.2, 4.3]];
// let a = myArray[0];
// let b = myArray[1];
// let c = myArray[2];

//cara Destructuring
const [a, b, c, [d, e, f]] = myArray;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);
console.log(`f = ${f}`);

//=> function parameter
//cara biasa
// function fullName(obj) {
//   return `${obj.firstName} ${obj.lastName}`;
// }

// console.log(fullName(user));

//cara destructuring
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
console.log(fullName(user));

/* Cara yang lebih advance kita dapat merubah variabelnya 
yang awalnya languange kita rename menjadi lang lihat di 
Line(baris ke 27)
*/
