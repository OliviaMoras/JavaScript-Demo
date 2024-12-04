const myarr=[1,2,3,4,"oli"]
console.log(myarr);
console.log(myarr[0]);

const newarr= new Array(1,2,3,4)
console.log(newarr[1]);

//array methods
myarr.push(5)
console.log(myarr);
myarr.pop()
console.log(myarr);
myarr.unshift(0)             //never use  
console.log(myarr);
myarr.shift() 
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(9));

const newarry= myarr.join()
console.log(myarr);
console.log(newarry);
console.log(typeof newarry);

//slice & splice
console.log("Original array");
console.log("A",myarr);
console.log("Slice");
const myar=myarr.slice(1,3);
console.log("B",myar);
console.log("A",myarr);
console.log("Splice");
const myyar=myarr.splice(1,3);
console.log("C",myyar);
console.log("A",myarr);

const hero=["shaktiman","batman","thor"]
const hero2=["superman","spiderman","ironman"]

const allhero=hero.concat(hero2)     
console.log(allhero);
const allnewhero=[...hero,...hero2]    // spread operator-another way to add 2 or more arrays
console.log(allnewhero);
hero.push(hero2)         // It will create problem as ot creates array inside array 
console.log(hero);
console.log(hero[3][1]);

const nest_array=[1,2,3,[4,5,6],7,[8,9,[4,5]]]
const simp_array=nest_array.flat(Infinity)         // flat - kt will combine in one array
console.log(nest_array)
console.log(simp_array);

console.log(Array.isArray("olivia"))
console.log(Array.from("olivia"))     //converting it into array

console.log(Array.from({naame:"olivia"}))    // it will give empty array. You should specify key and values to make array

let m1=10
let m2=20
let m3=30
console.log(Array.of(m1,m2,m3));
