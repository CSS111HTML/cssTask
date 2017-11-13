// var cars1=document.getElementById('cars1');
// var success=document.getElementById('success');
// var allBlack=document.getElementById('allBlack');
// cars1.onclick=function(){
//     success.style.display='block';
//     success.style.position='absolute';
//     success.style.top=parseInt(screen.availHeight/2+document.documentElement.scrollTop)+'px';
//     console.log(parseInt(document.documentElement.scrollTop));
//     console.log(parseInt(screen.availHeight/2));
//     success.style.left=screen.availWidth/2+'px';
//     allBlack.style.display='block';
// }
$('#cars1').click(function(){
    $('#allBlack').show();
    $('#success').show();
    $('#success').css({'position':'absolute','top':'parseInt($(window).height()/2+$(document).scrollTop())+"px"','left':'parseInt($(window).Width()/2)+"px"'});
    // $('#success').css('top','parseInt($(window).height()/2+$(document).scrollTop())+"px"');
    // $('#success').css('left','parseInt($(window).Width()/2+"px"');
    console.log(parseInt($(window).height()/2+$(document).scrollTop())+'px')
    console.log(parseInt($(window).Width()/2)+'px')
});