//we can actually use var before it is declared
//but we will get undefined here
console.log(varVariable);
var varVariable = 'Naga'

//but it is not the case with let keyword
//this will throw error
console.log(letVariable);
let letVariable = 'Sai'

//const behaves as same as let except const will never be reassign value to it
//but we can change the values inside the assigned object

//check below example
const person = {name : 'naga'}
person.name = 'sai'
console.log(person.name);

//it is recommended to use const over let unless you want to change the value


