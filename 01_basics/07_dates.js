
//date:
//date is a object in javascript


let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());//these are methods of date object
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString('en-PK'))
console.log(myDate.toLocaleString('en-PK', {timeZone: 'Asia/Karachi'}))
console.log(typeof(myDate));//object

let myCreatedDate = new Date(2025,7,22)//years , months , date , hours , seconds, milliseconds
let myCreatedDate2 = new Date(22-7-2025)//dd-mm-yyyy
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
 
console.log(Date.now());
console.log(Date.now()/1000);// to convert it into miliseconds

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getDay());

newDate.toLocaleString('en-PK', {weekday: 'long', timeZone: 'Asia/Karachi'}) 