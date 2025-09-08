
//  ----   Assignment No 3 ------ !

// ------------------ Question No 1 --------- !

var character = prompt("Enter a character (letter or number):");

if (!character){
    console.log("You didn't enter anything!");
} 
else { 
var firstChar = character[0];

//  Character Exchange in  ASCII code ! ----- 

var code = firstChar.charCodeAt(0);
console.log("You entered!", firstChar);
console.log("ASCII Code" , code);

if (code >= 48 && code <=57) {
    console.log("It is a number!");
}

else if (code >= 65 && code <=90) {
    console.log("It is an uppercase letter!");
}

else if (code >=97 && code <= 122) {
    console.log("It is an lowercase letter!");
}

else {
    console.log("It is some other character!")
}
}


















