var btn=document.getElementById('btn');
// var mouse=document.getElementsByTagName('label')[0]
var mouse=document.getElementById('mouse');
mouse.onmouseover=function(){
    btn.style.display='block';
}

mouse.onmouseout=function(){
    btn.style.display='none';
}