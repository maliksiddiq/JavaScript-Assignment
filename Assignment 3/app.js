
//  ------------  Assignment No 3 ------ 

//  ------ Question No 1 --------- !

// var character = prompt("Enter a character (letter or number):");

// if (!character){
//     console.log("You didn't enter anything!");
// } 
// else { 
// var firstChar = character[0];

//  //  Character Exchange in  ASCII code ! ----- 

// var code = firstChar.charCodeAt(0);
// console.log("You entered!", firstChar);
// console.log("ASCII Code" , code);

// if (code >= 48 && code <=57) {
//     console.log("It is a number!");
// }

// else if (code >= 65 && code <=90) {
//     console.log("It is an uppercase letter!");
// }

// else if (code >=97 && code <= 122) {
//     console.log("It is an lowercase letter!");
// }

// else {
//     console.log("It is some other character!")
// }

// }


//  ------ Question No 2 --------- !

// var num1 = parseInt(prompt ("Enter First integer number:"));
// var num2 = parseInt(prompt ("Enter Second integer number:"));

// if (num1 > num2) {
//     console.log("The larger number is" + " " + num1);
// }

// else if (num2 > num1) {
//     console.log("The larger number is" + " " + num2);
// }

// else {
//     console.log("Both number are same!")
// }  


//  ------ Question No 3 --------- !

// var getNumber = parseInt(prompt ("Enter a Number:"));

// if (getNumber > 0) {
//     console.log("This is a Positive Number" + " " + getNumber);
// }

// else if(getNumber < 0) {
//     console.log("This is a Negative Number" + " " + getNumber);
// }

// else {
//     console.log("This number is Zero" + " " + getNumber);
// }


//  ------ Question No 4 --------- !

// var alphabet = prompt ("Enter a single letter (a to z) or (A to Z)");

// if (alphabet === "a" || alphabet === "e" ||  alphabet === "i" ||  alphabet === "o" || alphabet === "u" 
// || alphabet === "A" ||  alphabet === "E" || alphabet === "I" ||  alphabet === "O" || alphabet === "U"
// )
// {
//    console.log("True"); 
// }
// else {
//     console.log("False");
// }


//  ------ Question No 5 --------- !

// var secretPassword = "12345";
// var userPassword = prompt ("Enter a Password:");

// if (!userPassword) {
//     console.log("Please enter a password!")
// }
// else if (userPassword == secretPassword) {
//     console.log("Correct! The password you entered matches the original password")
// }
// else {
//     console.log("Incorrect Password!");
// } 


//  ------ Question No 6 --------- !

// var greeting;
// var hour = prompt ("Enter a time");

// if (hour < 18) {
//     greeting = "Good Day"
//     console.log(greeting);
// }
// else {
//     console.log("Good evening");
// }


//  ------ Question No 7 --------- !

// var userInput = prompt ("Enter a time in clock format");

// if (userInput >= "0000" && userInput <= 1159) {
//     console.log("Good Morning");
// }

// else if (userInput >= 1200 && userInput <= 1659) {
//     console.log("Good Afternoon");
// }

// else if (userInput >= 1700 && userInput <= 2059) {
//     console.log("Good Evening");
// }
// else if (userInput >= 2100 && userInput <= 2359) {
//     console.log("Good Night");
// }
// else {
//     console.log("Not a valid time you are enter!");
// }


//  --------------- Array ------------------------------------ !

//  ------ Question No 8 --------- !

// var studentName = [ ];
// studentName.push("Saad Ali");
// studentName.push("Mahboob Ahmed");
// studentName.push("Hussain");
// console.log(studentName);

//  ------ Question No 9 --------- !

// var studentName = new Array ( );
// studentName.push("Malik Siddiq");
// studentName.push("Malik Zaheer");
// console.log(studentName);

//  ------ Question No 10 --------- !

// var stringArray = ["Siddiq" , "Mahboob" , "Hussain"];
// console.log(stringArray)


//  ------ Question No 11 --------- !

// var numArray = [1 , 2 , 3 , 4 , 5];
// console.log(numArray);


//  ------ Question No 12 --------- !

// var bolleanArray = [true , false];
// console.log(bolleanArray);


//  ------ Question No 13 --------- !

// var mixedArray = [1 , "Siddiq" , 2 , true , 3 , undefined , 4 , null];
// console.log(mixedArray);


//  ------ Question No 14 --------- !

// var qualification = [  "SSC" ,  "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];
// document.write("<h1>Qualifications</h1>");

// document.write("1) " + qualification[0] + "</br>");
// document.write("2) " + qualification[1] + "</br>");
// document.write("3) " + qualification[2] + "</br>");
// document.write("4) " + qualification[3] + "</br>");
// document.write("5) " + qualification[4] + "</br>");
// document.write("6) " + qualification[5] + "</br>");
// document.write("7) " + qualification[6] + "</br>");
// document.write("8) " + qualification[7] + "</br>");


//  ------------ Second Methood ------------  !

// document.write("<ol>")

// for (var i = 0; i < qualification.length; i++){
//     document.write("<li>" + qualification[i] + "</li>")
// }

// document.write("</ol>")


//  ------ Question No 15 --------- !

// var studentName = ["Michael" , "John" , "Tony"];
// var studentScore = [320 , 230 , 480 ];
// var percentage1 =  (studentScore[0]  /  500)*100;
// var percentage2 =  (studentScore[1]  /  500)*100;
// var percentage3 =  (studentScore[2]  /  500)*100;

// document.write( "Score of " + studentName [0] + " is " + studentScore[0] + ". Percentage:" + percentage1 + " % " + "</br>");
// document.write( "Score of " + studentName [1] + " is " + studentScore[1] + ". Percentage:" + percentage2 + " % " + "</br>");
// document.write( "Score of " + studentName [2] + " is " + studentScore[2] + ". Percentage:" + percentage3 + " % " + "</br>");


//  ------ Question No 16 --------- !

// var colorName = ["Purple " , " Black " , " Orange "];
// document.write(colorName.join(" , "));

// var askToUser1 = prompt("What color you want to add at the beginning!");

// colorName.unshift(askToUser1);
// document.write(colorName.join(" , "));

// var askToUser2 = prompt("What color you want to add at the end!")
// colorName.push(askToUser2);
// document.write(colorName.join(" , "));

// colorName.unshift("Pink", "White");
// document.write(colorName.join(" , "));

// colorName.shift();
// document.write(colorName.join(" , "));

// colorName.pop();
// document.write(colorName.join(" , "));

// var askToUser3 = prompt ("In which index you want to add a color! ");
// var askcolor = prompt ("What color you want to add");
// colorName.splice(askToUser3 ,  0 , askcolor);
// document.write(colorName.join(" , "));

// var askUser4 = prompt("In which index you want to delete a color! ");
// var askUser5 = prompt("How many colors do you want to delete?");
// colorName.splice(askUser4 , askUser5);
// document.write(colorName.join(" , "));

// document.write(colorName.join(" , "));
