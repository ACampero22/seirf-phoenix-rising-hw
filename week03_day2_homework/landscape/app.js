console.log("it is working")

let money =0;
const cutGrass = () =>{
  money++;
  console.log("mouseclick = "+ money);
  document.getElementById("demo").innerHTML = `Money: ${money}$`;
  
  //numberclicks++;
  if(money===5){
    alert("You can buy scissors")
  }
  return money;
  
}
const Instruments ={};
RustyScissors=0;
const buyScissors = ()=>{
  if (money>=5){
  money= money-5;
  document.getElementById("demo").innerHTML = `Money: ${money}$`;
  alert("you bought rusty scissors for 5 dollars")}
  RustyScissors ++
  document.getElementById("upgrade").innerHTML = `Rusty Scissors: ${RustyScissors}`;
  Instruments.Scissors = RustyScissors;
}
