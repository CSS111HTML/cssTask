
   
var box=document.getElementsByClassName('box');
var main=document.getElementById('main');
var boxsum=[];//所有box
var dataInt={"data":[{"src":'P_00.jpg'},{"src":'P_01.jpg'},{"src":'P_03.jpg'},{"src":'P_04.jpg'},{"src":'P_05.jpg'},{"src":'P_06.jpg'}]}
function waterfall(parent,box){
    //取box;
    var box=document.getElementsByClassName('box');
    var main=document.getElementById('parent');
}
// checkScrollSlide();
// waterfall('main','box');
// if(checkScrollSlide()){
//     for(var i = 0;i<dataInt.data.length;i++){
//         var obox=document.createElement('div');
//         obox.className='box';
//         main.appendChild(obox);
//         var opic=document.createElement('div');
//         opic.className='pic';
//         obox.appendChild(opic);
//         var oimg=document.createElement('div');
//         oimg.src="image/"+dataInt.data[i].src;
//         opic.appendChild(oimg)
//     }
// } console.log(checkScrollSlide)

for(var i = 0;i < 20;i++){
boxsum.push(box[i])
}
// checkScrollSlide();

//计算宽度
var boxWid=boxsum[0].offsetWidth;
//列数
var cols=Math.floor(document.documentElement.clientWidth/boxWid);
main.style.width=boxWid*cols+'px'
main.style.margin='0 auto'
var hsum=[];//第一列高度的数组
for(var i = 0; i < boxsum.length;i++){
    if(i<cols){
        hsum.push(boxsum[i].offsetHeight);
        //图片最小的高度
    } else{
        var hmin=Math.min.apply(null,hsum);
      var indexs=getmin(hsum,hmin);
    // for(var i = 0;i < hsum.length;i++){
    //     if(hsum[i]==hmin){
    //          indexs=i
    //     }
    // }
        boxsum[i].style.position='absolute';
        boxsum[i].style.top=hmin+'px';
        boxsum[i].style.left=boxWid*indexs+'px';
        hsum[indexs]+=boxsum[i].offsetHeight;
    }  
}

function getmin(arr,val){
    for(var i = 0;i < arr.length;i++){
        if(arr[i]==val){
           return i
        }
    }
}




//检测是否具有加载数据快的的条件
// function checkScrollSlide(){
//     for(var i = 0;i < 20;i++){
//         boxsum.push(box[i])
//         }
//     var lastBoxH=boxsum[boxsum.length-1].offsetTop+Math.floor(boxsum[boxsum.length-1].offsetHeight/2)
//     var scrollTop=document.documentElement.scrollTop
//     var height=document.documentElement.clientHeight;
//     return (lastBoxH<scrollTop+height)?true:false; 
// }

// console.log(checkScollSlide)
