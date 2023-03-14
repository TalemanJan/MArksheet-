

//=========convert celsius to fahrenheit
function C_F(){
    var F=document.getElementById("num1").value;    
    var CelToF= Math.round(F*1.8)+32;
    document.getElementById("result").innerHTML=CelToF+"°F";
}


//=========Convert fahrenheit to celsius
function F_C(){
    var d=document.getElementById("num1").value;
    var FtoC=Math.round(d-32)*.5556;
    document.getElementById("result").innerHTML=FtoC+"°C"
}





//=============JS CODE FOR LEAP YEAR CHECKER
 
// function LeapOrNot(){
//     var year = document.getElementById("year").value;
    
// if (year <= 1581){
//     alert("Year must be greater than 1581.");
//      }	
    
// else if ((year % 4 == 0) && (year % 100 != 0)){
//     document.getElementById("result").textContent = " a leap!";
//     }
// else {
//         document.getElementById("result").textContent=("its not a leap year")
//     }
// }

// function leap(){
//     var yearr=document.getElementById("year").textContent;

//     if(yearr <= 0){
//         alert("Year must be above 0.");
//     }
//     else if(yearr % 4 == 0 && yearr % 100 !=0){
//         document.getElementById("result").textContent=("a leap!");
//     }
//     else {
//         document.getElementById("result").textContent=("its not a leap year")
//     }
// }




  


  
  
  
  