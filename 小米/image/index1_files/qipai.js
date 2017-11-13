// 用户协议
$('.foot-dark a').each(function(index, el) {
    if(el.innerHTML==='服务条款'){
        $(el).before('<a target="_blank" href="//huanle.qq.com/cp/a20170209notice/">用户协议</a><span class="foot-sprt">|</span>');
    }
});
window.tryPgvSendClick=function(){
    //占位防止广告拦截出错
}
$.getScript('http://tajs.qq.com/stats?sId=57941759',function(){
    $.getScript('http://ossweb-img.qq.com/images/js/dcv/ww_tcss.js',function(){
        if (typeof (pgvMain) == 'function') { pgvMain(); }
        window.tryPgvSendClick = function (){
            if (typeof (pgvSendClick) == 'function'){
                pgvSendClick(arguments[0]);
            };
        }
    })
})

$('.qipai-header .logo-qipai').on('click', function(event) {
    tryPgvSendClick({hottag:'web201605.header.logo'});
});
$('.qipai-header .slogen').on('click', function(event) {
    tryPgvSendClick({hottag:'web201605.header.slogen'});
});
$('.qipai-header .slogen').on('click', function(event) {
    tryPgvSendClick({hottag:'web201605.header.slogen'});
});
$('.qipai-header .header-r li').on('click', function(event) {
    var idx=$(this).index('li');
    tryPgvSendClick({hottag:'web201605.header.link'+idx});
});
$('.qipai-header .header-hov li').on('click', function(event) {
    var idx=$(this).index('li');
    tryPgvSendClick({hottag:'web201605.header.bbs'+idx});
});

// 联系客服、微信
function showBotPop(img,tit,con){
    $('.bot-pop-con-l').html('<img src="'+img+'">');
    $('.bot-pop-con-r h4').html(tit);
    $('.bot-pop-con-r ol').html(con);
    $('.bot-pop').addClass('bot-pop-show');
}
/*$('.bot-help').on('click',  function(event) {
    event.preventDefault();
    showBotPop('http://ossweb-img.qq.com/images/sy/template2014/kfcode.jpg','如何联系客服？','<li>A：微信扫描左边二维码进入微信人工客服</li><li>B：点击进入 <a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=40012345&amp;f=1&amp;ty=1&amp;ap=000011:400796:|f:Gydyx1" title="在线人工客服" target="_blank" class="highline">在线人工客服</a></li>');
});*/

$('.bot-help-item-4').on('click', function(event) {
    event.preventDefault();
    showBotPop('http://game.gtimg.cn/images/qipai/web201605/images/qipaiwxarcode.png','如何关注腾讯棋牌公众帐号','<li>A：微信扫描二维码</li><li>B：微信搜索公众号 <b>腾讯棋牌</b></li>');
});

$('.bot-pop-close,.full-overlay').on('click', function(event) {
    event.preventDefault();
    $('.bot-pop').removeClass('bot-pop-show');
});


// 侧边栏
$('li:last','div.bot-help').hover(function() {
    $('.bot-help .box-qrcode').addClass('show');
}, function() {
    $('.bot-help .box-qrcode').removeClass('show');
});

$('div.side-nav .icon-qrcode').hover(function() {
    $('.side-nav .box-qrcode').addClass('show');
}, function() {
    $('.side-nav .box-qrcode').removeClass('show');
});

$('div.side-nav .icon-fav').hover(function() {
    $('.side-nav .box-fav').addClass('show');
}, function() {
    $('.side-nav .box-fav').removeClass('show');
});

$('.side-nav .icon-fav').on('click', function(event) {
    event.preventDefault();
    // alert('请按Ctrl+D方便下次访问哦');
    addFavorite();
});

$('.side-nav .icon-totop').on('click', function(event) {
    event.preventDefault();
    window.scrollTo(0,0);
});

hovEffect('#hoveBtnBbs','.header-hov .bbs');

function hovEffect(btn,box){
   var $box=$(box),timmer;
   $(btn).add(box).on('mouseenter', function() {
        clearTimeout(timmer);
        $box.addClass('show');
   }).on('mouseleave', function() {
        timmer=setTimeout(function(){
            $box.removeClass('show');
        }, 100);
   });
}


function tabEffect(tab,con,type){
    $(tab).eq(0).addClass('current').siblings().removeClass('current');
    $(con).eq(0).addClass('show').siblings().removeClass('show');
    var timmer;
    type=type||'click';
    $(tab).on(type,function(){
        var that=this;
        var idx=$(this).index();
        timmer=setTimeout(function(){
            $(that).addClass('current').siblings().removeClass('current');
            $(con).eq(idx).addClass('show').siblings().removeClass('show');
        }, 100);
    });
    $(tab).on('mouseleave',function(){
        clearTimeout(timmer);
    });
};

function addFavorite() {
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }else if (document.all) {
        try{
            window.external.addFavorite(url, title);
        }catch(e){
            alert('按 Ctrl+D 收藏起来，方便下次访问哦');
        }
    }else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    }else {
        alert('按 Ctrl+D 收藏起来，方便下次访问哦');
    }
}

//广告图获取
function loadAd(id,group,dom,template,callback){
    function getScript(url, callback, charset){
        callback=callback||function(){};
        charset=charset||'';
        var script = document.createElement('script'),
            head = document.head || document.documentElement;
        script.charset=charset;
        script.onload = script.onreadystatechange = function() {
            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                setTimeout(function(){
                    callback();
                }, 0);
                if ( script.parentNode ) {
                    script.parentNode.removeChild( script );
                }
                script = null;
            }
        };
        script.src=url;
        head.insertBefore( script, head.firstChild );
    }
    getScript('http://game.qq.com/time/qqadv/Info_new_'+id+'.js', function() {
        var adData = window['oDaTaNew'+id];
        var count = 0;
        var countryObj;
        var fn_a = [];
        var fn_img = [];
        var fn_tit = [];

        var nowA = '',
            target='';
        for (countryObj in adData) {
            if (adData[countryObj]) {
                if(adData[countryObj][5]==group){
                    count++;
                    fn_tit.push(decodeURIComponent(adData[countryObj][0]));
                    fn_a.push(adData[countryObj][1]);
                    fn_img.push(adData[countryObj][2]);
                };
            }
        }
        for (var i = 0; i < count; i++) {
            if(fn_a[i]===''){
                fn_a[i]='javascript:;';
                target='_self';
            }else{
                target='_blank';
            }
            nowA += template.replace(/\{url\}/g,fn_a[i]).replace(/\{img\}/g,'http://ossweb-img.qq.com/upload/adw/'+fn_img[i]).replace(/\{tit\}/g,fn_tit[i]).replace(/\{idx\}/g,i).replace(/target=(["']).*?\1/g,'target=$1'+target+'$1');
        }

        $(dom).html(nowA);

        callback=callback||function(){};
        callback();

    });
}