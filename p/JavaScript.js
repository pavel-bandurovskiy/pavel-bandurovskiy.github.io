function st(){
var kolvo=document.getElementById("kolvo").value;
var stoim=document.getElementById("stoim").value;
var itog=document.getElementById("itog");
var a;
var b;
a = kolvo;
b = stoim;
if (a>0 && a!=NaN && b>0 && b!=NaN)
itog.innerHTML=a*b;    
else itog.innerText="Данные введены неверно";    
}
window.document.addEventListener("DOMContentLoaded", function (st) {
    console.log("DOM fully loaded and parsed");
    var b = document.getElementById("btn");
    b.addEventListener("click", st);
});
