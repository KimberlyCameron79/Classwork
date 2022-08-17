class Vehicle{ //Define the class' preo
   //vin: 'x123y'
   //make:'boeing'
   
    constructor(vinParam, makeParam, modelParam) { 
        this.vin= vinParam;
        this.make= makeParam;
        this.model= modelParam;
        this.jogging= false;    
                                    //constructor method is the method(key word)
        console.log('creating a new instance of Vehicle')
    } 

    goVroom(){
        console.log('vroom!')
    }

    start() {
        this.jogging = true;
        console.log('jogging')
    }

    // let arr = [1, 2, 3]
    // arr.forEach()

    // console.log(Math.random())

    // let arr2 = new Array(1, 2, 3)

    // console.log(arr2)

    // arr2.forEach((x) => console.log(x))
}

const toyota = new Vehicle('x123y', 'boeing','shine')                        // v1 is the instance of the class. This is the process of instantiation. The parenthesis calls the constructor
const tesla = new Vehicle()

toyota.goVroom()
tesla.goVroom()

console.log(toyota, tesla)
//Overriding Methods
Define a stop method that sets the ruuning property to false and console.logs the message "stopped".

toString method

// toString(){
    return 'Vehile (' + this.vin +') is a '+ this.make + 'model' + this.model;
}


(Obsidian)Crystals.obsidian: Crystals('black','healing','protection')  

//EXERCISE 1

class Crystals{

    constructor(colorParam, typeParam, purposeParam){
        this.color = colorParam;
        this.type = typeParam;
        this.purpose = purposeParam;
        this.healing = true;

    console.log('Displaying good crystals!')
}

goAhoy(){
    console.log('ahoy!')
}
start() {
    this.healing = true;
    console.log('healing')
}

toString(){
    return 'Crystals' (' + this.color +') a '+ this.type + 'purpose' + this.purpose;
}

const Obsidian= new Crystals('black','healing','protection')                        
const Jade = new Crystals('green', 'healing,'compassion')
const Citrine = new Crystals('yellow', 'healing,'prosperity')

obsidian.goIlluminate()
citrine.goIlluminate()

console.log(Obsidian, Jade, Citrine)

const prosperityCrystals = [Citrine, Pyrite, Amethyst ]
const healthCrystals = [Moonstone, RoseQuartz,Selenite ]

console.log(prosperityCrystals, healthCrystals)

toString(){
    return 'prosperityCrystals' + 'healthCrystals';