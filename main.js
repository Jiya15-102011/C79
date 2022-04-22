c=[];
function a(){
var j=document.getElementById("i1").value;
var h=document.getElementById("i2").value;
var r=document.getElementById("i3").value;
var m=document.getElementById("i4").value; 
c.push(j);
c.push(h);
c.push(r);
c.push(m);
console.log(c);
document.getElementById("Answer").innerHTML=c;
document.getElementById("a1").style.display="none";
document.getElementById("b1").style.display="inline-block";

}
function b(){
    c.sort();
    console.log(c);
    document.getElementById("Answer").innerHTML=c;
}