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
