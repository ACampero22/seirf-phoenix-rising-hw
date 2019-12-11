//SECTION 1
/*1. What does the acronym DRY stand for? Why should we pay attention to it? 
What programming tools have we learned to write DRY code?*/
/* DRY stands for Don't Repeat Yourself. We should pay attention to it because 
programmers should avoid repetition of unnecessary code to keep their programs clean and organized. 
The programming tools we have learned so far are the for and while loops.*/
/*2.What is the difference between const and let and var? Please limit your answer to no more than 
three short sentences. Don't be afraid to research using google and other resources.*/
/* Const = declares a constant, the value that you assign to your const decaration never changes
   Var = declares a variable, the value that you assign to a variable can be changed later on the 
   code and is function scoped.
   let = declares a variable, the value that you assign to a variable can be changed later on the 
   code and is blocked scoped.
*/
//SECTION 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'kelvin';
const f = false;

console.log( a != b);
console.log( c > d);
console.log( 'Name' === 'Name');
console.log( a < b < c );
console.log( a * a == d);
console.log(e != 'kevin');
console.log( 48 == '48');
let g = 0;
console.log(g);
g = b+c;
console.log(g);
//SECTION 2 QUESTIONS
//Did you use const, let or var? Why did you choose the one you chose?
// I use let in order to be able to change the value of the variable later on.
//What happens if you don't use const , let or var? Do you get an error? If so what does it say?
//If i dont use let var or const then a error appears on the screen saying that g is not defined
//what happens if you write 10 = g?
//10 = g;
//A Syntax Error appears in the screen saying Invalid left-hand side in assignment
//SECTION 2 BONUS
console.log(a<(b || f)=== !(f && e===c));

//SECTION 3 
// Infinite loop 1
//Is the code below an infinite loop? Why or why not?
// Yes the code below is an infinite loop, because the code will run forever because it's boolean expression will always be true.
//Infinite loop II
//is this loop an infinite loop? Why or why not?
//No the code below is not a infinite loop, because after running one time the boolean expression will change to false after the program run once

//CODE
/*let letters = "A";
let i = 0;
//Start a while loop that will run as long as i is less than 20
while (i < 20) {
    //increments the letter A by one everitime the code runs
    letters += "A";
    //increments the value of i by one everytime the code runs
	i++;
}
//the screen will display the total of letter A's that the while loop run 
console.log(letters);
*/
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
// yes the code was what I expected

//SECTION 4
//For loop 1:
//The first part of the control panel is: sets the initial value of i to 0.
//The second part of the control panel is: sets the condition that the loop will only run when i is less than 100
//The third part of the control panel is: sets that the value i will increment by 1 everytime the loop runs
//For loop 2:
for(let i = 0; i < 1000; i++){
    console.log(i);
}
//Bonus Challenge 
/*The backslash above the enter is used when we want to use an apostrophe in a sentence. if we do not
//use \ then the code will interpret ' as a semicolon to insert a string. The / is used to add comments 
on a program.*/
//For loop in reverse 
for(let i=999; i>=0; i--){
    console.log(i);
}
/*Write a for loop that uses string concatenation to send a message to the console as well as the current 
value of i.*/
for(let i = 0; i<=10; i++){
    console.log("The value of i is: " + i + " of 10");
}
//bonus challenge
for(let i = 0; i<=10; i++){
    console.log(`The value of i is: ${i} of 10`);
}
//Iterate over the StarWars array and print each element to the console.
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
let element=0;
for( let i=0; i< StarWars.length; i++){
    element = StarWars[i];
    console.log(element)

}
//Iterate over the StarWars array again and print each character's name as well as the value of i.

for( let i=0; i< StarWars.length; i++){
    element = StarWars[i];
    console.log(element + " is element "+ i + " from the array");

}
//Bonus Challenge Figure out how to iterate over every second element of the StarWars array, starting 
//with the first element.
for( let i=0; i< StarWars.length; i++){
    element = StarWars[i++];
    console.log(element);
}












