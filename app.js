function getReport(){

        

    //read the marks
    var eng = document.getElementById('txtEnglish').value;
    var Urdu = document.getElementById('txtUrdu').value;
    var maths = document.getElementById('txtMaths').value;
    var science = document.getElementById('txtScience').value;
    var Isl = document.getElementById('txtIsl').value;
    var Chem = document.getElementById('txtChem').value;

    
    //calculate the total marks 
    var totalMarks = parseInt(eng) + parseInt(Urdu) + parseInt(maths)+ parseInt(science) + parseInt(Isl) + parseInt(Chem) ;
    
    //get the Percentage
    var percentage = totalMarks*100/600;	
    
    

    
    //find the grade and result using if and else		

    if(percentage>100 || percentage<0){
       document.getElementById("txtGrade").value=("Please enter valid numbers")
       document.getElementById("txtResult").value=("copied ☕ ")
}

if(percentage >= 90 && percentage <= 100){
document.getElementById("txtgrade").value="Your grade is A+";
document.getElementById("txtResult").value=("Outstanding! Keep it up")
}
else if(percentage >= 80 && percentage < 90){
document.getElementById("txtGrade").value=("Your grade is A")
document.getElementById("txtResult").value=("Very Good")
}
else if(percentage >= 70 && percentage < 80){
document.getElementById("txtGrade").value=("Your grade is B")
document.getElementById("txtResult").value=("Good")
}
else if(percentage >= 60 && percentage < 70){
document.getElementById("txtGrade").value=("Your grade is C")
document.getElementById("txtResult").value=("Satisfactory")
}
else if(percentage >= 50 && percentage <= 60 ){
document.getElementById("txtGrade").value=("Your grade is D")
document.getElementById("txtResult").value=("You Can do better")
}
else if(percentage < 50 ){
document.getElementById("txtGrade").value=("Your grade is F ")
document.getElementById("txtResult").value=("Unsatisfactory")
}
else{

}




    //display the results	
    document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
    document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
    document.getElementById('txtTotalMarks').value = totalMarks;
    document.getElementById('txtPercentage').value = percentage;
    
   
   

} //end of function getReport