  let seconds = 00; 
  let tens = 00; 
  let minutes = 00;
  let Interval ;
  let userInput = [];


document.addEventListener("DOMContentLoaded", () => {  
let name = window.prompt("What is your name?");
alert("Hello " + name +", Are you ready to time your run?");  

//const buttonOnclick = document.getElementById("document.write");
   // document.write("Hello " + name +", Are you ready to time your run?");  
//const surveyButton = document.getElementById("submit");
  //   <input id="text1" placeholder="Enter Name">
    
//    surveyButton.addEventListener("click", () => {
            
  //      const inputField = document.getElementById("text1");
    //    userInput.push(inputField.value);
      //  console.log(userInput);
    
        
      //  return 
//    });
    
    
    
    
 // const appendTens = document.getElementById("tens");
  //const appendSeconds = document.getElementById("seconds");
  //const appendMinutes = document.getElementById("minutes");
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
    
function startWatch () {
    tens++; 
    
    if(tens < 9){
      document.getElementById('tens').innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      document.getElementById('tens').innerHTML = tens;
      
    } 
    
    if (tens > 59) {
      seconds++;
      document.getElementById('seconds').innerHTML = "0" + seconds;
      tens = 0;
      document.getElementById('tens').innerHTML = "0" + 0;
    }
      
    if (seconds <9 ){
      document.getElementById('seconds').innerHTML = "0"+ seconds;
    }
    
    if (seconds > 9){
     document.getElementById('seconds').innerHTML = seconds;
    }
      
    if (seconds > 59) {
      minutes++;
      document.getElementById('minutes').innerHTML = "0" + minutes;
      seconds = 0;
      document.getElementById('seconds').innerHTML = "0" + 0;
  
   }
    if (minutes > 9){
      document.getElementById('minutes').innerHTML = minutes;
    }
  }
 buttonStart.onclick = function() {
    
     clearInterval(Interval);
     t = setInterval(startWatch, 9);
  }
  
    buttonStop.onclick = function() {
       clearInterval(t);
  }
  

  buttonReset.onclick = function() {
     clearInterval(t);
    document.getElementById('tens').innerHTML= '00';
    document.getElementById('seconds').innerHTML= '00';
    document.getElementById('minutes').innerHTML= '00';
  }
});