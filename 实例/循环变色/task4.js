var btn=document.getElementById('btn');
var list=document.getElementsByTagName('div')
btn.onclick=function(){
    for(var i = 0;i<list.length;i++){
        list[i].style.backgroundColor='red'
    }
}