// OBJECT
// Syntax - Obj = {} key : value
var obj = {id: 1, userName1: 'ABC', isAvail: ["Yes", "No"]}
console.log(obj.userName1); // To access the objet. O/P = ABC
console.log(obj.isAvail[1]); // To access the index of array decalred in object. O/P = No

// ARRAYS
// Syntax - arr = ["A", "B","C"];
// Array of Objects - arr = [{Name: "A"}, {Place: "B"}, {Degree: "C"}];
var array = ["A", "B", "C"];
console.log(array[0]); //To access array value O/P - A

var arr = [{Name: "A"}, {Place: "B"}, {Degree: "C"}];
console.log(arr[2].Degree); // To access array of object value O/P - C