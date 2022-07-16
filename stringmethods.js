// JS String Methods

// 1. length
// 2. startsWith
// 3. endsWith
// 4. toUpperCase
// 5. toLowerCase
// 6. concat
// 7. split
// 8. reverse
// 9. join
// 10. includes
// 11. slice
// 12. indexOf
// 13. replace
// 14. replaceAll
// 15. trim
// 16. lastIndexOf
// 17. toString
// 18. subStr
// 19. subString

console.log("test")

var name1 = "Naren"
var name2 = "sam"
var email = "abc@email.com"
var splitExample = "The Jungle Book"
var arr = ['A', 'B' ,'C' ,'D']

// Lenght - Displys the lenght given variable
console.log(name1.length) //5

//Startswith - Displays true or false ccording to given condition
console.log(name1.startsWith('a')) //false

//endsWith - Displays true or false ccording to given condition
console.log(name1.endsWith('n')) //true

//toUpperCase - Converts the given variable from lower to uppercase
console.log(name2.toUpperCase()) //SAM

//toLowerCase - Converts the given variable from upper to lowercase
console.log(name1.toLowerCase()) //naren

//concat - To merge the given strings
console.log(name1.concat(name2)) //Narensam

//split - Splits the every words of variable into seperate index of array
console.log(splitExample.split(" ")) //[ 'The', 'Jungle', 'Book' ]

//split - Splits the every letter of variable into seperate index of array
console.log(splitExample.split("")) //[
//     'T', 'h', 'e', ' ',
//     'J', 'u', 'n', 'g',
//     'l', 'e', ' ', 'B',
//     'o', 'o', 'k'
//   ]

//join - joins array of value into string(with comma)
console.log(arr.join()) //A,B,C,D

//join - joins array of value into string(without comma and no spaces)
console.log(arr.join('')) //A,B,C,D

//join - joins array of value into string(without comma and spaces)
console.log(arr.join(" ")) //A B C D

//includes - return true or false(will check also the Caps)
console.log(name1.includes('A')) //true

//slice - To slicethepart of content from variable
console.log(splitExample.slice(4,11)) //Jungle

//indexOf - Displayes the index value of given array value
console.log(arr.indexOf('C')) //2

//indexOf - To find index value of String
function toFindIndex(myUser,start, end){
    var myFirstName = ""
    for(var i = arr.indexOf('r'); i <= end; i++){
        myFirstName += name1[i] // myFirstName = myFirstName + name1[i]
    }
    return myFirstName
}
console.log(name1.indexOf("r")) // 2

//replace - replace the original valu with given value
console.log(name1.replace("Naren", "Naveen")) //Naveen

//trim - removes spaces at left and right end
var username = "     Naren Naveen     "
console.log(username.trim())

// To reverse the variable value
var username1 = "Naren" // 0 1 2 3 4 5
                        
var reversedUsername = ""
for(var i = username1.length - 1; i >= 0; i--){
    reversedUsername += username1[i]
}
console.log(reversedUsername)

//substring()- Returns value according to given length
console.log(name1.substring(2,5))

//toString
let car = "BMW"
console.log(car.toString())


//OUTPUTS

// test
// 5
// false
// true
// SAM
// naren
// Narensam
// [ 'The', 'Jungle', 'Book' ]
// [
//   'T', 'h', 'e', ' ',
//   'J', 'u', 'n', 'g',
//   'l', 'e', ' ', 'B',
//   'o', 'o', 'k'
// ]
// A,B,C,D
// ABCD
// A B C D
// false
// Jungle
// 2
// 2
// Naveen
// Naren Naveen
// neraN
// ren
// BMW


