//for loop Questions and answers

//Q.1> Reverse Counting 
// Print numbers from 50 to 1
// let i=50;
// for( i=50;i>=1;i--){
//     document.writeln( i,"<br>");
// }



//Q.2>Even Numbers
// Print all even numbers between 1 and 100
// let e = 100;
// for(e=1;e<=100;e++){
//     if(e%2===0){
//         document.writeln(e,"<br>");
//     }
    
// }



//Q.3>Odd Numbers

// Print all odd numbers between 1 and 100

// let o=100;
// for(o = 1;o <= 100; o++){
//     if(o % 2 !== 0){
//         document.writeln(o, "<br>")
//     }
// }


//Q.4> Multiplication Table
// get a number from user and print multipliction table of no

// let m=prompt("Enter A Number To Print a Multiplication table of this No.");

// for(let i=1; i<=10;i++){
//     let num = m*i;
//     document.writeln(m ,"x", i,"=" ,num,"<br>");
// }

// Q.5> Repeated Number Pattern
// Print:
// 1
// 22
// 333
// 4444
// 55555

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += i;
//     }
//     document.writeln(row,"<br>");
// }
// _________________________________________________________________________________________
 

//WHILE loop Questions and answers

//Q.1> Print numbers 1 to 50
// let i = 1;

// while(i <= 50){
//    document.writeln(i ,"<br>");
//     i++;
// }

//Q.2> Print numbers 50  to 1

// let i = 50;

// while(i >= 1){
//    document.writeln(i ,"<br>");
//     i--;
// }

//Q.3> Sum of numbers
// let i = 1;
// let sum = 0;

// while(i <= 50){
//     sum = sum + i;
//     i++;
// }
// document.writeln(sum,"<br>");


// Q.4>Print even numbers
// let i = 2;

// while(i <= 100){
//     if(i % 2===0){
//         document.writeln(i, " <br>");
//     }
//     i++;
// }

// Q.5>Print odd numbers
// let i = 1;

// while(i <= 100){
//     if(i % 2!==0){
//         document.writeln(i, " <br>");
//     }
//     i++;
// }



// _________________________________________________________________________________________



//DO_WHILE loop Questions and answers

// Q.1> Print numbers 1 to 5
// let i = 1;

// do {
//     document.writeln(i,"<br>");
//     i++;
// } while(i <= 5);



//Q.2>User enters correct password
// let password = "";
// let count = 1;

// do {
//     password = "1234";
//     document.writeln("Attempt " + count);
//     count++;
// } while(password !== "1234");

// document.writeln("Login successful");

//Q.3>Reverse counting
// let i = 50;

// do {
//    document.writeln(i,"<br>");
//     i--;
// } while(i >= 1);


//Q.4>Print even numbers
// let i = 1;

// do {
//     if (i % 2 === 0) {
//         document.writeln(i + " <br>");
//     }
//     i++;
// } while (i <= 100);

//Q.5>Print odd numbers
let i = 1;

do {
    if (i % 2 !== 0) {
        document.writeln(i + " <br>");
    }
    i++;
} while (i <= 100);
