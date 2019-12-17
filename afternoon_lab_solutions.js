//////////////////////
//Easy does it////////
//////////////////////
//Create an array that contains three quotes and store it in a variable called quotes.
const arr = ["Be yourself; everyone else is already taken.", "A room without books is like a body without a soul.","You know you're in love when you can't fall asleep because reality is finally better than your dreams." ]
let quotes = arr;
console.log(quotes)

//////////////////////
//Random /////////////
//////////////////////

const randomThings =[1, 10, "Hello", true];

//1.how do you access the 1st element in the array?
console.log(randomThings[0])

//2.Change the value of "Hello" to "World".
randomThings[2] = "World";

//3.Check the value of the array to make sure it updated the array.
console.log(randomThings);

////////////////////////
//We've got class///////
////////////////////////

const ourClass = ["Outrun", "Zoom", "Github", "Slack"];

//1.What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

//2.Change the value of "Github" to "Octocat"
ourClass[2]="Octocat";
console.log(ourClass)

//3. Add a new element, "Cloud City" to the array.
ourClass[4]="Cloud City";
console.log(ourClass)

/////////////////////////
//Mix It Up//////////////
/////////////////////////
const myArray = [5, 10, 500,20];

//5.Using the push method, add the string "Egon" to the end of the array.
myArray.push("Egon");
console.log(myArray);

//6.Using a method, remove the string from the end of the array.
myArray.pop();
console.log(myArray)

//7.Using the unshift method, add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley");
console.log(myArray);

//8.Using a different method, remove the string from the beginning of the array
myArray.shift();
console.log(myArray);

//9.Use the reverse method on this array
myArray.reverse();
console.log(myArray);

///////////////////////////////
//Biggie Smalls////////////////
///////////////////////////////
for(let i=0; i< myArray.length; i++){
 
    if(myArray[i]<100){
        console.log("little number");
    }else{
        console.log("big number");

    }
}

////////////////////////////////
//Monkey in the middle//////////
////////////////////////////////

for(let i=0; i<myArray.length; i++){
    if(myArray[i]< 5){
        console.log("little number")
    }else if(myArray[i]>10){
        console.log("big number")
    }else{
        console.log("monkey")
    }
}