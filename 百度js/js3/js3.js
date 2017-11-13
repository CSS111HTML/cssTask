var btn=document.getElementById('sort-btn');

function getData(){
    var ulList=[],i=0,str=[],bval=[],data=[];
    ulList=document.getElementsByTagName('ul')[0].childNodes;
 for(i = 0 ;i < ulList.length;i++){
   str=ulList[i].innerHTML
   str.substring(0,2); 
   str.substring(7,9);
   bval=[str.substring(0,2),str.substring(10,12)];
   data.push(bval)
 }
 
   return data  
console.log(bval)
}
function suu(obj1,obj2){
   var val1=obj1[1];
   var val2=obj2[1];
 return val1 - val2
}
// console.log(cc);
function btnHandle() {
    var aqiData=[],i=0,resort,cc=[],ee=[],ff=[],hh=[];
    aqiData=getData()
    aqiData.sort(suu);
    console.log(aqiData)
    resort=document.getElementById('resort');
    resort.style.display='none';
    for(i= 0 ; i < aqiData.length;i++){
    var cc=document.createElement('li');
    var hh=document.createElement('b');
  ee=['第'+(i+1)+'名:'+aqiData[i][0]+'空气质量：']
  cc.innerHTML=ee;
  resort.appendChild(cc);
  ff=[aqiData[i][1]]
  hh.innerHTML=ff
cc.appendChild(hh)
    }
    // var aqiData = getData();
    // aqiData = sortAqiData(aqidata);
}

function init(){
//     resort.style.display='none';
//         btn.onclick=btnHandle();
//         resort.style.display='block';
btn.onclick=function(){
    if(false){
        resort.style.display='none';
    } else {
        btnHandle();
        resort.style.display='block';
    }
}
}
init();
