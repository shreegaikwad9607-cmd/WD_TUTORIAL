//conditional statement

// 1. if else statement
    // we can check one condition according to one block

// let num = prompt("Enter a number to check its even or odd")
// if(num%2==0){
//     console.log("you number is even number=",num);

    
// }else{
//     console.log( " you number is odd no=", num);
    
// }
 
// let num = prompt("Enter a number to check its negative or Positive")
//  if(num>0){
//     console.log(num , "is positive number");
//  }else{
//     console.log(num , "is negative number");
    
//  }


// 2. else if statement
   // here we can check multiple conditions according to multiple Blocks

// age = prompt("Enter your Age")
// if(age>=15 && age<=17){
//    console.log("You're Eligible for SSC exam");
   
// }else if(age>=18 && age<=20){
//      console.log("You're Eligible for HSC exam");
   
// }
// else if(age>=21 && age<=23){
//      console.log("You're Eligible for graduation ");

   
// }else if(age>=24 && age<=26){
//      console.log("You're Eligible for Masters ");
   
// }else if(age>24 && age<=100){
//      console.log("i you're married. if you're not you have to get married as soon as possible");
   
// }

// to check grade of student (in else if loop)

// let marks = prompt("Enter youre Marks to know youre grades")

// if(marks >= 80 && marks<= 100){
//    console.log(" [A]-Grade");
   
// }







// Switch - CASE
 day= parseInt(prompt("select a day number of week to know the day name { select no between 1 TO 7}"))
 switch(day){
   case 1:
      console.log("Monday");
   break;
   case 2:
      console.log("Tuesday");
   break;
   case 3:
      console.log("Wedensday");

   break;
   case 4:
      console.log("Thursday");
   break;
   case 5:
      console.log("Friday");

   break;
   case 6:
      console.log("Saturday");
   break;
   case 7:
      console.log("Sunday");

   break;

   default :
   console.log("Enter A valid NUmber");

 }