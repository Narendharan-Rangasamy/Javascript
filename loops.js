//Loop - Used to simplify the code lines and also to use effective way for declaring conditions.
// Loops will keep on executing until the declared condition fails

// Types - for, for in, for of, while, do while

//for loop
//Syntax = for(initialization; condition; increment/decrement){
//     statement..
// }
console.log("=================FOR LOOP=================")
var a = 10;
for(i = 0; i <= a; i++){
    console.log(i)
}
//O/P = It will display numbersfrom 0 to 10 libe by line

//for in loop
var cars = ["BMW", "Volvo", "Kia", "VW"]
console.log("=================FOR IN LOOP=================")
for(i in cars){
    console.log(cars[i])
}
//O/P = BMW
// Volvo
// Kia
// VW

//for of loop
var cars = ["BMW", "Volvo", "Kia", "VW"]
console.log("=================FOR OF LOOP=================")
for(i of cars){
    console.log(i)
}
//O/P = BMW
// Volvo
// Kia
// VW


//while loop
console.log("=================WHILE LOOP=================")
var myCar = "i20"
while(myCar === "i20"){
    console.log("My Car is name " + myCar)
    myCar--;
}
//O/P = =================WHILE LOOP=================
//                 My Car is name i20

//do while loop
console.log("=================DO WHILE LOOP=================")
do{
    console.log("My Car is name " + myCar)
    myCar--; 
}while(myCar === "i20")
//O/P = =================DO WHILE LOOP=================
//                     My Car is name NaN