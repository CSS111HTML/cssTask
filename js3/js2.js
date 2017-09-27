var headcount=document.getElementById('headcount');
var numkill=document.getElementById('numkill');
var numpeasent=document.getElementById('numpeasent');
var headvalNum=[];
var numKiNum=[];
var numPeaNum=[];
headcount.oninput=function begin(){
if(headcount.value>=3 && headcount.value<=8){
    numkill.value=1;
    numpeasent.value=headcount.value-1;
}else if(headcount.value>8 && headcount.value<12){
    numkill.value=2;
    numpeasent.value=headcount.value-2;
}else if(headcount.value>11 && headcount.value<16){
    numkill.value=3;
    console.log(numkill.value)
    numpeasent.value=headcount.value-3;
}else if(headcount.value>16 && headcount.value<19){
    numkill.value=4;
    numpeasent.value=headcount.value-4;
} 

headcount.onblur=function(){ 
    console.log(headcount.value);
    for(var i=0;i<headcount.value;i++){
        headvalNum.push(i)  
        }    
console.log(headvalNum)
console.log(numkill.value);
for(var i=0;i<numkill.value;i++){
    numKiNum.push(i)  
    }    
console.log(numKiNum)

console.log(numpeasent.value);
for(var i=0;i<numpeasent.value;i++){
    numPeaNum.push(i)  
    }    
console.log(numPeaNum)


    if(isNaN(headcount.value)){
        alert('请输入数字3-18之间数字');
        headcount.oninput(function(){});
    }else if(headcount.value<3 || headcount.value>18){
        alert('请输入数字3-18之间数字');
    }else{ window.open("js3.html", );}
    
    headvalNum= JSON.stringify(headvalNum);
    localStorage.setItem("k1",headvalNum);
    numKiNum= JSON.stringify(numKiNum);
    localStorage.setItem("k2",numKiNum);
    numPeaNum= JSON.stringify(numPeaNum);
    localStorage.setItem("k3",numPeaNum);
}
}









