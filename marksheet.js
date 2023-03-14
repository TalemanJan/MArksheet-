var Yname=prompt("enter your name");
var rollnum=prompt("enter your rollnum");
var instituteName=prompt("enter your instituteName");
var age=+prompt("enter your age"); 
document.getElementById("heading").innerHTML=Yname;
document.getElementById("heading1").innerHTML=document.getElementById("heading1").innerHTML + ' ' +rollnum;
document.getElementById("heading2").innerHTML=document.getElementById("heading2").innerHTML+' ' +instituteName;
document.getElementById("heading3").innerHTML=document.getElementById("heading3").innerHTML+' ' + age;
var mathMarks=+prompt("enter your maths marks");
var physicsMarks=+prompt("enter your physics marks");
var chemistryMarks=+prompt("enter your chemistry marks");
var biologyMarks=+prompt("enter your biology marks");
var computerMarks=+prompt("enter your computer marks");
document.getElementById("mathMarks").innerHTML=mathMarks;
document.getElementById("physicsMarks").innerHTML=physicsMarks;
document.getElementById("chemistryMarks").innerHTML=chemistryMarks;
document.getElementById("biologyMarks").innerHTML=biologyMarks;
document.getElementById("computerMarks").innerHTML=computerMarks;
var sum=mathMarks+physicsMarks+chemistryMarks+biologyMarks+computerMarks;
document.getElementById("mo").innerHTML=document.getElementById("mo").innerHTML+' '+sum;
 if (sum >= 400 && sum <=500 ){
     document.getElementById("grade").innerHTML=document.getElementById("grade").innerHTML+' '+"Aone";
}
else if (sum >= 300 && sum <=400 ){
     document.getElementById("grade").innerHTML=document.getElementById("grade").innerHTML+' '+"A" ;  
}
else if (sum >= 250 && sum <=300 ){
     document.getElementById("grade").innerHTML=document.getElementById("grade").innerHTML+' '+"B"  ;   
}
else if (sum <250 ){
     document.getElementById("grade").innerHTML=document.getElementById("grade").innerHTML+' '+"Fail"  ;   
}