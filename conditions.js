//Conditions - If the given set of condition matches, it will execeute true part (or) it will execute false part

// Types - if, if else, else if, nested is, switch...

// if condition
// // Syntax - if(condition){
//             statement..
// }
console.log("=======================IF CONDITION===================")
var name = "Naren"
if(name.length > 0){
    console.log("The conditionis true")
}
// O/P = =======================IF CONDITION===================
//                          The conditionis true

// if else
// // Syntax - if(condition){
//             statement..
// }else{
//     stetement..
// }
console.log("=======================IF ELSE CONDITION===================")
var myArr = ['1', '2', '3', '4', '5']

if(myArr[2] == '3' &&  [myArr.length-1] <= 4){
    console.log(myArr[2])
}else{
    console.log("The given conditionhas been failed")
}
//O/P = =======================IF ELSE CONDITION===================
//                                   3


//else if
// Syntax - if(condition){
//             statement..
// }else if(condition){
//     stetement..
// }else{
//     statement..
// }
console.log("=======================ELSE-IF CONDITION===================")
var num1 = '10'
var num2 = '11'
var result = num1 + num2;
if (num1 == '10'){
    console.log(result)
}else if(num1 < num2){
    console.log("Else-if condition true")
}else{
    console.log("Please check the condition")
}
//O/P = 1011

//Switch Condition
//Sytax - switch(key){
//     case '1' :
//     break;
//     ...
//     ...
//     default:
// }
console.log("=======================SWITCH CONDITION===================")
var myGrade = 'A';
var result;
switch(myGrade){
    case 'A':
        result = "Your grade is First Class";
        break;
    case 'B':
        result = "Your grade is Second Class";
        break;
    case 'C':
        result = "Your grade is Third Class";
        break;
    default:
        result = "You're fail";
}
console.log(result)
// O/P = =======================SWITCH CONDITION===================
//                         Your grade is First Class
