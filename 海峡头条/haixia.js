
$(function(){
    $('.list-item li').click(function(){
        //鼠标点击事件转换
        $(this).addClass('active1').siblings('li').removeClass('active1');
        //下面的div内容转换
        $('.main').eq($(this).index()).addClass('active2').siblings('.main').removeClass('active2');
    })
})