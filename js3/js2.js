var headcount=document.getElementById('headcount');
var numkill=document.getElementById('numkill');
var numpeasent=document.getElementById('numpeasent');
var numBtn=document.getElementById('numBtn');
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
for(var i=0;i<numkill.value;i++){
    headvalNum.push("杀手")   
    }    
for(var i=0;i<numpeasent.value;i++){  
    headvalNum.push("水民")   
    }    
    if(isNaN(headcount.value)){
        alert('请输入数字3-18之间数字');
        headcount.onclick(function(){});
    }else if(headcount.value<3 || headcount.value>18){
        alert('请输入数字3-18之间数字');
    }
   else{window.location.href="js3.html"}

   function shuffle() {
    var m = headvalNum.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = headvalNum[m];
        headvalNum[m] = headvalNum[i];
        headvalNum[i] = t;
    }
    return headvalNum
} 
shuffle(headvalNum)

    headvalNum= JSON.stringify(headvalNum);
    localStorage.setItem("k1",headvalNum);
}
}
