console.log("it is working")

let money =0;
const cutGrass = () =>{
  money++;
  //money = numberclicks;
  //console.log("money is"+money)
  console.log("mouseclick = "+ money);
  document.getElementById("demo").innerHTML = `You have earned ${money} dollars`;
  
  //numberclicks++;
  if(money===5){
    alert("You can buy scissors")
  }
  return money;
  
}
//const Instruments

const buyScissors = ()=>{
  if (money>=5){
  money= money-5;
  document.getElementById("demo").innerHTML = `You have earned ${money} dollars`;
  alert("you bought rusty scissors for 5 dollars")}
}

