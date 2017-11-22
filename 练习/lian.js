// var sum=[]
//  for(var j= 0;j < 8;j++){
//     for(var i = 0;i < j;i++){
//         document.write('*');
//     }
//     document.write('</br>');
//     }
   
   
    // var sum=[]
    // for(var j= 1;j < 8;j++){
    //    for(var i = 1;i < j;i++){
    //        document.write(i+'x'+i+'='+i*i);
    //        document.write(' ')
    //    }
    //    document.write('</br>');
    //    }
    // $('button').eq[0].click(function(){

    // })
    // $(function(){
    //     // $('button').eq(0).click(function(){
    //     //     $('div').addClass('Bgcolor');
    //     //     alert(
    //     //         $('div').hasClass('Bgcolor'))
    //     // });
    //     // $('button').eq(1).click(function(){
    //     //     $('div').removeClass('Bgcolor');
    //     //     alert(
    //     //         $('div').hasClass('Bgcolor'))
    //     // });
    //     $('button').click(function(){
    //         $('div').toggleClass('Bgcolor');
    //     })
    // })

// $(function(){
//     $('.day').click(function(){
//         $('this').addClass('border2').siblings('li').removeClass('border2');
//     })
// })
// $(function(){
//     $('li').mouseenter(function(){
//         //给上面加红红的边框
//         $(this).addClass('border2').siblings('li').removeClass('border2');
//         //给下面加div
//         $('.all>.part').eq($(this).index()).addClass('active2').siblings('.all>.part').removeClass('active2');
//     })
// })


// $("#marquee").kxbdMarquee({
//     isEqual:true,         //所有滚动的元素长宽是否相等,true,false 
//     loop:0,                 //循环滚动次数，0时无限         
//     direction:"up",       //滚动方向，"left","right","up","down"         
//     scrollAmount:1,     //步长         
//     scrollDelay:60        //时长
//   });
// $('.element').dropload({
//     scrollArea : window,
//     loadDownFn : function(me){
//         $.ajax({
//             type: 'GET',
//             url: 'json/more.json',
//             dataType: 'json',
//             success: function(data){
//                 alert(data);
//                 // 每次数据加载完，必须重置
//                 me.resetload();
//             },
//             error: function(xhr, type){
//                 alert('Ajax error!');
//                 // 即使加载出错，也得重置
//                 me.resetload();
//             }
//         });
//     }
// });

refresher.init({
    id:"wrapper",
    pullDownAction:Refresh,                                                            
    pullUpAction:Load                                                                             
    });    
    function Refresh() {       
    // <-- Simulate network congestion, remove setTimeout from production!
        wrapper.refresh();/****remember to refresh after  action completed！ --example-yourId.refresh(); ----| ****/
    } 
     
    function Load() {
    // <-- Simulate network congestion, remove setTimeout from production!
    wrapper.refresh();/****remember to refresh after action completed！！！   -example--yourId.refresh(); --- ****/
    }