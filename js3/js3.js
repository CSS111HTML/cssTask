
var headmid=document.getElementById('headerMid');
headmid.innerHTML='查看身份';
var headLeft=document.getElementById('headerLeft')
headLeft.onclick=function ac(){
    history.go(-1);
}
var voteBtn=document.getElementById('voteBtn');
var headvalNum = localStorage.getItem("k1"); 
var headvalNum= JSON.parse(headvalNum);
console.log(headvalNum.length);
console.log(headvalNum);
var pic=document.getElementById('pic')
var wrapper=document.getElementById('wrapper')
var num=document.getElementById('num')
var textRole=document.getElementById('textRole')
var i=1;
num.value=i;

var pic=document.getElementById('pic')
var wrapper=document.getElementById('wrapper')
var i=0;
// num.value=i+1;
voteBtn.value="查看"+(i+1)+"号身份"
pic.style.display="block";
wrapper.style.display="none";
var flag=false;
voteBtn.onclick=function cc(){
    if(flag){
        if(i<headvalNum.length){
            num.value=i+1;
            pic.style.display="block";
            wrapper.style.display="none";
            voteBtn.value="查看"+(i+1)+"号身份" 
        } 
        flag=false
    }
    else { 
        if(i<headvalNum.length-1){
            num.value=i+1;
            voteBtn.value="查看"+(i+1)+"号身份"
            pic.style.display="none";
            wrapper.style.display="block";
            textRole.innerHTML=headvalNum[i] 
            i=i+1;
            voteBtn.value="隐藏并传给"+(i+1)+"号"
        } else {
            voteBtn.value="法官查看"
            if(i=headvalNum.length-1){
                    voteBtn.onclick=function(){
                    location.href="task4.1.html"
                }
                
            }
        }        
        flag=true
    } 
}

