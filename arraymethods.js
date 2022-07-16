// Types of Array Methods

// 1. concat
// 2. toString
// 3. push
// 4. pop
// 5. shift
// 6. unshift
// 7.reverse
// 8. length
// 9. find
// 10. findIndex
// 11. filter
// 12. map
// 13. slice
// 14. splice
// 15. sort
// 16. reduce
// 17. every
// 18. some
// 19. inculdes
// 20. entries
// 21. keys
// 22. indexOf

var cars = ["BMW", "Audi", "BENZ", "TESLA"]

//contact - To add extra array values
console.log(cars.concat(["KIA", "VW"])); //[ 'BMW', 'Audi', 'BENZ', 'TESLA', 'KIA', 'VW' ]
var newCars = cars.concat(["KIA", "VW"]);
console.log(newCars)

//push - It will add new values to array at last
console.log(cars.push('Maruthi'))
console.log(cars)
//pop - It will remove te last value of aarray
cars.pop()
console.log(cars)

//unshift - To add the valueesat front of array
cars.unshift('Maruthi')
console.log(cars)
//shift - to remove first valueof array
cars.shift()
console.log(cars)

//length - to find the length of array
console.log("-----------Array Length------------")
console.log(cars.length)

//reverse() - to reverse the values of array
console.log("-----------Array Reverse------------")
console.log(cars.reverse())

//slice 
console.log("-----------Array Slice------------")
var slicedArray = cars.slice(2,4)
console.log(slicedArray)

//map
console.log("-----------Map------------")
console.log(cars.map((d) => d === 'TESLA'))

//filter
console.log("-----------filter------------")
console.log(cars.filter((d) => d === 'TESLA'))

//find
console.log("-----------find------------")
console.log(cars.find((d) => d === 'TESLA'))

//findindex
console.log("-----------findIndex------------")
console.log(cars.findIndex((d) => d === 'TESLA'))

//indexof
console.log("-----------indexof------------")
console.log(cars.indexOf('BMW'))

//To find total of given array
console.log("-----------To find total of given array------------")
var num1 = [10, 10, 10, 10]
var total = 0;
for(var i = 0; i < num1.length; i++){
    total += num1[i] // total = total + num1[i]
}
console.log(total)

//reduce
console.log("-----------reduce------------")
var totalSum = num1.reduce((a, cur) => a + cur, 10)
console.log(totalSum)

console.log("-----------Keys------------")
var myObj = ["siva",'ram'] 
// key -> [0, 1]
// entries -> [0, 'siva'] [1, 'ram']

var data = myObj.entries()

for(var key of data){
    console.log(key[1])
}

//entries
console.log("-----------entries------------")

//OUTPUTS

// [ 'BMW', 'Audi', 'BENZ', 'TESLA', 'KIA', 'VW' ]
// [ 'BMW', 'Audi', 'BENZ', 'TESLA', 'KIA', 'VW' ]
// 5
// [ 'BMW', 'Audi', 'BENZ', 'TESLA', 'Maruthi' ]
// [ 'BMW', 'Audi', 'BENZ', 'TESLA' ]
// [ 'Maruthi', 'BMW', 'Audi', 'BENZ', 'TESLA' ]
// [ 'BMW', 'Audi', 'BENZ', 'TESLA' ]
// -----------Array Length------------
// 4
// -----------Array Reverse------------
// [ 'TESLA', 'BENZ', 'Audi', 'BMW' ]
// -----------Array Slice------------
// [ 'Audi', 'BMW' ]
// -----------Map------------
// [ true, false, false, false ]
// -----------filter------------
// [ 'TESLA' ]
// -----------find------------
// TESLA
// -----------findIndex------------
// 0
// -----------indexof------------
// 3
// -----------To find total of given array------------
// 40
// -----------reduce------------
// 50
// -----------Keys------------
// siva
// ram
// -----------entries------------