 const score = 400;

 const balance = new Number(100);
console.log(typeof(balance)); 

 console.log(balance.toString.length);// converting number into string and checking the string length
 console.log(balance.toFixed(2));//converting number into string with 2 decimal places
 
 const otherNumber = 23.8996;

 console.log(otherNumber.toPrecision(3));

 const hundreds = 1000000;
 console.log(hundreds.toLocaleString('en-PK'));
 

 //+++++++++++++++ MATHS ++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));//4...//absolute value changes negative into positive
console.log(Math.round(4.6)); // round off the balue
console.log( Math.ceil(4.1));//6
console.log(Math.floor(4.9));//4
console.log(Math.min(1,3,5,7,8));//1
console.log(Math.max(1,3,5,7,9,10));//10

console.log(Math.random())//it always gives random value between 0 to 1
console.log(Math.random()*10+1); // to avooid 0 - 1 we multioly it with 10 and add 1

const min = 10
const  max = 20

console.log(Math.floor(Math.random() *(max - min + 1) + min))
// Math.random gives random number but we have some range between max and min ,
// so we made a formula to ask for a number which is between max and min and add 1 to to avoid zero,
// and to assure minimum not less than 10 we add min to last