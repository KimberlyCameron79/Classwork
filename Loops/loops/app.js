/*

//inside parentheis we have
//three statements:

//statement 1:
//declare and initialized a variable
//scoped to the for loop

//statement 2:
//a condition that when true runs the 
//code in the for loop

//statement 3:
//incrementing of the variable in
//order to eventually break the loop

for (let i = 0; ; i++) {
    console.log(i)
    if(i > 10){
        break;
    }
}

// 1: declare and initialize variable
// 2: check if condition is true
// 3: console log runs and prints 0
// 4: variable i increments and becomes 0 to 1
// 5: check if condition is true or repeat step 2
// 6: repeat step 3
// 7: repeat step 4
// 8: check if condition is true (it's not)
// 9: exit loop, continue with rest of code

//  break
//  continue
*/
/*
for (let j = m; j >- 0; j -- ) {
    console.log (j)
}
*/
/*
for (let k = 1; k < 10; k = k + 2)
{
    console.log(k)
}
    for (let l=2; l<11; l=l+2)
    {
        console.log(l)
    }

*/
/*
for(let m=6; m<61;m=m+3)
    {
        console.log(m)
    }
*/
/*
for (let j= 0) 
{
console.log ('2')
console.log ('23')
console.log ('234')
console.log ('2345')
console.log('23456'))
console.log('234567')
console.log('23456789'))
}
*/

// /*
// //EXERCISE 1

// let i=0;
// while(i<35 && i % 3 == 0){
// console.log (i+=3)

// }
// */

// //EXERCISE 2
// let i=0;
// while(i<100 && i % 5 == 0){
//     console.log (i+=5)
// }

// This code eliminates modululus statement to override 5 increments. It will print I fist and than print incrementials of 5 until you reach 100.
// let i = -25 ;       
// while (i <100 )
// {
//     console.log(i)
//     i += 5;

// }

// //EXERCISE 3
// let i=0; //setting start number to 0.
// while (i <20){    //loop runs long as the parenthesis is true.
//  if(i % 2 == 0){    //checking to see if number is divisible by 2.
//     console.log(i * 3)  //multiplying by 3 and printing to console.
//  }
//     i++;   //incrementing by 1.
// }

// 

for (let i =1; i<=5; i++){  //gives the numerical pyramid output, starting by 1.
    let str = ''
    for (let j = 1; j<= i; j++){
        str += j
    }
    console.log(str)
}
// // 1. Initialize the variable i to 1

//     2. checks if i (1) is less than or equal to 3 (true)

//     3. initialize the variable str as a blank String.apply  

//     4. initialize the variable j to 1.

//     5. checks if j (1)is less than or equal to i (1) (true)

//     6. concatenates 1 as a string to the variable str ("1")

//     7. increment j by 1(2)

//     8. checks condition for j (2), is less than or equal to i (1)(false)

//     9. print str variable ("1")

//     10.increment i by 1 (2)

//     11. checks if i (2) is less than or equal to 3 (true)

//     12. initialize the variable str as a blank String.apply 

//     13 initialize the variable j to 1. 

//     14. checks if j (1)is less than or equal to i (2) (true)

//     15. concatenates 1 as a string to the variable str ("1")

//     16. increment j by 1(2)

//     17. checks condition for j (2), is less than or equal to i (2)(true)

//     18. concatenates 2 as a string to a variable str ("12")

//     19. increments j by 1(3)

//     20. checks if j (3) is less than or equal to i(2) (false)

//     21. The loop ends and print str variable ("12")

//     22. increment i by 1(3)

//     23. checks if i (3) is less than or equal to 3 (true)

//     24. initialize the variable str as a blank String.apply 

//     25. initialize the variable j to 1.

//     26. checks condition for j (1), is less than or equal to i (3)(true)

//     27. concatenates 2 as a string to a variable str ("1")

//     28.  increment j by 1(2)

//     29. checks condition for j (2), is less than or equal to i (3)(true)

//     30.  concatenates 2 as a string to a variable str ("12")

//     31. increment j by 1(3)

//     32. checks condition for j (3), is less than or equal to i (3)(true)

//     33. concatenates 2 as a string to a variable str ("123")

//     34. increment j by 1(4)

//     35. checks if j (4) is less than or equal to 3 (false)
         
//     36.  prints str variable ("123")

//     37. increment i by 1(4)

//     38. checks if i (4) is less than or equal to 3 (false)





