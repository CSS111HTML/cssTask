window.onload=function(){
    var cartTable=document.getElementById('cartTable');
    var tr=cartTable.children[1].rows;
    var checkInputs=document.getElementsByClassName('check');
    var checkAllInputs=document.getElementsByClassName('check-all');
    var selectedTotal=document.getElementById('selectedTotal');
    var priceTotal=document.getElementById('priceTotal');
    console.log(checkAllInputs)
    //计算
    function gettotals(){
        var seleted = 0;
        var price = 0;
        for(i = 0; i < tr.length; i++){
            if(tr[i].getElementsByTagName('input')[0].checked){
                seleted += parseInt(tr[i].getElementsByTagName('input')[1].value);
                price += parseFloat(tr[i].cells[4].innerHTML);
            }
        }
        selectedTotal.innerHTML=seleted;
        priceTotal.innerHTML=price.toFixed(2);
    }
    for(var i = 0, len = checkInputs.length;i < len;i++){
        checkInputs[i].onclick =function (){
            if (this.className ==='check-all check'){
                for (var j = 0; j < checkInputs.length;j++){
                    checkInputs[j].checked = this.checked;
                }
            }
  
            gettotals();
        }
    }
}