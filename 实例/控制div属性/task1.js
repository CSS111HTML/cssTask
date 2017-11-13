var colors=document.getElementById('colors');
var widths=document.getElementById('widths');
var heights=document.getElementById('heights');
var hiddens=document.getElementById('hiddens');
var resets=document.getElementById('resets');
var box=document.getElementById('box');




      var c=0;
            colors.onclick=function (){           
             if(c===0){
                box.style.backgroundColor='red';  
                c=2;
                }else{
                alert ('请按顺序执行');     
                }
         }   
        widths.onclick=function (){
            if(c===2){
            box.style.width=200+'px';
            c=3;
            }else{
            alert ('请按顺序执行');     
            }
        }
        heights.onclick=function (){
            if(c===3){
               box.style.height=200+'px';
               c=4;
            }else{
               alert ('请按顺序执行');     
            }
          
       }
        hiddens.onclick=function (){
            if(c===4){
               box.style.display='none'
               c=5;
            }else{
               alert ('请按顺序执行');     
            }
          
       }
       resets.onclick=function (){
        if(c===5){
            box.style.backgroundColor='black';  
           box.style.width=100+'px';
           box.style.height=100+'px';
           box.style.display='block';
           c=6;
        }else{
           alert ('请按顺序执行');     
        } 
    }







// var c=1;
// colors.onclick=function(){
//     if(c=1){
//         colors.onclick=function (){
//             box.style.backgroundColor='red';         
//         }   
//         c=0   
//     }
//     else if(a=widths.onclick){   
//         c=1
//     } 
//          else if( b=heights.onclick){
//         alert ('请按顺序执行');
//         }
     
// }
      


// widths.onclick=function (){
//     box.style.width=200+'px';
// }

