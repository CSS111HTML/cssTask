var button=document.getElementById('button');
button.onclick=function (){
    var apiSpan;
    var aqiInput=document.getElementById('aqi-input');
   apiSpan=document.getElementById('api-display').innerHTML=aqiInput.value;
   apiSpan.innerHTML=aqiInput.value;
    
}