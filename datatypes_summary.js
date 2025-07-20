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
    console.log("hi world");
}

console.log(typeof myFunction);