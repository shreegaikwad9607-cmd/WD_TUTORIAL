// if else statement questions and answers
// Q.1>  Temperature Checker
//Conditions:

// Above 30 → "Hot"
// 15 to 30 → "Normal"
//Below 15  → ""Cold

// let temp = prompt("Enter youre Area Temperature to know its  HOT, NORMAL or COLD")
// if (temp > 30){


//         document.writeln(temp, "It's Hot Outside")


// } else {
//      if (temp >=15 && temp <= 30){
//         document.writeln(temp, "It's Normal Outside");

//     } else {
//     document.writeln("It's Cold Outside");
// }

// }


// Q.2>Find Greater Number

// let a= prompt("enter a 1st number to compare ")
// let b= prompt("enter a 2nd number to compare")

// if(a>b){
//     document.writeln(a," is greater");


// }else{
//      document.writeln(b,"is greater");

// }


//Q.3>Student Pass/Fail
// Condition:
// marks >= 35 → Pass
// Otherwise → Fail
// let marks = prompt("enter your marks to know you are PASS OR FAIL")
// if ( marks >= 35 ){
//     document.writeln(marks,"Pass , congrats keep it up");
// }else{
//     document.writeln(marks,"Fail, Better Luck Next Time");
// }


//Q.4>check number is divisble by 5

// let divisor=5
// let dividend= prompt( "Enter the number to check its divisible by 5")
// if ( dividend%divisor===0){
//     document.writeln(dividend+" is divisible by 5 ")


// }else{
//     document.writeln(dividend+"is not divisble by 5")
// }




//Q.5>Login System
// If username AND password match → Login success
// Else → Invalid details
//  let userid ="admin"
//  let userpass ="1010"
//  let username =prompt(" Enter Youre username")
//  let password = prompt("Enter Youre Password")

//  if(username==userid && userpass==password){
//     document.writeln("Login Success")
//  }else{
//     document.writeln("Invalid Details");

//  }
// ________________________________________________________________________________________


// "else if" questions and answers
// Q.1> Grade Calculator
// Conditions:
// 90+ → Grade A
// 75+ → Grade B
// 60+ → Grade C
// 35+ → Grade D
// Below 35 → Fail

// let marks = prompt("Enter youre marks  between 1 to 100 to know youre Grade")
// if (marks >= 90 && marks <= 100) {
//     document.writeln(marks, "=you got a 'A' Grade");

// } else if (marks >= 75 && marks < 90) {
//     document.writeln(marks, "you got a 'B' Grade ")
// } else if (marks >= 60 && marks < 75) {
//     document.writeln(marks, "=you got a 'C' Grade ")

// } else if (marks >= 35 && marks < 60) {
//     document.writeln(marks, "=you got a 'D' Grade ")

// } else if (marks>=1 && marks<=34) {
//     document.writeln(marks, "=Yore FAIL , TRY AGAIN  ")

// }else{
//     document.writeln(" Invalid Input")
// }



//Q.2>Age Group Checker
// Conditions:

// 0-12 → Child
// 13-19 → Teenager
// 20-59 → Adult
// 60+ → Senior Citizen

// let age =prompt(" Enter youre Age to know youre Age Group")
// if(age>0 && age<=12){
//     document.writeln(age," Youre a CHILD");
// }else if (age>=13 && age<=19){
//     document.writeln(age," Youre a TEENAGER");
// }else if (age>=20 && age<=59){
//     document.writeln(age," Youre a ADULT");
// }else if (age>60){
//     document.writeln(age," Youre a SENIOR-CITIZEN");
// }



// Q.3> Month Name
// Conditions:

// 1 → January
// 2 → February
// 3 → March
// ...
// 12 → December
// let month = prompt(" Enter A month number betwween 1-12 to know a month name ")

// if(month==1){
//   document.writeln( month,"=JANUAARY");
// }else if(month==2){
//   document.writeln( month,"=FEBRUARY");
// }else if(month==3){
//   document.writeln( month,"=MARCH");
// }else if(month==4){
//   document.writeln( month,"=APRIL");
// }else if(month==5){
//   document.writeln( month,"=MAY");
// }else if(month==6){
//   document.writeln( month,"=JUNE");
// }else if(month==7){
//   document.writeln( month,"=JULY");
// }else if(month==8){
//   document.writeln( month,"=AUGUST");
// }else if(month==9){
//   document.writeln( month,"=SEPTEMBER");
// }else if(month==10){
//   document.writeln( month,"=OCTOBER");
// }else if(month==11){
//   document.writeln( month,"=NOVEMBER");
// }else if(month==12){
//   document.writeln( month,"=DECEMBER");
// }else{
//     document.writeln("INVALID INPUT")
// }





