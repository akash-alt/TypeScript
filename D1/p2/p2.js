"use strict";
exports.__esModule = true;
// let a: number = 23;
// console.log(a);
// typeScript works like oops concept
// we can not add anyother datatypes just like we do in JS
// for adding mix array then we have to define it
// but if any datatypes if you have already used in array list then it will add but not all
var arr = ["akash", "developer", 1, false]; // here we have define 2 datatypes (string,number)
arr.push(100);
arr.push(true);
arr[3] = "sakshi"; // here we have given index value ...where it should be add
console.log(arr);
// here i am define types of array
var array = ["janny", "sum", "minus"];
array.push("coding");
console.log(array);
// In case you try to add another data but you have define that data types
// then it will through error
var array1 = [1, 2, 334, 5, 45, 45]; // here have define array types
var array2 = [1, 2, 334, 5, 45, 45]; // here [] bracket is missing
array1.push(12);
console.log(array1);
