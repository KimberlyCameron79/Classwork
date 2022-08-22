/* SECTION Q + A
let Dinner = []

function cookDinner () {



const myCheese;
myCheese= 3;
const myBread;
myBread=myCheese;

declare();  assign(); define()

const myGrilledTrout = Protein;

}
*/
/*
let firstVariable = 'Hello World!'

firstVariable = 200;

let secondVariable = firstVariable;

secondVariable = 'Shopping'   
    
 //200

 let yourName = 'Kimberly';

 console.log(`Hello, my name is ${yourName}`)

//SECTION C BOOLEANS

const a = 4;
const b = 53;
const c =57;
const d = 16;
const e = 'Kevin'

console.log(a !== b);
console.log(c !== d);
console.log('Name' === 'Name');

console.log(true !== false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(48 !== '48');

// Section D farm

let animal = 'cow'

if (animal === 'cow') {
   console.log('moooo');
} else {
    console.log('Hey! You\'re not a cow')
}

//DRIVER'S ED

let age = 16

if (age >= 16){

    console.log('Here are the keys!')
} else{
    console.log('Sorry, you\'re too young')
}

//LOOPS THE BASICS

for(let i = 0; i <= 10; i++){
    console.log(i)
}

for(let i = 10; i <= 400; i++){
    console.log(i)
}

for(let i = 12; i <= 4000; i+=3){
    console.log(i)
}

// GET EVEN

for(let i = 1; i <= 100; i++){
    if (i % 2 === 0)
    console.log(i)
}
//C. GIVE ME FIVE

for(let i =5; i <= 100; i+=5){
    if(i*5)
    console.log(`I found a ${[i]}. High five!`)
}

for(let i =3; i <= 100; i+=3){
    if(i*3)
    console.log(`I found a ${[i]}. Three is a crowd!`)
}

for(let i = 1; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
    console.log(`I found a ${[i]}. High five! Three is a crowd~.`)
} else if (i % 5 === 0 ){
    console.log(`I found a ${[i]}. High five!`);
} else if(i % 3 === 0){
    console.log(`I found a ${[i]}. Three is a crowd.`);
}
}

//SAVINGS ACCOUNT
//1.
let bankaccount = 0;
for (let i = 1; i <= 10; i++){
    bankaccount += i;
}
console.log(bankaccount);

//2.
let mybankaccount = 0;
for (let i = 1; i <= 100; i++){
    mybankaccount += i*2;
}
console.log(mybankaccount);

//ARRAYS & CONTROL FLOW
// A. TALK ABOUT IT
//1. What are the things in an array called? Ordered list of values which are also called elements.

//2. Do Arrays guarantee those things will be in order?  No

//3. What real-life thing could you model with an array? Grocery lists.

//B. EASY DOES IT.

let quotes= ["To be or not to be", "If you can dream it, you can do it.", "Be curious, not judgmental"];


//C. ACCESSING ELEMENTS
//1.
    const randomThings = [1, 10, "Hello", true]

    console.log(randomThings[0]);

//2.
    randomThings[2]="World";
    console.log(randomThings[2]);
//3.
    console.log(randomThings);

//D. CHANGE VALUES
//1.
    const ourClass = ["Salty", "Zoom","Sardine", "Slack", "Github"]
    console.log(ourClass[2]);

    ourClass[4]="Octocat";
    ourClass.push="Cloud City";

    console.log(ourClass);
   
//MIX IT UP
    const myArray = [5, 10, 500, 20]
//1.
    myArray.push ="Aegon";
    myArray.push ="Atlantis";
//2.
    myArray.shift();
//3.
    myArray.unshift("Bob Marley");
//4.
    myArray.pop();
    console.log(myArray);
//5. The array was mutated because the first array changed after utilizing the reverse method.
myArray.reverse();
console.log(myArray);

//BIGGIE SMALLS

let x = 0;
if(x < 100){
    console.log('little number')
} else{
    console.log('big number')
}
   


//MONKEY IN THE MIDDLE

let y = 9;
if(y < 5){
    console.log('little number')
} else if(y > 10){
    console.log('big number')
}else{
    console.log('monkey')
}
*/
/*
//WHAT'S IN YOUR CLOSET

    const kristynsCloset = [
        "left shoe",
        "cowboy boots",
        "right sock",
        "GA hoodie",
        "green pants",
        "yellow knit hat",
        "marshmallow peeps"
    ];

    const thomsCloset =[
        "grey button-up",         //Thoms shirts
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ],[
           // These are Thom's pants
        "dark grey jeans",
        "jeans",
        "PJs"
    ],[
          // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
        // ];
    //What's Kristyn wearing today?

        console.log("Kristyn is rocking that" + kristynsCloset[2] + " today !")

// Kristyn just bought some new shades!
        kristynsCloset[6]= "raybans"

//Kristyn spilled coffee on her hat ... modify this item to read " stained knit hat" instead of yellow. 
        kristynsCloset[5] = "stained knit hat"
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
           thomsCloset[0][0];

           //In the same way, access one item from Thom's pants array.
           thomsCloset[1][1];

           //Access one item from Thom's accessories array.
           thomsCloset[2][2];

           //Log a sentence about what Thom's wearing. 
           console.log(`Thom is looking dapper in a ${thomsCloset[0][0]}, ${thomsCloset[[1][1]]}, and $[thomsCloset[2][2]]!`);

           //Get more specific about about kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
           thomsCloset[1][2] = "Footie Pajamas";
           */

           //FUNCTIONS
           //A

           //console.log(printGreeting("Slimer"));

           let printGreeting = function(name){
                console.log(`Hello there, ${name}!`)
           }

           printGreeting("Slimer");

           //B  printCool

           //console.log(printCool("Captain Reynolds"));

           let printCool = function(name){
            console.log(` ${name}! is cool`);
       }
        printCool("Captain Reynolds");
        
        //C calculateCube

        let calculateCube = function(num){
            console.log(num * num * num);
        }

        calculateCube(5);

        //D isVowel

        let isVowel = function(char){
            if(char.toLowerCase() == "a" || char.toLowerCase == "e" || char.toLowerCase == "i" || char.toLowerCase == "o" || char.toLowerCase == "u"){
                return true;
            }
                return false
        }
        console.log(isVowel("U"));

        let getTwoLengths = function(strOne, strTwo){

            return [strOne.length, strTwo.length];
        }
        console.log(getTwoLengths("lasanga", "macaroni"));
