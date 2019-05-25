/*
=========== Modules =========
  - import { export } from "module-name";
  - import { export as alias} from "module-name";
  - import * as name from "module-name";
  - import defaultExport from "module-name";
*/

// import { sum, multiply as mp } from "./lib";
import * as lib from "./lib";
import profile from "./profile";

console.log(lib.sum(1, 2, 4));
console.log(lib.multiply(5, 2));
const johnProfile = new profile("john", "doe", "john@doe.com");
console.log(johnProfile.display());
