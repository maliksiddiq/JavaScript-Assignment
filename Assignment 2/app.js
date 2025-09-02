
//  ----------   MATH EXPRESSIONS ------------- 

//  question no 1

//   Addition

//  var num1 =  3;
//  var num2 = 5;
//  var sum = num1 + num2;
//  document.write ("Sum of"+" " + num1 + " and " + num2 + " " + "is" + " " + sum); 

//  question no 2

// ------------- Subtraction ------ !

//  var num1 = 8;
//  var num2 = 4;
//  var subtract = num1 - num2;
//  document.write ("if you subtract" + num1 + " by " + num2 + " you get " + subtract);

// ------------- Multipication ------ !

//  var num1 = 5;
//  var num2 = 3;
//  var multipication = num1*num2;
//  document.write ("if you multiply " + num1 + " by " + num2 + ' you get ' + multipication);


// ------------- Divison ------ !

// var num1 = 9;
// var num2 = 3;
// var divison = num1 / num2;
// document.write ("if you divide " + num1 + " by " + num2 + " you get " + divison);

// ------------- Modulus ------ !

//  var num1 = 11;
//  var num2 = 3;
//  var reminder = num1 % num2;
//  document.write ("if you divide " + num1 + " by " + num2 + " you get the reminder " + reminder);

//  question no 3

//  var number;
//  document.write ("Value after variable declaration  is " + number + "</br>");

//  number = 5;
//  document.write ("Initial value is:" + number + "</br>");

//  var firstIncrement = ++number;
//  document.write ("Value After increment is: " + firstIncrement + "</br>");

//  var addition = number + 7;
//  document.write ("value after addition is: " + addition + "</br>" );

//  var decrement = --addition;
//  document.write ("Value after decrement is: " + decrement + "</br>");

//  var reminder = decrement % 3;
//  document.write ("The reminder is: " + reminder);


//  question no 4

//  var ticketPrice = 600; 
//  var total = ticketPrice*5;
//  document.write ("Total cost to buy 5 tickets to a movie is " + total);

//  question no 5

// document.write ("<h3>Table of any number</h3>");

// var a = +prompt ("Enter your number");
// var b = 1;

// document.write (a + " x " + b + " = " + a*b + "</br>") 
// document.write (a + " x " + ++b + " = " + a*b + "</br>") 
// document.write (a + " x " + ++b + " = " + a*b + "</br>") 
// document.write (a + " x " + ++b + " = " + a*b + "</br>") 
// document.write (a + " x " + ++b + " = " + a*b + "</br>") 
// document.write (a + " x " + ++b + " = " + a*b + "</br>") 
// document.write (a + " x " + ++b + " = " + a*b + "</br>") 
// document.write (a + " x " + ++b + " = " + a*b + "</br>") 
// document.write (a + " x " + ++b + " = " + a*b + "</br>") 
// document.write (a + " x " + ++b + " = " + a*b + "</br>") 


//  question no 6

// --------------------------------------------------------------------- ?


//  question no 7

// document.write ("<h1>Shopping Cart</h1>");

// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var charges = 100;

// document.write ("Price of item 1 is " + priceItem1 + "</br>");
// document.write ("Quantity of item 1 is " + quantityItem1 + "</br>");
// document.write ("Price of item 2 is " + priceItem2 + "</br>");
// document.write ("Quantity of item 2 is " + quantityItem2 + "</br>");
// document.write ("Shipping charges is " + charges + "</br></br>");

// var total = priceItem1*3 + priceItem2*7 + charges ;
// document.write ("Total cost of your order is "+ total );


//  question no 8 

// document.write ("<h1>Mark Sheet </h1></br></br>");

// var totalMarks = 980;
// var marksObtained = 804;

// var percentage = (marksObtained / totalMarks) *100;
// document.write ("Total marks: " + totalMarks +"</br>")
// document.write ("Obtained marks:" + marksObtained +"</br>")
// document.write ("Percentage:" + percentage + " % ");


//  question no 9

// document.write ("<h1>Currency in PKR</h1>")

// var usDollar = 104.80;
// var saudiRiyal = 28;

// var totalPkr = (usDollar*10) + (saudiRiyal*25);
// document.write ("Total currency in PKR: "+ totalPkr);


//  question no 10

// var number = 5;
// var result = ( (number + 5) *10 ) / 2;
// console.log(result);

//  question no 11

// document.write ("<h1>Age Calculator</h1></br>");

// var currentYear = 2025
// var birthYear = 2005
// var yourAge = currentYear - birthYear;
// document.write ("Current year: " + currentYear + "</br>");
// document.write ("Birth year: " + birthYear + "</br>");
// document.write ("Your Age: " + yourAge);

//  question no 12


//? Ans 13

