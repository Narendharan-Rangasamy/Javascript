//Once declared it can be called anywhere

//Function Keyword
//Ananymous Function
//Arrow Function
//IIFE Function

//Function Sytax
// function functionname(parameter){
//     statements or blocks..
// }
// functionname() --To call a function

//Function Keyword
console.log("==================Function Keyword==============")
function cars(myCars){
    for(i = 0; i < myCars.length; i++){
        console.log(myCars[i])
    }
}
cars(["BMW", "Volvo", "Kia", "VW"])

//Ananymous Function
console.log("==================Ananymous Function==============")
var cars = function(myCars){
    for(i = 0; i < myCars.length; i++){
        console.log(myCars[i])
    }
}
cars(["BMW", "Volvo", "Kia", "VW"])

//Arrow Function
console.log("==================Arrow Function==============")
var cars = (myCars) => {
    for(i = 0; i < myCars.length; i++){
        console.log(myCars[i])
    }
}
cars(["BMW", "Volvo", "Kia", "VW"])


//IIFE Function
// console.log("==================IIFE Function==============")
(function(){
    console.log("hello how are you")
  })() //"hello how are you"
