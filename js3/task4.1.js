
var headvalNum = localStorage.getItem("k1"); 
var headvalNum= JSON.parse(headvalNum);
var box=document.getElementsByClassName('box');
var names=document.getElementsByClassName('names');
var numbers=document.getElementsByClassName('numbers');
var dead=document.getElementById('dead');
var footer=document.getElementById('footer');
var section1=document.getElementById('section1');
var cc=false;
  function sums(){
     var content=document.getElementById('content')
      var divs=document.createElement('div')
      var topup='';
      for(var i = 0;i <headvalNum.length;i++){
        topup+=`
        <div class="wrap"><div class="names">${headvalNum[i]}
        <div class="numbers">${i+1}号</div><img src="./img/pic4.png" class="pic4">
        </div></div>
        `;
      }
      divs.innerHTML=topup;
      content.appendChild(divs)
  }  
  sums();
  
  (function (){
    dead.innerHTML='法官日记';
    dead.onclick=function(){
      location.href='task4.4.html'; 
    }  
  })()

// $('.names').click(function(){
//   $(this).addClass('grey');
// })

// dead.onclick=function(){
//   location.href='window.history.go(-1)'; 
// } 




// if(cc=false){
//   for(var i=1;i<headvalNum.length-1;i+0.5){
//     var section1=document.getElementById('section1');
//     var data1[i]=section1.createElement('data1');
//   }
// }
// if(cc=false){
//   if(i<headvalNum.length){

//   }
// }