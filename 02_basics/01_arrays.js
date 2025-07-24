//array
//array is object in js in which we can store multiple values
//we can store any type of value in it

const myArr = [1,2,3,4,5,'qazal'];
// console.log(myArr);

// console.log(myArr[1]);//2...print only index 1 value

const myArr2 = new Array(2,3,7,5);//other way to define an array

//Array methods

// myArr.push(6)// add this valueto end of exsisting array
// myArr.push(7);
// myArr.pop()//removes last value from the array....no parameter
// console.log(myArr);//[1,2,3,4,5,'qazal',6]


myArr.unshift(9)//it inserts value at the start of array
myArr.shift()//removes first vakue from array ...no parameter

// console.log(myArr);


// console.log(myArr.includes(3));//true...checks if 3 is includede in aray or not
// console.log(myArr.indexOf(2));//1..gives index of 2 in array
// console.log(myArr);


const newArr = myArr.join()//join two array values

//console.log(myArr);
//console.log(newArr);

//Slice,Splice
//Slice:
//- Purpose: Makes a copy of part of an array without changing the original.
//- Syntax: array.slice(start, end)
// end is not included.

const fruits = ["apple", "banana", "cherry", "date"];
const slicedFruits = fruits.slice(1, 3); // gets elements at index 1 and 2

console.log(slicedFruits); // ["banana", "cherry"]
console.log(fruits); // ["apple", "banana", "cherry", "date"]



//Splice
//- Purpose: Changes the original array by removing or adding items.
//- Syntax: array.splice(start, deleteCount, item1, item2, ...)


//splice removing items from original array

const colors = ["red", "green", "blue", "yellow"];
colors.splice(1, 2); // starts at index 1, removes 2 items
console.log(colors); // ["red", "yellow"]

 //splice adding items

 const animals = ["cat", "dog", "rabbit"];
// Insert "parrot" and "hamster" at index 1
animals.splice(1, 0, "parrot", "hamster");
console.log(animals); 
// Output: ["cat", "parrot", "hamster", "dog", "rabbit"]

//- 1 → Start at index 1 (right after "cat")
//- 0 → Don't delete anything
//- "parrot", "hamster" → Add these items in
