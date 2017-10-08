var headvalNum = localStorage.getItem("k1"); 
var headvalNum= JSON.parse(headvalNum);
var box=document.getElementsByClassName('box');
var names=document.getElementsByClassName('names');
var numbers=document.getElementsByClassName('numbers');
var content=document.getElementsByClassName('content');
var boxnum=[]
var c;
if(c=1){
    content=$(content);
    for(var i = 0;i < headvalNum.length;i++){
        // box[i].style.display="block";
        $(content).append(
        '<div class="box">'+
        '<div class="names">'+headvalNum[i]+'</div>'+
        '<div class="numbers">'+i+"号"+'</div>'+
        '</div>'
      )
        //   $(".names").text(headvalNum[i]);
        //     console.log(headvalNum)
            // number.node.value=1+"号";
            // $().text();
        //     $(".names").append(headvalNum[i]);
        // $("#box").append('<div class="numbers">'+i+"号"+'</div>');
            
        
        // names.document.write=headvalNum[i];
        // console.log(box)
        // box[i].style.display="block";
        // console.log(box)
    }
   
    c=1
}
