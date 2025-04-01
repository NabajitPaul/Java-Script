//In JavaScript, you can define variables using var, let, and const
// const is fixed to define unique id 
const accountId = 144553               //const can not be changed
let accountEmail = "sunu2gmail.com"   // to declare variable there are 2 ways - let and var, but we donot use var
var accountPassword = "12345"         //let & var can be changed with the later value
accountCity = "Jaipur"
let accountState;                    // if no value is given , then undefined comes 




//accountId =12233               //error because const cannot be changed , const is for something unique id
accountEmail = "naba@gmail.com"  //nlet can be changed , the later one will be printed
accountPassword = "33333"        // var can also be changed , the later one gets printed
accountCity = "Delhi"




console.log(accountId , accountEmail ,accountPassword , accountCity); // comes in a single line
//to print in a row we use - 
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])   // comes in tabular form
