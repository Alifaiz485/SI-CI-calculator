function Calculate() {
  let p = document.getElementById("amount").value;
  let t = document.getElementById("time").value;
  let r = document.getElementById("rate").value;
 
var x=  Number("2022") ;
var t1= Number(t);
var p1= Number(p);
var r1= Number (r);
var y= x+t1;


if(document.getElementById('SiInput').checked){
  
  let SI = (p * t * r) / 100;
  

  if(p>0){
    document.getElementById("Errr").style.display= "none";
  document.getElementById("divH").style.display = "block";

  document.getElementById("amount1").innerHTML =
  " " +p +",";

  document.getElementById("rate1").innerHTML =
  " " +r +"%.";

  document.getElementById("si").innerHTML =
    "" + SI +"," ;

    document.getElementById("time1").innerHTML =
    "" + y ;

    document.getElementById("CiSi").style.display= "none";
    document.getElementById("nott").style.display= "block";
    document.getElementById("Eror").style.display= "none";
  }
  else if(p==0){
      document.getElementById("Eror").style.display= "block";
      document.getElementById("divH").style.display = "none";
      document.getElementById("Errr").style.display= "none";
  }
  else{
    document.getElementById("Errr").style.display= "block";
    document.getElementById("divH").style.display = "none";
    document.getElementById("Eror").style.display= "none";

  }
}
else if(document.getElementById('CiInput').checked){

 let tPower= Math.pow(1+(r1*0.01), t1);
 let t12= tPower.toFixed(6);
let tPower2= Number(t12);
let Si1=p1*tPower2-p1;
let si2= Si1.toFixed(3);

let SI= Number(si2);
 
  

  if(p>0){
    document.getElementById("Errr").style.display= "none";
  document.getElementById("divH").style.display = "block";

  document.getElementById("amount1").innerHTML =
  " " +p +",";

  document.getElementById("rate1").innerHTML =
  " " +r +"%.";

  document.getElementById("si").innerHTML =
    "" + SI +"," ;

    document.getElementById("time1").innerHTML =
    "" + y ;
    document.getElementById("nott").style.display= "block";
    document.getElementById("CiSi").style.display= "none";
    document.getElementById("Eror").style.display= "none";
  }
  else if(p==0){
      document.getElementById("Eror").style.display= "block";
      document.getElementById("divH").style.display = "none";
      document.getElementById("Errr").style.display= "none";
  }
  else{
    document.getElementById("Errr").style.display= "block";
    document.getElementById("divH").style.display = "none";
    document.getElementById("Eror").style.display= "none";

  }


  

}


else if(document.getElementById('DifInput').checked){

  let tPower= Math.pow(1+(r1*0.01), t1);
  let t12= tPower.toFixed(6);
 let tPower2= Number(t12);
 let Si1=p1*tPower2-p1;
 let si2= Si1.toFixed(3);
 

 let SimpleI = (p * t * r) / 100;
 let SimpleI2= Number(SimpleI);


 let SIi= Number(si2);
 let SI8= SIi-SimpleI2;
 let SI= SI8.toFixed(3);

  
   
 
   if(p>0){
     document.getElementById("Errr").style.display= "none";
   document.getElementById("divH").style.display = "block";
 
   document.getElementById("amount1").innerHTML =
   " " +p +",";
 
   document.getElementById("rate1").innerHTML =
   " " +r +"%.";
 
   document.getElementById("siii").innerHTML =
     "" + SI +"," ;
 
     document.getElementById("time1").innerHTML =
     "" + y ;


     document.getElementById("Eror").style.display= "none";
     document.getElementById("CiSi").style.display= "block";
     document.getElementById("nott").style.display= "none";

   }
   else if(p==0){
       document.getElementById("Eror").style.display= "block";
       document.getElementById("divH").style.display = "none";
       document.getElementById("Errr").style.display= "none";
   }
   else{
     document.getElementById("Errr").style.display= "block";
     document.getElementById("divH").style.display = "none";
     document.getElementById("Eror").style.display= "none";
 
   }
 
 
   
 
 }
  
}

function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }
function Ut(val) {
    document.getElementById('textInput').value=val; 
  }
