window.onload=function(){
    waterfall('main','box');
    var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'}]}
    window.onscroll=function(){
        if(checkscroll){
        //将数据渲染到页面的尾部
        var oparent=document.getElementById('main');
        for(var i = 0;i<dataInt.data.length;i++){
            var obox=document.createElement('div');
            obox.className='box';
            oparent.appendChild(obox);
            var opic=document.createElement('div');
            opic.className='pic';
            obox.appendChild(opic);
            var oimg=document.createElement('img');
            oimg.src="image/"+dataInt.data[i].src;
            opic.appendChild(oimg)
            console.log(obox)
        }
        waterfall('main','box');
    }
}
}
// var box=document.getElementsByClassName('box');
// var main=document.getElementById('parent');
function waterfall(parent,box){
    //取box;
    // var box=document.getElementsByClassName('box');
    var oparent=document.getElementById(parent);
    var oboxs=getboxgroup(oparent,box);
    //计算整个页面的列数
    console.log(oboxs)
    var boxWid=oboxs[0].offsetWidth;
    //列数
    var cols=Math.floor(document.documentElement.clientWidth/boxWid);
   
    oparent.style.width=boxWid*cols+'px';
    oparent.style.margin='0 auto';

    var hsum=[];//第一列高度的数组
    for(var i = 0; i < oboxs.length;i++){
        if(i<cols){
            hsum.push(oboxs[i].offsetHeight);
            //图片最小的高度
        } else{
            var hmin=Math.min.apply(null,hsum);
          var indexs=getmin(hsum,hmin);
            oboxs[i].style.position='absolute';
            oboxs[i].style.top=hmin+'px';
            oboxs[i].style.left=boxWid*indexs+'px';
            hsum[indexs]+=oboxs[i].offsetHeight;
        }  
    }
}
function getboxgroup(parent,clasName){
    var boxsum=[];
    oelem=parent.getElementsByTagName('*');
    for(var i = 0;i < oelem.length;i++){
        if(oelem[i].className==clasName)
       boxsum.push(oelem[i])
        }
        return boxsum
}
function getmin(arr,val){
    for(var i in arr){
        if(arr[i]==val){
           return i
        }
    }
}
//检测是否具有加载数据快的的条件
function checkscroll(){
    var oparent=document.getElementById('main')
    var obox=getboxgroup(oparent,'box');
    var lastBoxH=oboxs[oboxs.length-1].offsetTop+Math.floor(oboxs[oboxs.length-1].offsetHeight/2)
    var scrollTop=document.documentElement.scrollTop
    var height=document.documentElement.clientHeight;
    return (lastBoxH<scrollTop+height)?true:false; 
}

// console.log(checkScollSlide)
// checkScrollSlide();

// waterfall('main','box');
// if(checkScrollSlide()){
//     f
//     }
// } console.log(checkScrollSlide)