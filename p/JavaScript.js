function st(){
var kolvo=document.getElementById("kolvo").value;
var stoim=document.getElementById("stoim").value;
var itog=document.getElementById("itog");
itog.innerHTML=kolvo*stoim;
}
window.document.addEventListener("DOMContentLoaded", function (st) {
    console.log("DOM fully loaded and parsed");
    var b = document.getElementById("btn");
    b.addEventListener("click", st);
});