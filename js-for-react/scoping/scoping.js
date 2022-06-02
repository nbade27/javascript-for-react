//Differences between var and let
if (true) {
    var varVariable = "This is true";
}

console.log(varVariable);

if (true) {
    let letVariable = "This is true";
}

console.log(letVariable);

/*
    if we run above code we will get error at letVariable because let is block scoped
    where as var is functional scoped so we can use it outside of block as well

*/


if (true) {
    const constVariable = "This is true";
}

console.log(constVariable);

//we will get same error at constVariable it is also block scoped

//also we can redeclare var variable
//we cannot redeclare let and const variables


