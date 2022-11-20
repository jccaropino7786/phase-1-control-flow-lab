function scuberGreetingForFeet(distance){
  
  if (distance > 0 && distance <= 400){
    //gives passenger free ride if less than or equal to 400 feet
    return 'This one is on me!';
  }
  else if (distance > 400 && distance <= 2000){
    //charges 20 dollars for a distance between 400 and 2000 feet
    return'That will be twenty bucks.';
  } 
  else if (distance > 2000 && distance <= 2500){
  //charges 30 dollars for a distance between 2000 & 2500
    return 'I will gladly take your thirty bucks.';
  }
  else if(distance > 2500){
  //no rides over 2500
    return 'No can do.'
  }
}
  
function ternaryCheckCity(city){
 return (city === "NYC") ? "Ok, sounds good." : "No go.";  
}

function switchOnCharmFromTip(charm){
  switch(charm){
    case 'generous':
     return charm = "Thank you so much.";
      
    case 'not as generous':
      return charm = "Thank you.";
      
    default:
      return charm = "Bye.";
      
  }
  
}