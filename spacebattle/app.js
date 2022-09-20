//connect the tages to an object
// create if statements for hits and accuracy.
// create a loop for attacking, at the end of eaach iteration, prompt damage dealt or if hit at all
//



let stats = document.querySelector('.playerStats')
let enemyStats = document.querySelector('.enemyStats')
let playerImg = document.querySelector('.playerImage')
let enemyImg = document.querySelector('.enemyImage')
//declared variables
// console.dir(enemyStats.textContent)
//class that creates new ships(maybe create a factory of ships)
class Ship {
    constructor(Hull, Firepower, Accuracy){
        this.Hull= Hull
        this.Firepower= Firepower
        this.Accuracy=Accuracy
}}


let spaceShip = new Ship(20, 5,.7)

let enemyShip = new Ship(7, 3, .6)

let enemyShip2 = new Ship(6, 4, 5)

let enemyShip3 = new Ship(9, 5, 15)

let enemyShip4 = new Ship(18, 2, 36)

let enemyShip5 = new Ship(7, 13, 24)

let enemyShip6 = new Ship(9, 4, 28)

let enemies = [ enemyShip, enemyShip2, enemyShip3, enemyShip4, enemyShip5, enemyShip6] 


setTimeout(()=> {

    let startMessage = window.confirm('Do you want to battle aliens Warrior?')
        if (startMessage){
            startGame()
        }
    }, '3000')


//confirm message that is paused so computer can 

//function that starts game.
function startGame(){
   alert('Enemy ship spotted!')
//start battle function 
   if(confirm('Do you want to attack?')){

        battle(enemies)  //cofirm " escaped from battle"
          
        //start loop
    } 
    //else when player runs from fight
    else {
        alert('We all died... thanks ') //add confirm if else statement
    }    

}
function updateEnemy(invader){
    enemyStats.innerHTML = `Hull: ${invader.Hull}</br> Firepower: ${invader.Firepower}</br> Accuracy: ${invader.Accuracy}</br>`}

function updateSelf(){
       stats.innerHTML = `Hull: ${spaceShip.Hull}</br> Firepower: ${spaceShip.Firepower}</br> Accuracy: ${spaceShip.Accuracy}</br>`}
    
   
function battle (ships){
            //ourAttack(enemies[i])
        ourAttack(ships[0])
}

    
function newBattle(){
            
        if(enemies.length !=0) {
            updateEnemy(enemies[0])
            setTimeout(() => {
                if(confirm('Another ship is in the distance. Attack again?')){
                    battle(enemies)
            } else {
            alert('You retreated!')               
            }}, '500')
        } else{
            alert('You Win!')
            if(confirm('Would you like to try again?')){
                location.reload()
            } else {
                alert('Thanks for playing, your window will now close.')
                window.close()
            }
        }
       
    }

//Players attack function
function ourAttack (invader) {

    if(Math.random() < spaceShip.Accuracy){
   
        invader.Hull-= spaceShip.Firepower
        updateEnemy(invader)

        if(invader.Hull <= 0) {
            invader.Hull = 0
            updateEnemy(invader)
            enemyImg.classList.add('shake')
            setTimeout(() => {
                alert(`You dealt ${spaceShip.Firepower}. You Win!`)
                    enemies.shift()
                    newBattle()
                }, '800')
                    
                setTimeout (() => enemyImg.classList.remove('shake'), '750')
                    
                } else {
                enemyImg.classList.add('shake')
                setTimeout (() => {
                alert(`Direct hit, You dealt ${spaceShip.Firepower}damage`)
                    enemyAttack(invader)
            }, '1000')
                setTimeout (() => enemyImg.classList.remove('shake'), '750')
        }       
    } else {
                

            setTimeout (() => {
                alert(`You missed!`)
                    enemyAttack(invader) 
                               
                
            }, '1000')

}
} //enemy's function
function enemyAttack(invader) {

    if(Math.random() < invader.Accuracy){
        spaceShip.Hull -= invader.Firepower
        updateSelf()

        if(spaceShip.Hull <= 0){
            spaceShip.Hull = 0
            updateSelf()
            playerImg.classList.add('shake')
            setTimeout(() =>{
               alert(`You dealt ${spaceShip.Firepower}. You lost!`)
            return
            
           },'1000')
           setTimeout (() => playerImg.classList.remove('shake'), '750')
        } else { 
            playerImg.classList.add('shake')
            setTimout (()=> {

            
                alert(`Direct hit, enemy dealt ${invader.Firepower} damage`)
                    ourAttack(invader) //restarts the fight
            }, '1000')
            setTimeout (() => playerImg.classList.remove('shake'), '750')
        }       
    } else {

    setTimeout (() => {
        alert(`You missed!`)
            ourAttack(invader) 
        }, '1000')

}
}

    



// function checkHP(){
// {if (enemyShip.Hull <= 0) {
//     enemyShip.Hull = 0
//     updateEnemy()
//     confirm("You've Won")

//    setTimeout(() =>confirm('You win!'))
// }else if (spaceship.Hull <= 0 {
//     updateSelf()
//     setTimeout() => confirm('You lose!'),'1000') {
        
//     }
// })
// }
    // if(enemyShip.Hull<= 0)

//