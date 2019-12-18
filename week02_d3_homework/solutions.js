///////////////////////
//Verbal Questions/////
///////////////////////
/*1.What is the difference between a parameter and an argument?
A parameter is a variable in a method definition and an argument  
is the actual value of this variable that gets passed to function.
2.Within a function, what is the difference between return and console.log?
Return is a statement that allows a function to output a value back to where 
it was called before. Console. log is a function that lets us inspect values for debugging purposes.*/

//////////////////////
//Palindrome//////////
//////////////////////

const chekPalindrome = (argument) => {
let arr1 = [];
for(let i= 0; i<argument.length; i++){
    arr1.push(argument[i]);
    arr1[i]= arr1[i].toLowerCase();
}
//console.log(arr1)
let arr2=[];
for(let i= argument.length-1; i>=0; i--){
    arr2.push(argument[i]);
}
for(let i= 0; i<argument.length; i++){
    arr2[i]= arr2[i].toLowerCase();
 }
//console.log(arr2)
 let element=0;
 if (arr1[element] != arr2[element]){
     return(false);
 }else{
     return(true);
}
};
console.log(chekPalindrome("RADAr"))

////////////////////////
//Sum Array/////////////
////////////////////////
let sum = 0;
const sumArray = (numbers) =>{
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];  
    }
    console.log(sum)
}
sumArray([1,2,3,4,5,6])

//////////////////////////
//Prime Numbers///////////
//////////////////////////
const checkPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number>=2
    
}
console.log(checkPrime(2))
const printPrimes = (limit) => {
    for (let i = 0; i <= limit; i++){
        checkPrime(i);
        if (checkPrime(i) === true){
            console.log(i);
        }
    }
}
console.log(printPrimes(20))

///////////////////////
//Rock Paper Scissors//
///////////////////////
const randomMove = () =>{
    let rand = Math.ceil(Math.random()*3);
    let mov =" ";
    if(rand ===1){
        mov="rock";
        return(mov)
    }else if(rand ===2){
        mov="paper";
        return(mov)
    }else if (rand ===3){
        mov="scissors"
        return(mov);
    }
}
console.log(randomMove())

const rockPaperScissors = (computersMove, usersMove) =>{
    console.log("computer choose "+computersMove);
    console.log("user choose "+usersMove);
    if (usersMove==="rock" && computersMove=== "paper"){
        console.log(`${computersMove} beats ${usersMove}, computer wins!`)
    }else if(usersMove==="paper" && computersMove=== "scissors"){
        console.log(`${computersMove} beats ${usersMove}, computer wins!`)
    }else if(usersMove==="scissors" && computersMove=== "rock"){
        console.log(`${computersMove} beats ${usersMove}, computer wins!`)
    }else if(usersMove===computersMove){
        console.log("Its a tie no one wins!")
    }else {
        console.log(`${usersMove} beats ${computersMove}, user wins!`)

    }

}
console.log(rockPaperScissors(randomMove(), "rock"))