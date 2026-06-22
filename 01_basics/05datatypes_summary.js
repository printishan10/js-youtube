// Primitive Data Types:
// - String  - let a = "ish"
// - Number
// - Boolean
// - Null
// - Undefined
// - BigInt
// - Symbol

// Stores actual value directly and  Store VALUE directly

let a = 10
let b = a
b = 20
console.log(a) - 10
console.log(b) - 20
// because changing b dosent affect a 


// Non-Primitive (Reference) Types:
// - Object
// - Array
// - Function

// Stores reference (memory address) of the value and Store ADDRESS (REFERENCE)
//object
// let user1 = {
//     name: "Ishan"
// }
// let user2 = user1
// user2.name = "Rahul"
// console.log(user1.name) -// Rahul because Both variables point to the same object.
// user1 ──┐
//         ↓
//       Object

// user2 ──┘


//Q- JS IS A STATIC OR DYNAMIC TYPED LANG?
// Static Typed Language:
// Variable type is fixed and cannot change. once you say a variable is a Number, it must stay a Number.

// Examples:
// Java, C, C++, C#, Go
// ex int x = 10

// ex- int x = 10        - Number
//     int x = "ish"     ❌ Error you can only assign x a number data type - int x = 20 correct

// Dynamic Typed Language:
// Variable type can change during execution.

// Examples:
// JavaScript, Python, Ruby
// ex -int x = 10              number 
//    int x = "ish" correct   string
//    int x = true            boolean



// Memory:
// Unique Symbol #1
// Description: "123"
const id = Symbol('123')   //Memory: Unique Symbol #1 Description: "123"
const id1 = Symbol('123')  //Memory: Unique Symbol #2 Description: "123"
console.log(id == id1);   //false   Unique Symbol #1 == Unique Symbol #2 = false 
// The description inside Symbol('123') is only a label, not the value itself.


let x = null;
console.log(typeof x); //-object only for null it returns object other primitive data type return their value like number is number
// all non primitive data types return objects 

let arr = [1,2,3]
console.log(typeof arr); //-object


//*******************************MEMORY*************************************************************************** */

// we have two types of memory 
// 1-stack   -Primitive types are stored in stack  and which is Copy by Value 
// Primitive:
// Changing copied variable does not affect original.

// 2-Heap    -non primitive types are stored in heap and which is  Copy by Reference
// Non-Primitive:
// Changing copied object affects original because both share the same reference.











//   node 01_basics/05datatypes_summary.js
