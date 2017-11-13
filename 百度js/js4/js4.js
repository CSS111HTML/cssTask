var textInput=document.getElementById('textInput').value;
var btnIntLeft=document.getElementById('btnInt-left');
var btnIntRight=document.getElementById('btnInt-right');
var btnOutLeft=document.getElementById('btnOut-left');
var btnOutRight=document.getElementById('btnOut-right');
var sortNum=document.getElementById('sortNum');
var ulList=document.getElementById('ulList')
var ulList2=document.getElementById('ulList2')
//inout 的值
function aa(){
    var textInput=document.getElementById('textInput').value;
    return textInput;
}
//输出按钮 左
btnIntLeft.onclick=function (bb){
    var bb,zz;
    allLi=document.getElementsByTagName('li');//所有li元素
    bb=document.createElement('li');
   vals(bb);
 
    //如果原本有li那么插在li标签之前，没有就直接创建
    (function childs(){
        if(allLi.length < 0){
            ulList.appendChild(bb);
        } else{
           ulList.insertBefore(bb,allLi[0])
        }
    }())
}

function vals(bb){
    zz=aa();
    if(zz<10 ||zz>100){
        alert('请输入数字10-100之间')
        bb.style.display='none';
    } else{
        bb.style.height=zz+'px'; 
}
}

//输出按钮 右
btnIntRight.onclick=function (){
    var cc,ulList,zz
    ulList=document.getElementById('ulList')
    cc=document.createElement('li');
    vals(cc);
    ulList.appendChild(cc);
}
//删除左
btnOutLeft.onclick=function outL(outValL,ulList){
var ulList,bb,outValL;
ulList=document.getElementById('ulList');
outValL=ulList.removeChild(ulList.firstChild);
confirm(parseInt(outValL.style.height))
}
//删除右
btnOutRight.onclick=function outR(){
    var ulList,allLi,outValR;
    ulList=document.getElementById('ulList');
    allLi=document.getElementsByTagName('li');
    outValR=ulList.removeChild(allLi[allLi.length-1]);
     confirm(parseInt(outValR.style.height))
    }
   
    sortNum.onclick=function suu(){
        var allLi,i,allVal=[];
        var ulList2=document.getElementById('ulList2')
        allLi=document.getElementsByTagName('li');
        for(i = 0;len=allLi.length,i < len;i++){
            allVal.push(parseInt(allLi[i].style.height));
        }
     var sss=allVal.sort(nums)
       if(c=1){
        var allLi,i,lastList=[],zouni,ulList2=[];
        for(i= 0;sss.length=len,i<len;i ++){
            // allLi[i]=
            var ulList2=document.getElementById('ulList2')
            zouni=document.createElement('li');
            console.log(zouni.style.height);
            zouni.style.height=sss[i]+'px';
            console.log(sss[i])
            ulList2.appendChild(zouni)
            btnOutLeft.onclick(zouni,ulList2)
           
        }
         ulList.style.display='none';
        console.log(sss[i])
        console.log(ulList2)
    }
    
    // else{
    // }
}
    // //排序函数
    function nums(a,b){
        var a,b;
        return a-b
    }
   