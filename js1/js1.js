var begin=document.getElementById('begin');
var end=document.getElementById('end');
var box=document.getElementsByClassName('box');

var times;
var times2;
var c;
var colorB=new Array(3);
var boxnum=[];
function num(){
    for(var i=0;i<3;i++){
        boxnum[i]=Math.floor((Math.random()*9));
        for(var j=0;j<i;j++){
           if(boxnum[i]==boxnum[j]){
               length--;
               i=i-1;
               break;
           }
        }
    }
}
function colorsty(){
    for(var i=0;i<3;i++){
        colorB[i]='#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
    }
}
function mixn(){
    for(var i=0;i<3;i++){
        box[boxnum[i]].style.backgroundColor=colorB[i];
    }
}

function clearB(){
    for(var k = 0;k < 9;k++){
       box[k].style.backgroundColor="#FFA500";
    }
}

function intervals(){
    times=setInterval("num(),colorsty(),mixn()",1000)
    times2=setInterval("clearB()",959)
}


begin.onclick=function(){
   if(3>2) {
    var Begin=intervals()
}
}
end.onclick=function(){
    if(5>4){
   var x=clearInterval(times)
    var y=clearInterval(times2)
        console.log(x)
        clearB()
        
        
    }
}

// function abc(){
//     alert("begin");
// }
// begin.onclick=function abc(){
//     alert("begin");
// }