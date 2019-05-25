/*
========Classes==========
  - Base Class
  - Sub Class
*/

// const Profile = {
//   firstname: "",
//   lastName: "",
//   email: ""
// };

class Profile {
  //property
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  //method / function
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  display() {
    return `
    First Name \t : ${this.firstName}
    Last Name \t : ${this.lastName}
    Email  \t : ${this.email}
    `;
  }
  updateEmail(newEmail) {
    this.email = newEmail;
    console.log("Email Update");
    console.log(this.display());
  }
}

const johnProfile = new Profile("Jhon", "dhoe", "jhon@dhoe.com");
johnProfile.firstName = "Jhon";
johnProfile.lastName = "dhoe";
johnProfile.email = "jhon@dhoe.com";

console.log(typeof Profile);
console.log(typeof johnProfile);
console.log(johnProfile);
console.log(johnProfile.display());
johnProfile.updateEmail("my@mail.com");

class profileSecret extends Profile {
  constructor(firstName, lastName, email, password) {
    super(firstName, lastName, email, password);
    this.password = password;
  }
  display() {
    return `
    First Name    : ${this.firstName}
    Last Name     : ${this.lastName}
    Email         : ${this.email}
    Password      : ${this.password}
    `;
  }
  updatePassword(newPassword) {
    this.password = newPassword;
    console.log("Password Updated");
    console.log(this.display());
  }
}
const mario = new profileSecret("mario", "bros", "mario@mail.com", "123");
console.log(mario.display());
mario.updatePassword("312");
