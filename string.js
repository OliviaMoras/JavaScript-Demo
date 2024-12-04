const name="olivia"
const count=5

console.log(`hello my name is ${name} and my age is ${count}`);

const gamename= new String('pubg')
console.log(gamename);
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('g'));
console.log(gamename.indexOf('z'));  // output will be -1
console.log(gamename.__proto__);

const newstr = gamename.substring(0,2)
console.log(newstr);

const anewstr = gamename.slice(-2,4)
console.log(anewstr);

const newstrone = "         olivia        "
console.log(newstrone);
console.log(newstrone.trim());

const newstrtwo = "olivia-moras-10-gmail-com"
console.log(newstrtwo.split('-'));

const url="https://olivia.com/olivia%20moras"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes("kkk"));

