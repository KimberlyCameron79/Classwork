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