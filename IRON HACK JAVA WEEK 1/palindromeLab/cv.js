

var hacker1 = "Jude";
document.write(hacker1)

var hacker2 = prompt("The navigator's name is ");

if (hacker1.length > hacker2.length) {
    console.log ("The Driver has the longest name");
}
else if (hacker2.length > hacker1.length)  {
    console.log("Yo, navigator got the longest name");
}
else {
    console.log ("wow, you both got equally long names");
}

var hacker1 ="john"
var y = hacker1.toUpperCase();

for (let i = y.length - 1; i >= 0; i--) {
    console.log(y[i])
}
function reverseInput(str) {
    var reversed = str

    // here you loop and push things into reversed
    //for (int i = 0; i < str.length(); i++) {
        res = str.reverseInput(i) ;            
     }
    //return reversed
//}

var hacker1 ="john"
//var y = hacker1.reverse();

// //
// //1) 
// var splitArray = str.split("");

// //2)
// var reverseArray = splitArray.reverse();

// //3)
// var joinArray = reverseArray.join("");

function reverseString (str) {
    //1) 
    var splitArray = str.split("");
    
    //2)
    var reverseArray = splitArray.reverse();
    debugger
    //3)
    var joinArray = reverseArray.join("");
    debugger
    //4)
    return joinArray;
}

reverseString("john");




// 1) Try to make this write this code yourself
// 2) Try to come up with a shorte way writing


// function reverseString(str) {
//     return str;
// }
// reverseString("john");

var namesArray = [hacker1,hacker2];
namesArray.sort();

function printAlphabetically(){
    if (namesArray[0] === namesArray[1]){
        console.log("What?! You both got the same name?");
    } else if(namesArray[0] === hacker1){
        console.log("The driver's name goes first");
    } else if(namesArray[0] === hacker2){
        console.log("The navigator's name goes first");
     }
}
 
printAlphabetically();

var palindrome = prompt("Enter a Palindrome");

function joinPalindrome(){
    palindrome = palindrome.split(' ').join('');
    console.log(`User has chosen ${palindrome}`);
}

joinPalindrome();



function checkPalindrome(){
 var firstArray = "";
 var secondArray = "";
 for (let k = 0; k < palindrome.length; k++){
   firstArray += palindrome[k];
 }
 for ( let l = palindrome.length-1; l >= 0; l--){
   secondArray += palindrome[l];
 }
 if (firstArray === secondArray){
   console.log("This is indeed a palindrome")
 }
 else {console.log("This is not a palindrome");}
}

checkPalindrome();

// loops
// conditionals
// functions