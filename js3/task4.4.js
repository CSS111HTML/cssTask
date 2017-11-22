// 投票开始

var headvalNum = localStorage.getItem("k1"); 
var headvalNum= JSON.parse(headvalNum);
var box=document.getElementsByClassName('box');
var names=document.getElementsByClassName('names');
var numbers=document.getElementsByClassName('numbers');
var dead=document.getElementById('dead');
var footer=document.getElementById('footer');
var section1=document.getElementById('section1');
var wrap=document.getElementsByClassName('wrap');
var img1=document.getElementsByTagName('img')
var death=document.getElementById('death');
var btn4=document.getElementById('btn4');
var list=document.getElementsByTagName('li');
var p1='';
var navbarBottom=document.getElementById('navbar-bottom');
var vote=document.getElementById('vote');
var cc=false;
var i=1.5;
 var e=0; 




  function sums(){
     var content=document.getElementById('content');
      var divs=document.createElement('div');
      var topup='';
      for(var i = 0;i <headvalNum.length;i++){
        topup+=`
        <li class="wrap"><div class="names">${headvalNum[i]}</div>
        <div class="numbers">${i+1}号</div><img src="./img/pic4.png" class="pic4">
        </li>
        `;
      }
      divs.innerHTML=topup;
      content.appendChild(divs);
  }  
  sums();
  // $('#speak').click(function(){
  //   alert('茶糖')
  // })

if(e==0){
  $('.kill3').click(function(){
    e=1;   
    $('#wrap2').hide();
    $('#wrap3').show();
  //   $('#vote3').click(function(){
  //     $('#wrap2').hide();
  //     $('#wrap3').show();
  // })
   
    if(i<names.length){
      
      var r = /^[-+]?\d*$/;
        if(r.test(i)){
          // i=i+0.5;
          console.log(i);
          vote.innerHTML='投票';
          navbarBottom.innerHTML='发言讨论结果';
          $('.kill3').text('杀手杀人');
            $('#time').append(`<div><p>第${[i]}天</p></div>`);
            // if(e===4){ 
              
              // if($('.names').text='杀手'){
                console.log($('.names').text());
              $('#speak').click(function(){
                $('#all1').hide();
              $('.speak1').hide();
              // alert('请按照顺序来');
            })
            // e=5
            // };
            // if(e===5){
                $('#speak3').click(function(){
                  // alert('请按照顺序来');
                  $('#all1').hide();
                  $('.speak2').hide();
                }) 
              //   e=1;
              // };    
       }else {
        
        $('.kill3').text('全民投票');
        vote.innerHTML='杀手杀人';
        navbarBottom.innerHTML='杀手请睁眼';
        if(e===1){
          $('#speak').click(function(){
            $('#all1').show();
            $('.speak1').show();
          })
          $('.btn5').click(function(){
            $('#all1').hide();
            $('.speak1').hide();
          })
          e=2;
        };
        if(e===2){
          $('#speak3').click(function(){
            $('#all1').show();
            $('.speak2').show();
            
          })
          $('.btn6').click(function(){
            $('#all1').hide();
            $('.speak2').hide();
          })
        };
        if(($('.names').text())===杀手){
          $(this).removeClass('grey');
          $('#wrap2').hide();
           $('#wrap3').show();
        } else{
        $('.names').mousedown(function(){
          for(var i = 0;i<names.length;i++){
            var dd=[];
            names[i].index=i;
            if($(this).hasClass('grey')){
       }else{
         $(this).addClass('grey');
         img1[this.index].style.display='block';
         p1=`
         <p>${(this.index)+1}号被杀死，身份是${this.innerHTML}</p>
         `
         console.log(p1)
         $('#death').empty();
        $('#death').append(p1);
        dd.push(p1);
        console.log( $('#death'));
        console.log(dd);
        dd=JSON.stringify(dd);
        localStorage.setItem('k1',dd);
        }   
      
    }
    })
    $('.names').mouseup(function(){
      img1[this.index].style.display='none';
      $('#wrap2').show();
      $('#wrap3').hide();
    }) 

}
}
 
       i=i+0.5;
       
   };
 
})
};



// if($('.names').text='杀手'){
//   $(this).removeClass('grey');
//   $('#wrap2').hide();
//    $('#wrap3').show();
// }else{

// $('.kill2').click(function(){
//       alert('茶糖')
//  })

      //   //投票杀人
      //   $('.names').mousedown(function(){
      //     for(var i = 0;i<names.length;i++){
      //       var cc=[];
      //       names[i].index=i;
      //       if($(this).hasClass('grey')){
      //  }else{
      //    $(this).addClass('grey');
      //    img1[this.index].style.display='block'
      //    p1=`
//          <p>${(this.index)+1}号被杀死，身份是${this.innerHTML}</p>
//          `
//          $('#death').empty();
//         $('#death').append(p1)
//         // console.log(p1);
//         cc.push(p1)
//         cc=JSON.stringify(cc);
//         localStorage.setItem('k1',cc);
//         // console.log(cc);
//       } 
//       }
//     })


//     $('.names').mouseup(function(){
//       img1[this.index].style.display='none'
//       $('#wrap2').show();
//       $('#wrap3').hide();
//     }) 
    
// $('#dead').click(function(){
//     $('#dead').html('法官日志') 
//     $('#wrap2').show();
//     $('#wrap3').hide();
//    $('.pic4').hide();
// })
