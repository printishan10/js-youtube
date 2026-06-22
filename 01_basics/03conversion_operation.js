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




// *********************OPERATIONS**************************//
//console.log(2+2)
//console.log(2**2)   -means 2^2


//console.log(1 + "2")   -12     If one value is a string, JavaScript converts the other value to a string and joins them.
//console.log("1" + "2") -12
//console.log("1" + 2 + 3)  -123  JavaScript evaluates + from left to right. so str + no is str then str + no is str so ans is str 
//console.log(1 + 2 + "3")  -33  no + no is no then no plus str is str so ans is str 



// THESE ARE THE RULES OF CONVERSION DURING ARITHMETIC 
// String + Anything → String   true + "1" = true1   (string has highest priority during +)

// true  → 1     ex - true + 2 = 3  
// false → 0      flase + 2 = 2 

// null → 0       null + 5 = 5

// undefined → NaN    undefined + 5 = NaN

// Numeric String + with - * / → Number  "5" - 2 = 3    (Numeric Strings convert to Numbers (for -, *, /))

// Non-Numeric String → NaN    "hii" - 2 = NaN          (Non-Numeric Strings become NaN)




// console.log(+true)  -1      The + before a value is called the unary plus operator. It  convert the value into a number. it dosent add
// console.log(true)   - true 
// console.log(true+)   ❌ Error   Because + needs a value on both sides when used as addition.

//+"33"      // 33

// let num1 , num2 , num3
// num1 = num2 = num3 = 2+ 2   - 4    JavaScript works right to left for assignment (=). first num3 = 4 then num2 then num1