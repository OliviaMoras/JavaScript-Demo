//CONVERSION

console.log(typeof "olivia");

console.log(typeof null);

console.log(typeof undefined);

let score="23ab"

console.log(typeof score);      //string
console.log(typeof (score));    // string

let valuein_no= Number(score)
console.log(typeof(valuein_no));  //number
console.log(valuein_no);             //Nan - score="23ab"


// undefined also will give same as above

let marks=null

console.log(typeof marks);      //obj
console.log(typeof (marks));    //obj

let value_in_no= Number(marks)
console.log(typeof(value_in_no));  //number
console.log(value_in_no);             //0

// conversion
// "23"  = 23
// "33ans" = NaN
// true = 1 False = 0

let isLoggedIn = 1            // if its let isLoggedIn = "" then result will be 0 
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

let num=3

let str_no=String(num)
console.log(typeof(str_no));  //string

console.log("============= OPERATIONS ==================");

let value =3
let negvalue = -value
console.log(negvalue)

console.log("1"+2)   //12
console.log("1"+2+2)  //122
console.log(1+2+"2")  //32

console.log(true)
console.log(+true)  //1
//console.log(true+)  ERROR 
console.log(+"")   //0

let counter=100
++counter;
console.log(counter);

//Summary



