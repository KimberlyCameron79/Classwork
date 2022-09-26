// /*
// class Vehicle{ //Define the class' preo
//    //vin: 'x123y'
//    //make:'boeing'
   
//     constructor(vinParam, makeParam, modelParam) { 
//         this.vin= vinParam;
//         this.make= makeParam;
//         this.model= modelParam;
//         this.jogging= false;    
//                                     //constructor method is the method(key word)
//         console.log('creating a new instance of Vehicle')
//     } 

//     goVroom(){
//         console.log('vroom!')
//     }

//     start() {
//         this.jogging = false;
//         console.log('jogging')
//     }
//     toString(){
//     return 'Vehile (' + this.vin +') is a '+ this.make + 'model' + this.model;
        
//     }
//     // let arr = [1, 2, 3]
//     // arr.forEach()

//     // console.log(Math.random())

//     // let arr2 = new Array(1, 2, 3)

//     // console.log(arr2)

//     // arr2.forEach((x) => console.log(x))
// }

// const toyota = new Vehicle('x123y', 'boeing','shine')                        // v1 is the instance of the class. This is the process of instantiation. The parenthesis calls the constructor
// const tesla = new Vehicle()
// const rangerover = new Vehicle()

// toyota.goVroom()
// tesla.goVroom()

// console.log(toyota, tesla, rangerover)

// let arr = [1,2,3]
// let arr2= new Array()

// console.log(toyota.toString())
// */

//EXERCISE 1

class Cat{

    constructor(nameParam, breedParam, legsParam){
        this.name = nameParam;
        this.breed = breedParam;
        this.legs = legsParam;
        this.fiesty = true;

    console.log('Cats were once guardians of the pyramids.')
}

meow(){
    console.log('meow!')
}
start() {
    this.fiesty = true;
    console.log('fiesty')
}

toString(){
    return this.name  + 'is a '+ this.breed + 'with' + this.legs;
}

const fanCat=['Persian', 'Siamese', Bengal];


console.log(Perian.toString())



    //EXERCISE

    class Pirate{
        constructor(nameParam, treasureParam, ageParam)
            this.name;
            this.treasure;
            this.age;
    }
    shout(){
        console.log('Ahoy!');  
  }
    empty(){
        console.log('Empty your bags!')
    }
  toString(){
    return 'My name is' + this.name + 'and I am ' + this.age + 'years old and I'm taking the' + this.treasure;
  }

  const jollyRoger = [new Pirate('Viking','Gold', 24), new Pirate('Buccaneer','Diamond', 28), new Pirate('Corsairs', 'Silver', 32)];
  const blackPearl = [new Pirate('Filibusters'Emeralds', 48), new Pirate('Privateers','Rubies', 37), new Pirate('Blackbirds', 'Iron', 43)];
    //EXERCISE 3
    
    class Car {
        constructor(number) {
            this.number = number
        }
    }

    const freighter = []
        for(let i=0; i < 100; i++){
            freighter.push(new Car(i));

        }