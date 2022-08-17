class Governor{       

   static collegeGraduate = true; 
   static citizen ="US Citizen"
    constructor(name,state, years){
        this.name = name;
        this.state = state;
        this.yearsserved = years;
    }
    static resident(){
        console.log("I have lived in this state for at least 6 years!")
    }
}
const G1 = new Governor("Murphy","NJ",8)
Governor.resident()
console.log(Governor.collegeGraduate)
console.log(Governor.citizen)

//Inheritance question

class Person{
    constructor(Name, age, place) {
    this.name = name;
    this.age = age;
    this.place = place;
    this.breath = true
    this.drink = true
    this.eyes = 2
}   

shelter(){
    console.log("I have some place to live in.")
}

food(favoritefood){
    console.log(`I love ${favoritefood}`)
}
beverage(favdrink){
    
    console.log(`My favorite drink is${favdrink}`)
}
}