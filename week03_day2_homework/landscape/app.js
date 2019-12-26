console.log("it is working")
let numberclicks = 0;
const cutGrass = () =>{
  console.log("mouseclick = "+ numberclicks);
  document.getElementById("demo").innerHTML = `You have earned ${numberclicks} dollars`;
  numberclicks++;
  if(numberclicks===5){
    var rustyscissors = prompt("Would you like to upgrade to rusty scissors?")
    if(rustyscissors==="yes"){
      numberclicks = numberclicks+5;
      document.getElementById("demo").innerHTML = `You have earned ${numberclicks} dollars`;
    }
  } 
}

console.log(cutGrass())





// console.log("its working!")
// function myFunction() {
//     var person = prompt("Would you like to use your teeth to cut the grass");
//     if (person != null) {
//       document.getElementById("demo").innerHTML =
//       "You have earned 1$";
//     }
//   }
  

// const tool ={money: 0,tools:["teeth"]}

// create object named ability that includes userinput, money, tools values and initialize this values as arrays
// update value tool to teeth
// ask user if he wants to use his teeth to cut the grass
// if user wants to then update money value to 1 dollar
//while loop  that adds 1 dollar everytime user inputs mow the law
//once that money variable is updated to 5$ show an alert and ask user if he wants to buy a pair of rusty scissors
//if user wants to buy a new pair of scissors
// then decrease 5 from the money  
