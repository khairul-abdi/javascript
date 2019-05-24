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

// ===================================
//-----------Data Types------------
/*
1. Primitives :
    String, Number, Boolean, Null, Undefined, Symbol
2. Object
*/

const socialMedia1 = {
  instagram: "@budi_ig1",
  facebook: "@budi_fb1"
};

console.log(socialMedia1.instagram, typeof socialMedia1);
console.log(socialMedia1.facebook, typeof socialMedia1);

const hobbies1 = ["music", "dancing", "sleeping"];
console.log(hobbies1[0], typeof hobbies1);
console.log(hobbies1[1], typeof hobbies1);
console.log(hobbies1[2], typeof hobbies1);

//Tambahan (Memperdalam API JSON) seperti dibawah

let socialMedia = {
  instagram: "@budi_ig",
  facebook: "@budi_fb",
  hobbies: [
    {
      music: "",
      dancing: "",
      sleeping: "",
      gamer: {
        mobile: "AOV",
        PC: "Call Of Duty"
      }
    }
  ]
};

console.log(socialMedia.instagram, typeof socialMedia);
console.log(socialMedia.facebook, typeof socialMedia);
console.log(socialMedia.hobbies[0].gamer.mobile);
// console.log(socialMedia.hobbies[3].PC);
console.log(socialMedia.hobbies[0].gamer.PC);

// ================= Scope & Hoisting================

//Hoisting -> mengangkat
//hanya var yang bisa hoisting
a = 1;
var a;
console.log(a);

/* let & const tidak bisa sebagai hoisting
b = 3;
let b;
console.log(b);

// c = 3;
// const c;
// console.log(c);
*/

//Scope
let d = 2; //global scope
const z = 111;
{
  let e = 3; //local scope
  var f = 2333;
  console.log(d);
  console.log(z);
  const y = 111;
  console.log(x);
}

// console.log(e);
console.log(f);

// console.log(y);

{
  console.log(d);
  // console.log(e);
  console.log(f);
  var x = 23;
}

/*
--------Kesimpulan-----------
hati-hati menggunakan var karna dia hoisting(mengangkat) dapat dipanggil
di scope mana saja dan sebaiknya menggunakan let dan const
*/
