var red=document.getElementById('red');
var green=document.getElementById('green');
var grey=document.getElementById('grey');
var bd=document.getElementById('bd');
 var list=document.getElementsByTagName('li')

 red.onclick=function(){
    red.style.backgroundColor='white';
    red.style.border='red 5px solid';
    bd.style.backgroundColor='pink';
    for( var i=0;i<list.length;i++){
        list[i].style.backgroundColor='red';
    }
}();

green.onclick=function(){
    green.style.backgroundColor='white';
    green.style.border='green 5px solid';
    bd.style.backgroundColor='greenyellow';
    for( var i=0;i<list.length;i++){
        list[i].style.backgroundColor='green';
    }
}

grey.onclick=function(){
    grey.style.backgroundColor='white';
    grey.style.border='grey 5px solid';
    bd.style.backgroundColor='gainsboro';
    for( var i=0;i<list.length;i++){
        list[i].style.backgroundColor='grey';
    }
}