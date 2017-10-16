window.onload=function(){
    var cartTable=document.getElementById('cartTable');
    var tr=cartTable.children[1].rows;
    var checkInputs=document.getElementsByClassName('check');
    var checkAllInputs=document.getElementsByClassName('check-all');
    var selectedTotal=document.getElementById('selectedTotal');
    var priceTotal=document.getElementById('priceTotal');
    var selected=document.getElementById('selected');
    var foot=document.getElementById('foot');
    var selectedViewList=document.getElementById('selectedViewList');
    //计算
    function gettotals(){
        var seleted = 0;
        var price = 0;
        var HTMLstr='';
        for(i = 0; i < tr.length; i++){
            if(tr[i].getElementsByTagName('input')[0].checked){
                tr[i].className='on'
                seleted += parseInt(tr[i].getElementsByTagName('input')[1].value);
                price += parseFloat(tr[i].cells[4].innerHTML);
                HTMLstr +='<div><img src="'+tr[i].getElementsByTagName('img')[0].src+'"><span index="'+i+'">取消选择</span></div>'
            } else { 
                tr[i].className='';
        } 

        }
        selectedTotal.innerHTML=seleted;
        priceTotal.innerHTML=price.toFixed(2);
        selectedViewList.innerHTML=HTMLstr;
        if(seleted===0){
            foot.className='foot'          
        }
    }
    for(var i = 0, len = checkInputs.length;i < len;i++){
        checkInputs[i].onclick =function (){
            if (this.className ==='check-all check'){
                for (var j = 0; j < checkInputs.length;j++){
                    checkInputs[j].checked = this.checked;
                }
            } if(this.checked === false){
                for(var k = 0; k < checkAllInputs.length;k++){
                    checkAllInputs[k].checked = false;
                }
            }
  
            gettotals();
        }
    }
    selected.onclick = function () {
        if (foot.className==='foot') {
           if(selectedTotal.innerHTML != 0){
            foot.className='foot show';  
           }  
        } else{
            foot.className='foot';
        }   
    }
    selectedViewList.onclick=function (e) {
        var el = e.srcElement
        if(el.className=='del'){
            var index=el.getAttribute('index');
            var input=tr[index].getElementsByTagName('input')[0];
            input.checked=false;
        }
    }
    
}