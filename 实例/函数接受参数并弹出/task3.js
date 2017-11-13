var list=document.getElementsByTagName('input');
var btn=document.getElementById('btn');


//传参版
parameter=function cc(a,b){
     alert(a.value);
     alert(b.value)
 }
 btn.onclick=function (){
    parameter(list[0],list[1])
    
}

//非传参版
btn.onclick=function (){
        confirm(list[0].value)
        confirm(list[1].value)
     }
    