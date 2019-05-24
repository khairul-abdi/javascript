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
