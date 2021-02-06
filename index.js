/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/

let test = ("this is a string");
console.log(test)

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/
let sum =(10 + 20);
console.log(sum)


/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/

//let random = ();
//console.log(random)

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: "Danilo",
    surname: "De Matteis",
    age: 31,
};
console.log(me)


/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age;
console.log(me)


/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/

me.skills =["html", "css", "javascript"];
console.log(me)

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/

delete me.skills[2];
console.log(me)

// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/

function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

Math.floor(Math.random() * 6) + 1;

/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/


function whoIsBigger(num5) {
    if (num5 > num3)
    {
        return true
    } else {
        return false
    }
} 

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const splitMe = "After one hour I got it"
const words = splitMe.split(' ');
console.log(words);


/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/

let str = "deleteOne";
let n = 1;
str = str.substring(n);
console.log(str);


/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

function onlyLetters(p) {
    if document.myForm.name.value =="" )
        alert("Enter a name");
        document.myForm.name.focus();
        return false;
    }
    
}
 