// var snack = "chocolate chip";
// var currentAge = 15;
// var maximumAge = 65;
// var perDay = 3;
// document.write("<h1> The Lifetime Supply Calculator </h1>");
// document.write("Favorite Snack: " + snack + "<br />");
// document.write("Current Age: " + currentAge + "<br />");
// document.write("Estimated Maximum Age: " + maximumAge + "<br />");
// document.write("You will need " + ( ((maximumAge - currentAge) * perDay) + " " + snack) + " to last you until the ripe old age of " + maximumAge);

//! Chapter 02

//? Ans 1

// var a = 10;
// document.write("Result:" + "<br />");
// document.write("The value of a is:" + a + "<br />");
// document.write("...................................." + "<br /> <br />");
// document.write("The value of ++a is: " + ++a + "<br />");
// document.write("Now the value of a is: " + a + "<br /> <br />");
// document.write("The the value of a++ is: " + a++ + "<br />");
// document.write("The the value of a is: " + a + " <br /> <br />");
// document.write("The the value of --a is: " + --a + "<br />");
// document.write("Now the the value of a is: " + a + "<br /> <br />");
// document.write("The Value of a-- is: " + a-- + "<br />");
// document.write("Now the Value of a is: " + a);

//? Ans 2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;             // 1 - 0 + 1 + 1 = 2 
// document.write("a is: " + a + "<br />");
// document.write("b is: " + b + "<br />");
// document.write("result is: " + result);

//? Ans 3

// var userName = prompt("Enter Your Name");
// var greet = "Hello Sir ";
// alert(greet + userName + " !");

//? Ans 4


// var a = prompt("Enter a number for table");
// var b = 1;
// var c = 1;

// if(a == 0){
//     a = 5;
// }

// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);
// console.log(a + " * " + b++ + " = " + a*c++);

//? Ans 5 

// var english = +prompt("Enter Your English Marks");
// var math = +prompt("Enter Your Math Marks");
// var urdu = +prompt("Enter Your Urdu Marks");
// var subMarks = 100;
// var totalMarks = 300;
// var totalObtained = english + math + urdu;
// var totalPercentage = totalObtained / totalMarks * 100;

// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>");
// document.write("English " + subMarks + " " + english + " " + english / subMarks * 100 + "%" +"<br />");
// document.write("Math " + subMarks + " " + math + " " + math / subMarks * 100 + "%" + "<br />");
// document.write("Urdu " + subMarks + " " + urdu + " " + urdu / subMarks * 100 + "%" + "<br />");
// document.write("Total " + totalMarks + " " + totalObtained + " " + totalPercentage + "%");

//! Chapter 03

//? Ans 1

// var city = "Karachi";
// var userInput = prompt("Enter Your City Karachi or else");
// if(userInput === "Karachi" || userInput === "karachi"){
//     alert("Welcome to city of lights");
// }

//? Ans 2

// var gender = prompt("Enter Your Gender Male or Female");
// if(gender === "Male" || gender === "male"){
//     alert("Good Morning Sir");
// }
// else if(gender === "Female" || gender === "female"){
//     alert("Good Morning Ma'am");
// }
// else{
//     alert("Enter a Valid Gender");
// }

//? Ans 3

// var color = prompt("Enter a Color of Trafic Signal Light");
// if(color === "Red" || color === "red"){
//     alert("Must Stop");
// }
// else if(color === "Yellow" || color === "yellow"){
//     alert("Ready to move");
// }
// else if(color === "Green" || color === "green"){
//     alert("Move Now")
// }
// else{
//     alert("Enter a Valid Color")
// }

//? Ans 4

// var fuel = prompt("Enter a current fuel in your car");
// if(fuel < 0.25){
//     alert("Please refil the fuel in your car")
// }

//? Ans 5

//? Ans 6

// var english = +prompt("Enter Your English Marks");
// var math = +prompt("Enter Your Math Marks");
// var urdu = +prompt("Enter Your Urdu Marks");
// var totalMarks = 300;
// var totalObtained = english + math + urdu ;
// var totalPercentage = totalObtained / totalMarks * 100;
// var grade;
// var remarks;

// if(totalPercentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if(totalPercentage >= 70){
//     grade = "A";
//     remarks = "Good"; 
// }
// else if(totalPercentage >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if(totalPercentage < 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1>" + "<br />");
// document.write("Total marks : " + totalMarks + "<br />");
// document.write("Marks obtained : " + totalObtained + "<br />");
// document.write("Percentage : " + totalPercentage + "<br />");
// document.write("Grade : " + grade + "<br />");
// document.write("Remarks : " + remarks);


// var secretNum = 4;
// var close = 4 + 1;
// var userInput = prompt("Guess a secret number between 1 to 10");

// if(userInput == secretNum){
//     alert("Bingo! Correct answer");
// }
// else if(userInput == close){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Sorry! Try Again");
// }


