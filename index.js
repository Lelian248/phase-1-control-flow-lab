function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride < 400 || ride == 400){
    return "This one is on me!";
  }else if(400 < ride && ride <= 2000){
    return "That will be twenty bucks.";
  }else if(2000 < ride && ride <= 2500) {
    return "I will gladly take your thirty bucks.";
  }else return "No can do.";

}

console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(1500));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501 ));

function ternaryCheckCity(city){
  if(city == "NYC"){
    return "Ok, sounds good.";
  }else return "No go.";
}
console.log(ternaryCheckCity("NYC"));
console.log(ternaryCheckCity("Pittsburgh"));


//NOTE:it doesn't pass the test when using switch put the output is correct 
function switchOnCharmFromTip(tip){
   if(tip == "generous"){
    return "Thank you so much.";
  }else if(tip == "not as generous"){
     return "Thank you.";
  }else return "Bye." 
  /*switch(tip){
    case("generous"): 
    console.log("Thank you so much."); 
    break;
    case("not as generous"):
      console.log("Thank you." );
      break;
    default:
      console.log("Bye.");}*/
  
  }

/*
switchOnCharmFromTip("generous");
switchOnCharmFromTip("not as generous");
switchOnCharmFromTip("thanks for everything");
*/

console.log(switchOnCharmFromTip("generous"));
console.log(switchOnCharmFromTip("not as generous"));
console.log(switchOnCharmFromTip("thanks for everything"));

