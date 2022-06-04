// let us check with String primitive type

//String
const name1 = 'Naga';
//let us create with String object
const name2 = new String('Naga');

console.log(typeof name1);
console.log(typeof name2);
//We cannot use === for comparing one primitive with object
console.log(name1 === name2);

//we can compare by using ==
console.log(name1 == name2);


//Number
const num1 = 99;
const num2 = new Number(99);

console.log(num1 == num2);
console.log(num1 === num2);


//Boolean
const boolean1 = false;
const boolean2 = new Boolean(false);

console.log(boolean1 == boolean2);
console.log(boolean1 === boolean2);


//Function
const getSum1 = function(x,y){
    return x+y;
}


console.log(getSum1(7,5));

const getSum2 = new Function('x','y', 'return 1+1')
console.log(getSum2());


//Object
const john1 = {name : 'John'}
const john2 = new Object({name : 'John'})
console.log(john1);
console.log(john2);

//Arrays
const arr1 = [1,2,3,4,5,6]
const arr2 = new Array(1,2,3,4,5,6);

console.log(arr1);
console.log(arr2);

//Regular Expressions
const reg1 = /\w+/
const reg2 = new RegExp('\\w+')

// Note: While using this new RegExp we should escape characters by \


console.log(reg1);
console.log(reg2);

/*
    the final conclusion is that we should not use new Regex() kind of object creation or anything that
    
    Because 
        There are not too many uses for doing this
        It slows the things down


*/


