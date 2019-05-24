/*
----------- Variables-----------
- var,let,const
- data types
- scope & hoisting
*/

// var name //declaration
// name = "Abdi"; //assigment

var name = "Abdi"; //re-declare
let city = "Jakarta"; // no-declare, re - assign
const age = 15; //no-declare, no re-assign

var name = "Irfan";
name = "Zulhan";

// let city = "Bandung"; // Error : Duplicate Declaration
city = "Bandung";

// const age = 16; //Error : Duplicate Declaration
// age = 17; //Error : Read-only

console.log(name);
console.log(city);
console.log(age);

/*
-------Kesimpulan--------
Hindari menggunakan var
sebaiknya menggunakan let
dan gunakan conts yang untuk nilai tidak akan berubah
*/
