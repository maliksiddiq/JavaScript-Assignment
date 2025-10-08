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



