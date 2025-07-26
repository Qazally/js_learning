const tinderUser = new Object();
//const tinderUser = {}; // empty object

tinderUser.name = "Qazal"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false;
//console.log(tinderUser); // empty object
                                                                //node 02_basics/04_objects.js
const regularUser = {
    email: "qazal@gmail.com",
    fullname: {
        firstname : "Qazal",
        lastname: "Zahra"
}
}
//console.log(regularUser); // empty object
console.log(regularUser.fullname.lastname);//accessing objects in objects

//combining objects


              //keys: "values"
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

//const obj3 = {obj1, obj2} // it gives wrong result 
const obj3 = Object.assign(obj1, obj2) 
//const obj3 = Object.assign({}obj1,obj2) ///correct way..sasme result
console.log(obj3);

//spread operator 
const obj4 = {...obj1, ...obj2} // same result
console.log(obj4);

//Array of objects
const users = [
    
    {
        id: 1,
         name: "Qazal"
    },
        {
        id: 2,
         name: "Ayesha"
    },
        {
        id: 1,
         name: "Rida"
    },
]

// console.log(users[1].name);//Ayesha

// console.log(tinderUser);

// console.log(Objects.keys(tinderUser));
// console.log(Objects.values(tinderUser));
// console.log(Objects.entries(tinderUser));


//hasownprperty means do it has this property
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('age')); // false

