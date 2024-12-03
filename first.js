console.log("olivia")

// output
// PS D:\JavaScript> node -v
// v20.10.0
// PS D:\JavaScript> node first.js
// olivia;

//Variables

//1. Const
const id=123
//id=2   TypeError: Assignment to constant variable.
// not possible becuase const can not be changed.
console.log(id)

//2. let
// Always use Let rather than var cause issue in block and functional 
let ac_email="oli10@gmail.com"

//3. var
var acpassword="123"

ac_city="goa"

let acc_state

console.log([id, ac_email,acpassword,ac_city,acc_state ])

"use strict"; // treat all JS Code as newer version

//alert(3+3)  we cant use beacuse of node

//number, bigint, string, boolean, null, undefined, symbol, object
