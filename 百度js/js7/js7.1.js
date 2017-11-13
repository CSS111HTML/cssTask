var inputT=document.getElementById('inputT');
var inputPw=document.getElementById('inputPw');
var inputPW=document.getElementById('inputPW');
var inputEmail=document.getElementById('inputEmail');
var inputTel=document.getElementById('inputTel');
var inputSub=document.getElementById('inputSub');
//用户名验证
var tt=false
inputT.onblur=function(){
    var pText=document.getElementById('pText');
    var lens=valLen()
    if(tt){
        if(lens<4 || lens>16){
            pText.innerHTML='字符为4-16个字符'
            pText.style.color='red';
        } 
            tt=false
    }
    else{
        if(lens>3 && len<17){
            pText.innerHTML='格式正确'
            pText.style.color='green'; 
            } else{
                pText.innerHTML='不能为空'
                pText.style.color='red';
            }
}
tt=true
}

//计算汉字字符的长度，和英语字符的长度
function valLen(){
    var countCode=0,inputlen=0;
    for(var i = 0;len = inputT.value.length,i < len;i ++ ){
        countCode=inputT.value.charCodeAt(i)
        if(countCode >= 0 && countCode <= 128){
            inputlen++
        } else{
            inputlen+=2
        }
    } return inputlen
}

inputPw.onblur=function(){
    var pPW=document.getElementById('pPw');
    if(inputPw.value===''){
        pPw.innerHTML='密码不能为空'
        pPw.style.color='red';
    }else {
        
        pPw.innerHTML='格式正确'
        pPw.style.color='green';
}
}
//密码设置
inputPW.onblur=function(){
    //密码验证字符段
    var pPW=document.getElementById('pPW');
    if(inputPW.value===''){
        pPW.innerHTML='密码不能为空，请重新输入'
        pPW.style.color='red';
    }else if(inputPw.value==inputPW.value){
    pPW.innerHTML='格式正确'
    pPW.style.color='green';
}else {
    pPW.innerHTML='与上次输入不同，请重新输入'
    pPW.style.color='red';
}
}
//电话
inputTel.onblur=function(){
    var pTel=document.getElementById('pTel');
    var str=/^\d{11}$/;
    if(str.test(inputTel.value)){
        pTel.innerHTML='格式正确'
        pTel.style.color='green';
    } else{
        pTel.innerHTML='格式错误，请重新填写'
        pTel.style.color='red';
    }
}
//邮箱
inputEmail.onblur=function(){
    var str=/^(\w*-*\.*)+@(\w*)\.(\w){2,4}$/
    var pEmail=document.getElementById('pEmail');
    if(str.test(inputEmail.value)){
        pEmail.innerHTML='格式正确'
        pEmail.style.color='green';
    } else{
        pEmail.innerHTML='格式错误，请重新填写'
        pEmail.style.color='red';
    }
}
inputSub.onclick=function(){
    var listitem=document.getElementsByTagName('p');
    for(var i =0;lens=listitem.length, i <lens; i++){
        if(listitem[i].style.color!='green'){
            alert('表单有误，请修改')
            break
        } 
    }
}