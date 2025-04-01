// // The if statement is used to test a condition and execute code if the condition is true.
// // IF Statement
// let age = 18
// if (age>=18){
//     console.log("You are an adult");
// }


// //IF-ELSE statement
// let marks = 75
// if(marks>=75){
//     console.log("You get a distinction");
// }
//     else{
//         console.log("You got first division");
// }



// //IF-ELSE statement
// let age1 = 16
// if(age1>=18){
//     console.log("You are an adult");
// }
// else{
//     console.log("you are not an adult");
// }



// //IF statement
// let score = 99
// if(score>=75 && score<100){
//     console.log("Your score is nice");
// }
// if(score<75){
//     console.log("You score is not nice");
// }
// if(score>100){
//     console.log("Your score is awesome");
// }




// //Using Ternary Operator = A short hand of if-else
// let score1 = 101
// let division = (score1>=100) ? "Good" : "Bad";
// console.log(division);



//SWITCH statement = Used when comparing multiple values against the same variable.
//A switch statement is a control structure that lets you compare a variable to multiple possible values (cases). It checks each case one by one, and if a match is found, it runs the corresponding code. If no match is found, it can run a default case.
// let day = 2;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
    
// }




let fruit = "mango";
switch(fruit){
    case "apple":
        console.log("this is apple");
        break;
    case "mango":
        console.log("this is mango");
        break;
    case "watermelon":
        console.log("this is watermelon");
        break;
    case "pineapple":
        console.log("this is pineapple");
        break;
}

let day = 3; // Assume 1 is Monday, 2 is Tuesday, ..., 7 is Sunday

switch (day) {
  case 1:
    console.log("It's Monday! Start the week with some exercise.");
    break;
  case 2:
    console.log("It's Tuesday! Time to focus on work projects.");
    break;
  case 3:
    console.log("It's Wednesday! Mid-week, let's take a short break.");
    break;
  case 4:
    console.log("It's Thursday! Meet friends or attend a class.");
    break;
  case 5:
    console.log("It's Friday! Enjoy a movie night or hang out.");
    break;
  case 6:
    console.log("It's Saturday! Relax and spend time with family.");
    break;
  case 7:
    console.log("It's Sunday! Prepare for the upcoming week, maybe do some reading.");
    break;
  default:
    console.log("Invalid day number.");
}
// Output: "It's Wednesday! Mid-week, let's take a short break."




