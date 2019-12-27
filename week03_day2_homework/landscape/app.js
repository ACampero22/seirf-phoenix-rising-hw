console.log("it is working")
//esta parte acumula dinero de trabajo realizado con teeth
let money =0;
const cutGrass = () =>{
  money++;
  console.log("mouseclick = "+ money);
  document.getElementById("demo").innerHTML = `Money: ${money}$`;
  if(money===5){
    alert("You can buy scissors")
  }
  return money;
}
const Instruments ={};
//buttton to buy pair of rusty scissors
RustyScissors=0;
const buyScissors = ()=>{
  if (money>=5){
  money= money-5;
  document.getElementById("demo").innerHTML = `Money: ${money}$`;
  alert("you bought rusty scissors for 5 dollars");
  RustyScissors ++
  document.getElementById("upgrade").innerHTML = `Rusty Scissors: ${RustyScissors}`;
  Instruments.Scissors = RustyScissors;
  }
  else {
    alert("You dont have enough money to buy rusty scissors")
  }
}
//function to use rusty scissors ifyou bought them before
const useRustyScissors = ()=>{
  if(RustyScissors>=1){
    money = money + 5;
    document.getElementById("demo").innerHTML = `Money: ${money}$`;
  }
  else{
    alert("You dont own a pair of rusty scissors")
  }
}
// function to buy lawnmower if you have bought scissirs before
let OldLawnmower=0;
const buyOldLawnmower = ()=>{
  if (money>=25 && RustyScissors>=1){
    money = money -25;
    document.getElementById("demo").innerHTML = `Money: ${money}$`;
    OldLawnmower ++
    document.getElementById("oldtrusty").innerHTML = `Old-timey push lawnmower: ${OldLawnmower}`;
    Instruments.oldLawnmower = OldLawnmower;
    alert("You bought an old trusty lawnnower");
  }
  else{
    alert("You need to unlock scissors and have 25$ in order to buy old-timey push lawnmower")
  }
  
}
// function to use lawnmow
const useOldLawnmower = ()=>{
  if( OldLawnmower>=1){
    money= money+50;;
    document.getElementById("demo").innerHTML = `Money: ${money}$`;
  }
  else{
    alert("You dont own an old-time push lawnmower")
  }
}
// function to buy new lawnmower
let newLawnmower =0;
const buyNewLawnmower= () =>{
  if(OldLawnmower>=1 && money>=250){
    money = money - 250;
    document.getElementById("demo").innerHTML = `Money: ${money}$`;
    newLawnmower++;
    document.getElementById("newfancy").innerHTML = `Fancy battery-powered lawnmower: ${newLawnmower}`;
    Instruments.NewLawnmower = newLawnmower;
    alert("You bought a new fancy lawnnower");
  }
  else{
    alert("You need to unlock old-time push lawnmower and have 250$ in order to buy fancy battery-powered lawnmower")
  }
}
// function to use fancy ne laewnmower
const useNewLawnmower = () =>{
  if (newLawnmower>=1){
    money = money+100;
    document.getElementById("demo").innerHTML = `Money: ${money}$`;
  }
  else{
    alert("You do not own a fancy battery-powered lawnmower")
  }
}