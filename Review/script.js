/*
Section Q + A
1. How do we assign a value to a variable? With the assignment operator. 

2. How do we change the value of a variable? Setting the parameter value in the new function. 
function start(){ variable=40
}

3. How do we assign an existing variable to a new variable? Using the assignment operator you can assign the value from an existing variable to another variable.
const myCheese;
myCheese= 3;
const myBread;
myBread=myCheese;

4. Remind me, what are declare, assign, and define? Declare is creating the variable.  Assign function copies all enumerable own properties from one or more source objects to a target object. A define is a function used to load the modules which are objects, functions or class.
function();  assign(); define();

5.What is pseudocoding and why should you do it?  Pseudo coding is referred to as fake code but utilized to write programs in an informal way by making the rules yourself.

SECTION STRINGS

1. Create a variable called firstVariable. const firstVariable;

2.Assign it the value of the string "Hello World". let firstVariable= 'Hello World!';

3.Change the value of this variable to some number.

4. Store the 

5. 200

*/
// Looping in Reverse

for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

//LOOPING THROUGH ARRAYS

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}

//NESTED LOOPS
// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

//WHILE LOOP
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}
// Do while Loop
// Write your code below
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);

//THE BREAK KEYWORD

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");

//Higher Order functions
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  isTwoPlusTwo();
  console.log(isTwoPlusTwo.name);

//HackerRank Book Problem

let frontFlip = Math.floor(p/2);
let backFlip = Math.floor((n/2)- frontFlip);

let result = Math.min(frontFlip, backFlip);
return result;

}
// Maria's basketball game

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let games = scores;
    let min = games[0];
    let max = games[0];
    
    let minRecord =0'
    let maxRecord =0;
    
    for (let score of games){
        if (max < score){
            max = score;
            maxRecord++;
        } 
        else if (score < min){
            min = score;
            minRecord++;
        }
    }
    return [maxRecord, minRecord];
}
console.log(readLine);
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}


// ARRAY METHODS
//MAP
//FILTER
//forEach

const nums = [1,2,3,4,5,6,7,8,9,10,0]

//array methods takes a callback function as an function as an argument.
//callbacks are functions that will run at a later time.
nums.forEach()

//Every method - determines if every number is greater than or equal to 0. Determine if every word shorter than 8 characters.

let test = nums.every(callback) // -> returns either true or false
console.log(nums.every(callback))//alternative 
//5+5+5 -> 15

//creating our very own callback function!
function myCallBack(element, index, array){
  if(element >= 0){
    return true  //see if the element pass the test, otherwise return false.
  }else{
    return false
  }
}

console.log('the result of our every array method check is ...')

let test2 = panagram.every((element) => element.length < 8)  //same as the function above. version with less syntax.

MDN Docs example of a callback 
const isBelowThreshold = (currentValue) => currentValue < 40;
 function isBelowThreshold(currentValue){       // same function as line 210 
  return currentValue < 40
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const result = nums.filter (nums => nums.length > 4)


