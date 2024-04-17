let userInput=document.getElementById("birthdate");
///future date are disable
userInput.max=new Date().toISOString().split("T")[0];


function calculatorAge(){
    var birthdate= document.getElementById("birthdate").value;
    var birthdateobj= new Date(birthdate)
var today= new Date();
var ageYears= today.getFullYear() - birthdateobj.getFullYear()
var ageMonths= today.getMonth () - birthdateobj.getMonth()
var ageDays= today.getDate () - birthdateobj.getDate()
 if(ageMonths < 0 ||(ageMonths === 0 && ageDays  < 0)){
    ageYears--;
    ageMonths+= 12;
 }
 if(ageDays < 0 ){
    var lastmonthDate= new Date(today.getFullYear(),today.getMonth(),0).getDate();
    ageDays= lastmonthDate;
    ageMonths--;
 }
 document.getElementById("result").innerHTML=  "Your age is " + ageYears + " years, " + ageMonths + " months, " + ageDays + " days  old";


}