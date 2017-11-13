var wrap=document.getElementById('wrap');
var btns=wrap.getElementsByTagName('input')
var list=wrap.getElementsByTagName('li')

for(var i = 0;i<btns.length;i++){
   btns[i].index=i;
    btns[i].onclick=function(){
        for(var i = 0;i<btns.length;i++){
            btns[i].className='';
            list[i].style.display='none';
        }
        this.className='border1';
        list[this.index].style.display='block'
    } 
}