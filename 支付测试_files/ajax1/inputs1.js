//点击按钮
//判断是否为空
//防止重复提交
//get
//判断密码正确与否
var con=true;
$('#sub').click(function(){
    var admin=$('.admin').val();
    var pw=$('.pw').val();
    if(admin==''||pw==''){
        alert('账号或密码不能为空');
    }
    if(con){
        con=false;
        alert('正在提交，请稍后...')
    }
    $.getJSON('url='+admin+'&pw='+pw).done(function(abcdata){
        if(0==abcdata.code){
            alert(abcdata.message)
            window.location.href='http://www.xueyuplus.com/seller/index?p=index';
        }else{
            alert(abcdata.message)
        }
        con=true;
    })
})