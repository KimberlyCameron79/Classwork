/*
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
*/

class BankAccount {

    constructor () {

    this.name: name;
    this.balance: = balance;
    this.acctNum = Math.floor(Math.random()* 1000)
}
    deposit(money) {
        this.balance += money
        console.log ('current balance after deposit: ' + this.balance())

    }    
    withdraw(numoney){
        this.balance -= money
        console.log('current balance after withdraw: ' + this.balance)
    }
}

    const kim = new BankAccount('Kim', 100000)
    const josh = new BankAccount('Josh', 5)

    kim.withdraw(1000)

    console.log(kim)
    console.log(kim)
    console.log(kim)



  

   
}