
var headerTexts=document.getElementById('header');
headerTexts.innerHTML='查看身份';


var voteBtn=document.getElementById('voteBtn');
voteBtn.innerHTML='查看三号身份';

// var valueLocal = localStorage.getItem("k");



var headvalNum = localStorage.getItem("k1"); 
var headvalNum= JSON.parse(headvalNum);
var numKiNum = localStorage.getItem("k2"); 
var numKiNum= JSON.parse(numKiNum);
var numPeaNum = localStorage.getItem("k3"); 
var numPeaNum= JSON.parse(numPeaNum);
console.log(headvalNum);
console.log(numKiNum);
console.log(numPeaNum);