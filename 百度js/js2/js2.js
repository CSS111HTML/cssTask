
    var aqiDate =[
        ["北京",90],
        ["上海",50],
        ["福州",10],
        ["广州",50],
        ["成都",90],
        ["西安",100]
    ];
    var compare = function (obj1,obj2){
        var val1=obj1[1];
        var val2=obj2[1];
        return val2 - val1
    }
           console.log(aqiDate.sort(compare))
   
  
    ss();
    function ss(){
        var sss=ab();
        var aqiList=document.getElementById('aqi-list');
        for(var k = 0;k < sss.length;k++){
            var cc=document.createElement('li');
            // sss[k].sort(summ);
            console.log(sss)
            cc.innerHTML='第'+(k+1)+'名：'+sss[k];

           aqiList.appendChild(cc);
        }
        return aqiList;
    }
   function ab(){
        var i,j,len,lens,bba=[] ;
        for(i=0;len=aqiDate.length, 
            i < len;i++){               
            for(j=0;lens=aqiDate[i].length, j < lens;j++){  
                if(aqiDate[i][j] >60){
                    bba.push(aqiDate[i] )                     
                }
            }
        } return bba 
        
    }