// Q.4>Traffic Signal
// Conditions:
// red → Stop
// yellow → Wait
// green → Go

// let color = prompt("Enter a color name to know you've to STOP WAIT or GO")

// if(color=="red"){
//     document.writeln(color,"= it means STOP");
// }else if(color == "green" ){
//     document.writeln(color,"= it means GO");
// }else if(color == "yellow" ){
//     document.writeln(color,"= it means WAIT");
// }else{
//     document.writeln("INVALID INPUT");
// }

// Q.5 Electricity Bill
// Rules:
// 0-100 → Low bill
// 101-300 → Medium bill
// Above 300 → High bill


// let unit=prompt("Enter youre this months electricity bill units to know a amount range (LOW, MEDIUM, HIGH)")

// if(unit>=0 && unit<=100){
//     document.writeln(unit,"=LOW");
// }else if(unit>=101 && unit<=300){
//     document.writeln(unit,"=MEDIUM");
// }else if(unit>300){
//     document.writeln(unit,"=HIGH");
// }
//__________________________________________________________________________________________


//SWITCH CASE QUESTIONS AND ANSWERS

// Q.1 Number to Word

// let num=10;
// let word;
// switch(num){
//     case 1:
//         word = "ONE";
//     break;
//     case 2:
//         word = "TWO";
//     break;
//     case 3:
//         word = "THREE";
//     break;
//     case 4:
//         word = "FOUR";
//     break;
//     case 5:
//         word = "FIVE";
//     break;
//     case 6:
//         word = "SIX";
//     break;
//     case 7:
//         word = "SEVEN";
//     break;
//     case 8:
//         word = "EIGHT";
//     break;
//     case 9:
//         word = "NINE";
//     break;
//     case 10:
//         word = "TEN";
//     break;
//     default:
//         word="ENTER NO BETWEEN 1 TO 10"
// }
// document.writeln(word);


// Q.2>Season Checker
// summer → Hot season
// winter → Cold season
// rainy → Rain season

// let season = prompt( "enter a season to how feels in this season [ summer, winter, rainy]");
//  switch (season){
//     case "summer":
//         document.writeln("HOT SEASON");
//     break;
//      case "winter":
//         document.writeln("COLD SEASON");
//     break;
//      case "rainy":
//         document.writeln("RAIN SEASON");
//     break;
//     default:
//         document.writeln("Invalid Input");
//  }

// Q.3>User Role System
// Cases:

// admin → Full Access
// editor → Edit Access
// user → Read Only
// guest → Limited Access

// let role = prompt("Enter a role in website [admin,editor, user, guest] to know how much Access you have")

// switch(role){
//     case "admin":
//         document.writeln("Full Access");
//     break;
//     case "editor":
//         document.writeln("Edit Access");
//     break;
//     case "user":
//         document.writeln("Full Access");
//     break;
//     case "guest":
//         document.writeln("Limited Access");
//     break;
//     default:
//         document.writeln(" role is not available in web");

// }

// Q.4> Vehicle Type
// Cases:
// bike → Two Wheeler
// car → Four Wheeler
// truck → Heavy Vehicle
// let vehicle = prompt("enter a vehicle name [car,truck,bike] to know vehicle type");
// switch(vehicle){
//     case"car":
//     document.writeln("Four Wheeler");
//     break;
//      case"bike":
//     document.writeln("Two Wheeler");
//     break;
//      case"truck":
//     document.writeln("Heavy Vehicle");
//     break;
//     default:
//         document.writeln(" Enter valid name of vehicle");

// }
// Q.5>ATM Menu
// Cases:
// 1 → Check Balance
// 2 → Withdraw Money
// 3 → Deposit Money
// 4 → Exit

let option =prompt(" enter a option number [1-4]");
switch(option){
    case "1":
        document.writeln("Check Blance");
    break;
    case "2":
        document.writeln("Withdraw Money");
    break;
    case "3":
        document.writeln("Deposit Money");
    break;
    case "4":
        document.writeln("Exit");
    break;
    default:
        document.writeln("Enter a Valid Option No.")
}