var  inputText=[],tt=false;
inputText=document.getElementById('inputText');
var submitText=document.getElementById('submitText');
var pText=document.getElementById('pText');
console.log(inputText.value)
console.log(inputText.length);
submitText.onclick=function(){
    var lens=valLen()
    if(tt){
        if(lens<4 || lens>16){
            alert('字符为4-16个字符')
            pText.innerHTML='格式错误'
            pText.style.color='red';
        } 
            tt=false
    }
    else{
        if(lens>3 && len<17){
            pText.innerHTML='格式正确'
            pText.style.color='green'; 
            }
}
tt=true
}
//计算汉字字符的长度，和英语字符的长度
function valLen(){
    var countCode=0,inputlen=[];
    for(var i = 0;len = inputText.value.length,i < len;i ++ ){
        countCode=inputText.value.charCodeAt(i)
        if(countCode >= 0 && countCode <= 128){
            inputlen++
        } else{
            inputlen+=2
        }
    } return inputlen
}