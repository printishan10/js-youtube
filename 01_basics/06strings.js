// String interpolation is a way to insert variables or expressions inside a string.
let name = "ishan"
let age = 20
console.log(`My name is ${name} and i am ${age} years old`);  // we use backtick `` instead of "" and use ${} for variable
// this is modern way to write string rather than using + 

//String Indexing - Every character has a position it starts from 0 
let namee = "shrey"
console.log(namee[0]);  //-s

// String Length
console.log(namee.length);  //-5


// Important String Methods
// toUpperCase()

// toLowerCase()

//  charAt() -Gets character at a position. you give the position Number
console.log(namee.charAt(2)); // -r

// indexOf()- find first occurence of the character you give returns index number
console.log(namee.indexOf("s"));  //-0

// includes() - Checks if text exists. returns true or false 

// slice() -extract part of the string you pass the starting and end index and the last ind is not counted 
console.log(namee.slice(1,4));  //-hre 
// it also supports neg indexing  neg indexing starts from -1 and from the back of the string 
console.log(namee.slice(-3));  //-rey

// substring() - same to slice just does not support neg indexing 

// replace() -  replace("text you want replace" , "text you want to replace with")
console.log(namee.replace("shrey","ishan"));  //-ishan

//trim() - Removes spaces from start and end. 
let text = "   ish   "
console.log(text.trim());  

// split() - converts string into array - split("mention on whr basis u want it to split")
let str = "ishan,shrey,deep"
console.log(str.split(","));

// concat() - joins strings



// Strings are Immutable
// Immutable means: Cannot be changed directly
// Example:
// let name = "Ishan"
// name[0] = "R"
// Will NOT change the string.



// Q-REVERSE A STRING 
let strr= "ishan"
console.log(strr.split("").reverse().join("")); //-nashi  first split in individual char then reverse char then joined all char to get back in string  
//same way we can check palindrome - palindrome madam ka reverse is madam true palindrom 







 



















//   node 01_basics/06strings.js