/*
//F getMultipleLengths

        let multipleLengths = function (array){

            let result=[];
            for(i=0; i < array.length; i++){
                result.push (array[i].length);
            }
        }
        return result;

       console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); 
*/

//G maxOfThree

let maxOfThree = function(numOne, numTwo, numThree) {

    let max = 0;
    if (numOne >= numTwo && numOne >= numThree){
        max = numOne;
    }else if (numTwo >= numOne && numTwo >= numThree){
        max = numTwo
    }else if (numThree >= numOne && numThree >= numTwo){
        max = numThree;
    }
        return max;
}
    console.log(maxOfThree(6, 9, 1));
    console.log(maxOfThree(8, 5, 9));
    console.log(maxOfThree(3, 9, 4));


    //H printLongestWord

    let printLongestWord = function(arrayOfStrings){
        let longestWord = arrayOfStrings[0];
        for(let i=0; i < arrayOfStrings.length; i++){
            if(arrayOfStrings[i].length > longestWord.length){
                longestWord = arrayOfStrings[i];
            }
        }
        return longestWord;
    }
    console.log(printLongestWord(["BoJack", "Princess", "Diane","a", "Max", "Peanutbutter", "big"]));

    //OBJECTS
    // A Make a user object

    let user = {
        name: "Customer Name",
        email:"customer@gmail.com",
        age: 0,
        purchased: []
    }

    // B. Update the user

    user.email = "jcustomer@gmail.com";
    user.age++;

// C. Adding keys and values
//You have decided to add your user's location to the date that you want to collect. 
//Without changing the original user object, add a new key location to the object,
//and give it a vlaue or some-or-other location ( a string).

user.location ="Garfield";

// D. Shopaholic
//Our user has purchased an item!
//They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
//Our user has purchased an item!
//They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
//Our user has purchased an item!
//They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
//Console.log just the "Merino jodhpurs" from the purchased array.

user.purchased.push ("carbohydrates");
user.purchased.push ("peace of mind");
user.purchased.push ("Merino jodhpurs");

console.log(user.purchased[2]);

//E. Object-within-Object


user.friend = {
    name: "Danielle",
    age: 0,
    location:"Lawrenceville",
    purchased: []
}

console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);

//F. LOOPS

for (let i= 0; i < user.purchased.length; i++){
    console.log(user.purchased[1]);
}

for (let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
}

//G. FUNCTIONS CAN OPERATE AN OBJECTS

let updateUser = function(){
    user.age++;
    user.name = user.name.toUpperCase();
}
updateUser();
console.log(user.name);
console.log(user.age);

let oldAndLoud = function(person){
    person.age++;
    person.name = person.name.toUpperCase();
}
oldAndLoud(user.friend);
console.log(user.friend.name);
console.log(user.friend.age);