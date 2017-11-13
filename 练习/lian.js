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
$(function(){
    $('li').mouseenter(function(){
        //给上面加红红的边框
        $(this).addClass('border2').siblings('li').removeClass('border2');
        //给下面加div
        $('.all>.part').eq($(this).index()).addClass('active2').siblings('.all>.part').removeClass('active2');
    })
})