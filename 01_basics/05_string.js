// Adding or Concatenate twoo string variables 

const name = "qazal";
const repoCount = 10;

console.log( name + repoCount + " hi value");

//new and prefferable way to do it

console.log('my name is $(name) and i have repocount $(repoCount)');

//two ways to define a string variable 
const name1 = "qazal";
const gameName = new String("qazal");


console.log(gameName[0]); //q
console.log(gameName.__proto__); //string prototype;
console.log(gameName.length); //5
console.log(gameName.toUpperCase()); //QAZAAL
console.log(gameName.charAt(2)); //z (on this index which character is located)
console.log(gameName.indexOf('z'));//2....(0------)

const newString = gameName.substring(0,4)//limitize character of string like in this only first 4 characters can be printed
console.log(newString); //qaza

const anotherString = gameName.slice(-2,4)//in this we can add negatuve index also
console.log(anotherString); //za...firstt two not show bcz -2 and next only two bcz 4 

const newStringOne = "     qazal   ";
console.log(newStringOne);
console.log(newStringOne.trim());// remove the extra starting and ending space from the string
    
const url = "https://wwww.google30*.com";
console.log(url.replace('30*','-'));//https://www.google-.com
console.log(url.includes(google));//true
console.log(url.includes(qazal));//false

//Split
console.log(gameName.split('a'));//['q','z','l']split string by a and retuen the aray... it excludes the a
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
