let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNum = Number(score);
console.log(valueInNum) // so basically js converted "33abc" to a number data type n returns NaN -Not a number 
// for Null it converts to number data type n return 0 
// for undefined it converts to num n returns NaN 
// true => 1 and false => o

// in Boolean conversion ""=> false  "dbud"=> true    1=>true 
//   Thats why people use typescript 


//node 01_basics/03conversion_operation.js
