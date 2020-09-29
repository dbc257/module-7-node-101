"use strict";

let result = 0;

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}

console.log(result);

// sumNumbers = 0;
// for (let index = 2; index < process.argv.length; index++) {
//   const element = process.argv[index];
//   sum = parseInt(element, 10);
//   console.log(element);
//   sumNumbers += sum;
// }
// console.log(sumNumbers);
