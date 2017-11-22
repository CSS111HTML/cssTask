

    $(function(){
        $('.list-item li').click(function(){
            //鼠标点击事件转换
            $(this).addClass('active1').siblings('li').removeClass('active1');
            //下面的div内容转换
            $('.main').eq($(this).index()).addClass('active2').siblings('.main').removeClass('active2');
        })
    })
    
    $("#marquee").kxbdMarquee({
        isEqual:true,         //所有滚动的元素长宽是否相等,true,false 
        loop:0,                 //循环滚动次数，0时无限         
        direction:"up",       //滚动方向，"left","right","up","down"         
        scrollAmount:1,     //步长         
        scrollDelay:60        //时长
      });


  