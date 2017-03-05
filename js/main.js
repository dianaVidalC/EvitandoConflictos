var peso=document.getElementById("peso").value;
var planeta=document.getElementById("planeta").value;


if(planeta=="mercurio" || planeta=="marte"){
var gravedad= 3.72;
}else if(planeta=="venus"){
var gravedad= 8.82;
}else if(planeta=="júpiter"){
var gravedad= 23.13;
}else if(planeta=="urano"){
var gravedad= 8.72;
}else if(planeta=="saturno"){
var gravedad= 9.01;
}else if(planeta=="plutón"){
var gravedad= 0.65;
}else if(planeta=="neptuno"){
var gravedad= 10.97;
}

var pesoNuevo=(peso/9.78)*gravedad;
