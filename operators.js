
// OPERATORS
// Types of Operators
// Arithmetic Operators - +, -, *, **, /, %, ++, --
// Assignment Operators - =, +=, -=, *=, /=, %=, **=
// String Operators - +, +=
// Comparison Operators - ==, ===, !=, !==, >, <, >=, <=, ?
// Logical Operators - &&, ||, !
// Type Operators - typeof, instanceof
// Bitwise Operators - &, |, ~, ^, <<, >>, >>>

var num1 = '10';
var num2 = '20';

// Arithmetic Operators
var result = num1 + num2; //30
var result = num1 - num2; //-10
var result = num1 * num2; //200
var result = num1 ** num2; //100000000000000000000
var result = num1 / num2; //0.5(dieplayes reminder as result)
//console.log(result);

var result2 = num1++; //O/P - 10
var result3 = ++num1; // O/P - 11
//console.log(result3);

// Assignment Operators
var var1 = '5';
var var2 = '10';
var2 += 5;
//console.log(var2);

var name1 = "Naren"
var name2 = "Naveen"
name1 += "Naveen"
var fullname = name1 + name2;
//console.log(fullname);  //NarenNaveen

//Comparison Operators
var a = '10';
var b = '20';
var c = a == b;
//console.log(c); //It will compare only values O/P - false
var d = a === b;
//console.log(d); // It will compare value and type O/P - false
var e = a != b;
//console.log(e); O/P true
var f = a >= b;
//console.log(g); //O/P - false
var g = a <= b ? 'a is smaller than b' : 'b is greater than a'
//console.log(g); //O/P - a is smaller than b

// Logical Operators
var a = '25';
var b = '30';
var result = a < b && b > a || a > b ? 'The given condition is true' : 'The given condition is false' ;
console.log(result); // O/P - The given condition is true



