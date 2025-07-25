//two ways to declare object
//constrctor, object literal
//singleton refers to constructor

//Object.create //way to create an object but this is singleton method

//Object Literal

const mySym = Symbol("mykey1"); //symbol is a unique identifier 
//when symbol is required to uswd as key in object , it should be declared outside of object
//it should be written in square brackets 

const JSUser = {

    //Objects
    name: "Qazal",//it consider name as string
    "Full_name": "Qazal Zahra",//it consider Full_name as string
    //[mySym]: mykey1, //symbol as key
    mySym: mySym, //symbol as key
    age:21,
    location: "Pakistan",
    email: "qazal.google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(JSUser); //way to acces object
// console.log(JSUser.name); //way to acces object
// console.log(JSUser["Full_name"]); //way to acces object that is writtrn in double quotes
// console.log(JSUser[mySym]); //way to acces object that is written with symbol as key

//changing value of object
JSUser.age =22;

//locking object
// Object.freeze(JSUser); //it will not allow to change any value of object

//function as an object
JSUser.greeting = function() {
    console.log("HI, IS user");
}
console.log(JSUser.greeting());//way to access function in object
console.log(JSUser.greeting);//it will not call function, it will just print function undefined
JSUser.greeting2=function(){
    console.log('HI, IS user2, ${this.name}');
}
console.log(JSUser.greeting2());
