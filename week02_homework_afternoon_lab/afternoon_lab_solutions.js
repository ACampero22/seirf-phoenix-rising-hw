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

////////////////////////////////
//what is in your closet////////
////////////////////////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
];


//1.What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

//2.Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe
let kristynShoe= kristynsCloset[0];
kristynsCloset.shift();
console.log(kristynsCloset);
console.log(kristynShoe);

//3.Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(5,0,"raybans");
console.log(kristynsCloset);

//4.Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[4]="stained knit hat";
console.log(kristynsCloset);

//5.Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][2]);

//6.In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);

//7.Access one item from Thom's accessories array.
console.log(thomsCloset[2][1]);

//8.Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][1]}`);

//9.Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2]="Footie Pajamas";
console.log(thomsCloset);