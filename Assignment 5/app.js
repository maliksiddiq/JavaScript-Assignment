console.log('JavaScript Connected!');

//  Assignment No 5  JS ?

// ------ Question no 1

// let firstName = prompt('Type your first Name:');
// let lastName = prompt('Type your last Name:');

// var fullName = `${firstName} ${lastName}`;

// alert('Welcome to my website! ' + fullName);


// ------ Question no 2

// let mobilePhone = prompt('Type your Favourite Mobile Phone Name :');

// document.write(`My Favourite Phone Name is: ${mobilePhone} Length of UserInput: ${mobilePhone.length}`);


// ------ Question no 3


// let countryName = 'Pakistani';
// countryName.indexOf('n');

// document.write(`String: ${countryName} </br>`);
// document.write(`Index of: 'n' is 7`);


// ------ Question no 4

// let string = 'Hello World';
// string.lastIndexOf('l');

// document.write(`String: 'Hello World' </br>last  index of  l :  'l' is 9`);


// ------ Question no 5

// let checkCharacter = 'Pakistani';
// document.write(`String: Pakistani </br> Character at index 3: ${checkCharacter.charAt(3)}`);


// ------ Question no 6

// let firstName = prompt('Type your first Name:');
// let lastName = prompt('Type your last Name:');

// let fullName = firstName.concat(' ' +lastName);

// document.write(`Full Name of user: ${fullName}`);


// ------ Question no 7

// let  cityName1 = 'Hyderabad';
// let cityName2 = cityName1.replace('Hyder' , 'Islam');

// document.write(`Before Replacement: ${cityName1} </br> After Replacement: ${cityName2}`);


// ------ Question no 8

// let message1 = 'Ali and Sami are best friends. They play cricket and football together.';
// let message2 = message1.replaceAll('and' , '&');
// document.write(`Message Before Replacement and: ${message1} </br>Message After Replacement and: ${message2}`);


// ------ Question no 9

// let firstNum = '472';
// let secNum = +firstNum;
// document.write(`Value: ${firstNum} </br> 'Type String: </br> Value: ${secNum} </br> 'Type Number:`);


// ------ Question no 10

// let dish = prompt('Type your Favourite Dish Name:');
// let capitalLetters = dish.toUpperCase();

// document.write(`User Input: ${dish} </br> Upper case: ${capitalLetters}`);


// ------ Question no 11   Logic

// var userInput = prompt(`Type your Favourite Counrties Name`);

// var result = '';

// var isStart = true;

// for (var i = 0; i <br userInput.length; i++){
//     var char = userInput[i];

//     if(isStart){
//         result += char.toUpperCase();
//         isStart = false;
//     }
//     else {
//         result += char.toLowerCase();
//     }

//     if (char === ' '){
//         isStart = true;
//     }
// }

// console.log(result);


// ------ Question no 12

// let num = 35.36;
// let string = num.toString().replace('.','');

// document.write(`Number: ${num} </br> String: ${string}`);


// ------ Question no 13    Logic

// let userName = prompt('Type Your Name:');
// let save = userName;

// let isValid = true;

// for (let i = 0; i < userName.length; i++){

//     if (userName[i] == '!' || userName[i] == '@' || userName[i] == ',' || userName[i] == '.') {
//         alert ('Please Enter a Valid Number!');
//        isValid = false;
//        break; 
//     }
// }

//  if (!userName) {
//     alert ('Please Enter your Name:')
// }else if(userName) {
//     alert (`${userName} Name is accepted!`); 
// }


// ------ Question no 14   Logic

// let userOrder1 = prompt('Welcome to Rahat bakery. What do you want to order')
// let userOrder2 = userOrder1.toLowerCase();

// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];

// if (userOrder2 == 'cake' || userOrder2 == 'apple pie' ||  userOrder2 == 'cookie' || userOrder2 == 'chips' || userOrder2 == 'patties' ){
//     document.write(`${userOrder2} is available  in our bakery:`);
// }
// else {
//     document.write(`We are sorry ${userOrder2} is not available in our bakery!`);
// }


// ------ Question no 15

// let password = prompt("Enter your password:");

// let hasAlphabet = false;
// let hasNumber = false;

// // Condition 1: Length check
// if (password.length < 6) {
//   alert("Password must be at least 6 characters long!");
// } 
// // Condition 2: Should not start with a number
// else if (!isNaN(password[0])) {
//   alert("Password should not start with a number!");
// } 
// else {
//   // Condition 3: Check for alphabets and numbers
//   for (let i = 0; i < password.length; i++) {
//     let char = password[i];
    
//     if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//       hasAlphabet = true;
//     }
//     if (char >= '0' && char <= '9') {
//       hasNumber = true;
//     }
//   }

//   if (hasAlphabet && hasNumber) {
//     alert("Valid password!");
//   } else {
//     alert("Password must contain both letters and numbers!");
//   }
// }



// --------------------------------------------------------


// ------ Question no 16

// let universityName = 'University of karachi';
// let arr = universityName.split('');

// for (let i = 0; i <br arr.length; i++) {
//     document.write(arr[i] + "</br>");
// }


// ------ Question no 17

// let userInput = prompt('Type your favourite country Name:');
// let lastCharacter = userInput[userInput.length  -1];

// document.write(`User input: ${userInput} </br> Last Character of userInput is: ${lastCharacter}`);


// ------ Question no 18

// let  sentence = 'The quick brown fox jumps over the lazy do';
// let str = sentence.toLowerCase();
// let words = str.split(' ');

// let count = 0;

// for (let i = 0; i <br str.length; i++) {

//     if(words[i] === 'the' ) {
//       count++; 
//     }

// }

// console.log("Number of occurrences of 'the':", count);

//  ---------------------------------------------------------------------------------------------------------------------------------


//  Maths Methods

// ------ Question no 19

// let userInput = +prompt("Enter a positive integer:");

// document.write("number: " + userInput + "<br>");
// document.write("round off value: " + Math.round(userInput) + "<br>");
// document.write("floor value: " + Math.floor(userInput) + "<br>");
// document.write("ceil value: " + Math.ceil(userInput));



// ------ Question no 20


// let userInput = +prompt('Enter a negative floating point Number:');

// document.write(`Number: ${userInput} </br>`)
// document.write("round off value: " + Math.round(userInput) + "<br>");
// document.write("floor value: " + Math.floor(userInput) + "<br>");
// document.write("ceil value: " + Math.ceil(userInput));



// ------ Question no 21


// let userInput = +prompt("Enter a number:");

// let absoluteValue = Math.abs(userInput);

// document.write("The absolute value of " + userInput + " is " + absoluteValue);


// ------ Question no 22

// let diceValue = Math.floor(Math.random() * 6) + 1;

// document.write("Random dice value: " + diceValue);


// ------ Question no 23

// let diceValue = Math.floor(Math.random() * 6) + 1;  // 1 to 6

// if (diceValue % 2 === 0) {
//   document.write("Random dice value: " + diceValue + "<br>");
//   document.write("Random coin value: Tails");
// } else {
//   document.write("Random dice value: " + diceValue + "<br>");
//   document.write("Random coin value: Heads");
// }


// ------ Question no 24

// let random = Math.floor(Math.random() * 100 )+ 1;

// document.write(`Random num between 1 and 100: ${random}`);


// ------ Question no 24

