
var btn2=document.getElementById('btn2');
var header=document.getElementById('header');
var toupiao=document.getElementById('toupiao');
// var wrap3=document.getElementById('wrap3');
var btn1=document.getElementById('btn1');
var list=document.getElementsByTagName('li')
var cc=false;
var i=1.5;
$('#wrap1').hide();

//明天要做的事
//1.杀手不能杀自己，并且每次都要杀一个人 把杀手可以被杀的时候放在投票里面。2.是要判断人数3.传值。
btn2.onclick=function(){
    $('#wrap2').hide();
    $('#wrap1').show();
//    if(cc=true){
       if(i<list.length){
        var r = /^[-+]?\d*$/;
        if(r.test(i)){
            header.innerHTML='投票'
            toupiao.innerHTML='发言讨论结果'
            $('#wrap3').append(`<div><p>第${[i]}天</p></div>`);
            console.log(header.innerHTML)
            // $('.kill').removeAttr('click');
       }else{
        header.innerHTML='顽主'
        toupiao.innerHTML='顽主请睁眼'
        $('.kill').click(function(){
            alert('茶糖')
        })
        $('.one').click(function(){
            $('#wrap1').hide();
            $('#wrap2').show();
            
        })
       }
       i=i+0.5;
   }
}
// }

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





// if(c=true){
//         btn1.onclick=function(){
//     for(var i=1;i<list.length;i+0.5){
//         var r = /^[-+]?\d*$/;
//         if(r.test(i)){
//             alert('证书')
//                 // $('#wrap1').hide();
//                 // $('#wrap2').show();
//                 // $('#wrap3').append(`<div><p>第${[i]}天</p></div>`); 
//                 break
//             }else{
//                 alert('bu 证书')
//             }
         
//         }
//     }
// }

// for(var i=1;i<list.length;i++){
//     if(i%2==1){
//         console.log(i%2==1)
//     list[0].style.backgroundColor='red';
//     }else{
//         list[0].style.backgroundColor='white';
//     }
//     }