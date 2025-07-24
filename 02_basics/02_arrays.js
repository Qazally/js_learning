const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

// marvel_heroes.push(dc_heroes);//[ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', 'batman' ] ]
//pushes array as a e;ement of other array
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);//3rd index of marvel_heoes is array and then its 1 index is flash


//const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//concat returns new array with elements of both array


//spread operator
const allNewHerooes = [...marvel_heroes,...dc_heroes]
//console.log(allNewHerooes);//work same as concat

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArr.flat(Infinity);
console.log( real_another_array);

console.log(Array.isArray("qazal"));//false....tell is that parameterr value is strin or not
console.log(Array.from("qazal"));//[ 'q', 'a', 'z', 'a', 'l' ]....convert string ino array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,scrollbars));//[100,200,300]

