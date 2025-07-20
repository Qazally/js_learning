//datatypes based on memeoey
//Premitive datatypes and Non-Primitives

//primitives

//7 types of Primitive datatypes:(String, Number, Boolean, Null, Undefined, Symbol, BigInt)


const score = 100;
const scoreValue =100.3;


const isLoggesIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");


//console.log(id==anotherId);

const bigNumber = 35789097568978999900n;//bigint


//  Reference type and Non-Primitive datatypes:(memory mai save krna prta with refernce)
//array, objects, functions

const heros = ["thor","spiderman","ironan"]
let myObj={
    //objects are in curly braces and are in key-value pair
    name: "qazal",
    age: 20,
    
} 

const myFunction = function(){
    //console.log("hi world");
}

//console.log(typeof myFunction);



//++++++++++++++++++++++++++++++++++++++++++++++++++++


//Satck (Primitive), Heap (Non-Primitive)

// in stack we got the copy of variable, in heap we got the reffernce of variables ..any changing in value will be changes in the heap

let myYoutubeName = "qazal"

let anotherName = myYoutubeName;
anotherName = "zahra"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    id: 23
}
let userTwo = userOne;
userTwo.email = "qazal@google.com"

console.log(userOne.email);
console.log(userTwo.email);
