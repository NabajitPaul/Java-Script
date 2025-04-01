//There are 7 primitive and 1 non primitive datatype in js
//primitive = stores value (string,intger,big int,boolean,undefined,null,symbol)
//non primitive = do not store value

//PRIMITIVE DATATYPES = That stores values
let name =  "nabajit";     //string
let age = 21;              //integer
let isCodingFun = true;    //boolean
let isRaining = false;     //boolean
let bigint = 123456789987654321;  // Big Int
let yourname;              //undefined datatype
let empty = null;          //NUll when we want a empty value
let temperature = null;    // NUll

let sym1 = Symbol("id")  // Used for creating unique keys
let sym2 = Symbol("id") 


console.log(name);
console.log(age);
console.log(isCodingFun);
console.log(bigint);
console.log(yourname);
console.log(temperature);

console.log(sym1 == sym2); //False - because  symbol is for uniquness, which cannot be same for both

//-------------------------------------------------------------------------------------------------------------

//NON PRIMITVE DATATYPES = That Stores Reference
//Object = In JavaScript, an object is a non-primitive data type that stores collections of key-value pairs. It is used to represent real-world entities like users, products, or settings.
let person = {
    name: "Nabajit" ,
    age: 21,
    isStudent: true,
    isAdult: false,
}

console.log(person);

//------------------------------------------------------------------------------------------------------------------

//TYPE OF - To know the type of datatype
console.log();                   // leaves a blank space

console.log(typeof name);        //string
console.log(typeof age);         //integer
console.log(typeof isCodingFun); //boolean
console.log(typeof null);        // Object - this is known as javascript bug
console.log(typeof yourname);    //Undefined
console.log(typeof sym1);        //symbol





