var btn=document.getElementById('btn');
var inputs=document.getElementById('inputs');
var allSCreen=document.getElementById('allSCreen');
var allSCreen2=document.getElementById('allSCreen2');
var allSCreen3=document.getElementById('allSCreen3');
var btns3=document.getElementById('btns3');
var btns2=document.getElementById('btns2');
var btns1=document.getElementById('btns1');
var btns4=document.getElementById('btns4');
var inputs2=document.getElementById('inputs2');
var inputs3=document.getElementById('inputs3');
btn.onclick=function(){
    allSCreen.style.display='block';
    inputs.style.display='block';  
}
btns3.onclick=function(){
    inputs2.style.display='block';
    allSCreen2.style.display='block';
    
}
btns1.onclick=function(){
    allSCreen.style.display='none';
    inputs.style.display='none';
    allSCreen2.style.display='none';
    inputs2.style.display='none';  
}
btns2.onclick=function(){
    inputs3.style.display='block';
    allSCreen3.style.display='block';
}
btns4.onclick=function(){
    allSCreen.style.display='none';
    inputs.style.display='none';
    allSCreen2.style.display='none';
    inputs2.style.display='none'; 
    allSCreen3.style.display='none';
    inputs3.style.display='none'; 
}