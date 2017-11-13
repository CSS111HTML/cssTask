function initBannerSlide() {
    $('.indexheader-slide-l .swiper-wrapper').html($('.indexheader-slide .swiper-wrapper').html());
    $('.indexheader-slide-r .swiper-wrapper').html($('.indexheader-slide .swiper-wrapper').html());

    $('.indexheader-slide-l .swiper-wrapper').prepend($('.indexheader-slide-l .swiper-wrapper').children().eq(-1));
    $('.indexheader-slide-r .swiper-wrapper').append($('.indexheader-slide-r .swiper-wrapper').children().eq(0));

    var mySwiperindexheaderL = $('.indexheader-slide-l .swiper-container').swiper({
        mode: 'horizontal', // vertical
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: false,
        pagination: '.indexheader-slide .pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // console.log(swiper);
        },
        initialSlide: 0
    });
    var mySwiperindexheaderR = $('.indexheader-slide-r .swiper-container').swiper({
        mode: 'horizontal', // vertical
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: false,
        pagination: '.indexheader-slide .pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // console.log(swiper);
        },
        initialSlide: 0
    });

    var mySwiperindexheader = $('.indexheader-slide .swiper-container').swiper({
        mode: 'horizontal', // vertical
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: false,
        pagination: '.indexheader-slide .pagination',
        paginationClickable: false,
        autoplay: 3000,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // var l=swiper.slides.length
            // mySwiperindexheaderL.swipeTo((swiper.activeLoopIndex-1+l)%l);
            // mySwiperindexheaderR.swipeTo((swiper.activeLoopIndex+1)%l);
            // console.log(swiper.activeLoopIndex);
        },
        onSlideNext:function(){
            mySwiperindexheaderL.swipeNext();
            mySwiperindexheaderR.swipeNext();
            // console.log('NEXT');
        },
        onSlidePrev:function(){
            mySwiperindexheaderL.swipePrev();
            mySwiperindexheaderR.swipePrev();
            // console.log('PREV');
        },
        initialSlide: 0
    });

    // mySwiperindexheader.resizeFix();
    // mySwiperindexheader.reInit()
    // mySwiperindexheader.activeIndex

    // mySwiperindexheader.swipeNext()
    // mySwiperindexheader.swipePrev()
    // mySwiperindexheader.swipeTo(index)
    $('.indexheader-slide .slidebtn-prev,.indexheader-slide-l .indexheader-slide-mask').on('click', function(e) {
        e.preventDefault()
        mySwiperindexheader.swipePrev();
        tryPgvSendClick({hottag:'web201605.index.banner.btnprev'});
        
    })
    $('.indexheader-slide .slidebtn-next,.indexheader-slide-r .indexheader-slide-mask').on('click', function(e) {
        e.preventDefault()
        mySwiperindexheader.swipeNext();
        tryPgvSendClick({hottag:'web201605.index.banner.btnnext'});
    })
};

$(function() {
    var mySwipertopnews = $('.topnews-slide .swiper-container').swiper({
        mode: 'vertical', // vertical
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: false,
        // pagination: '.topnews-slide .pagination',
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // console.log(swiper);
        },
        initialSlide: 0
    });

    // mySwipertopnews.resizeFix();
    // mySwipertopnews.reInit()
    // mySwipertopnews.activeIndex

    // mySwipertopnews.swipeNext()
    // mySwipertopnews.swipePrev()
    // mySwipertopnews.swipeTo(index)
    $('.topnews-slide .slidebtn-prev').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.topnews-slide .slidebtn-next').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })
});
$(function() {
    var mySwiperhotgame = $('.hotgame-slide .swiper-container').swiper({
        mode: 'horizontal', // vertical
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 5,
        followFinger: false,
        // pagination: '.hotgame-slide .pagination',
        paginationClickable: true,
        // autoplay: 2000,
        preventLinks:false,
        simulateTouch:false,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // console.log(swiper);
        },
        initialSlide: 0
    });

    // mySwiperhotgame.resizeFix();
    // mySwiperhotgame.reInit()
    // mySwiperhotgame.activeIndex

    // mySwiperhotgame.swipeNext()
    // mySwiperhotgame.swipePrev()
    // mySwiperhotgame.swipeTo(index)
    $('.hotgame-slide .slidebtn-prev').on('click', function(e) {
        e.preventDefault()
        mySwiperhotgame.swipePrev()
        tryPgvSendClick({hottag:'web201605.index.hotgame.btnprev'});
    })
    $('.hotgame-slide .slidebtn-next').on('click', function(e) {
        e.preventDefault()
        mySwiperhotgame.swipeNext()
        tryPgvSendClick({hottag:'web201605.index.hotgame.btnnext'});
    })
});
function initNewgameSlide() {
    var mySwipernewgame = $('.newgame-slide .swiper-container').swiper({
        mode: 'horizontal', // vertical
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: false,
        pagination: '.newgame-slide .pagination',
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // console.log(swiper);
        },
        initialSlide: 0
    });

    // mySwipernewgame.resizeFix();
    // mySwipernewgame.reInit()
    // mySwipernewgame.activeIndex

    // mySwipernewgame.swipeNext()
    // mySwipernewgame.swipePrev()
    // mySwipernewgame.swipeTo(index)
    $('.newgame-slide .slidebtn-prev').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.newgame-slide .slidebtn-next').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })
};
function initTalladSlide() {
    var mySwipertallad = $('.tallad-slide .swiper-container').swiper({
        mode: 'horizontal', // vertical
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: false,
        pagination: '.tallad-slide .pagination',
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // console.log(swiper);
        },
        initialSlide: 0
    });

    // mySwipertallad.resizeFix();
    // mySwipertallad.reInit()
    // mySwipertallad.activeIndex

    // mySwipertallad.swipeNext()
    // mySwipertallad.swipePrev()
    // mySwipertallad.swipeTo(index)
    $('.tallad-slide .slidebtn-prev').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.tallad-slide .slidebtn-next').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })
};
function initActnewsSlide() {
    var mySwiperactnews = $('.actnews-slide .swiper-container').swiper({
        mode: 'horizontal', // vertical
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: false,
        pagination: '.actnews-slide .pagination',
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // console.log(swiper);
        },
        initialSlide: 0
    });

    // mySwiperactnews.resizeFix();
    // mySwiperactnews.reInit()
    // mySwiperactnews.activeIndex

    // mySwiperactnews.swipeNext()
    // mySwiperactnews.swipePrev()
    // mySwiperactnews.swipeTo(index)
    $('.actnews-slide .slidebtn-prev').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.actnews-slide .slidebtn-next').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })
};
function initMatchSlide() {
    var mySwipermatch = $('.match-slide .swiper-container').swiper({
        mode: 'horizontal', // vertical
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: false,
        pagination: '.match-slide .pagination',
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // console.log(swiper);
        },
        initialSlide: 0
    });

    // mySwipermatch.resizeFix();
    // mySwipermatch.reInit()
    // mySwipermatch.activeIndex

    // mySwipermatch.swipeNext()
    // mySwipermatch.swipePrev()
    // mySwipermatch.swipeTo(index)
    $('.match-slide .slidebtn-prev').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.match-slide .slidebtn-next').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })
};
function initVideoSlide() {
    var mySwipervideo = $('.video-slide .swiper-container').swiper({
        mode: 'horizontal', // vertical
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        followFinger: false,
        pagination: '.video-slide .pagination',
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction:false,
        onSlideChangeStart: function(swiper) {
            // console.log(swiper);
        },
        initialSlide: 0
    });

    // mySwipervideo.resizeFix();
    // mySwipervideo.reInit()
    // mySwipervideo.activeIndex

    // mySwipervideo.swipeNext()
    // mySwipervideo.swipePrev()
    // mySwipervideo.swipeTo(index)
    $('.video-slide .slidebtn-prev').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.video-slide .slidebtn-next').on('click', function(e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })
};

// 下载pop条 S
$('.hotgame-slide').on('click','.swiper-slide .btn-down',function() {
    $(this).closest('.swiper-slide').find('.download-tip').toggleClass('show');
});

$('.hotgame-slide').on('mouseenter','.swiper-slide .btn-qrcode',function() {
    $(this).closest('.swiper-slide').find('.popdown-qrcode').addClass('show');
});
$('.hotgame-slide').on('mouseleave','.swiper-slide .btn-qrcode',function() {
    $(this).closest('.swiper-slide').find('.popdown-qrcode').removeClass('show');
});

$('.newgame-item-btns .btn-down').on('click',function() {
    $('.newgame-item-btns .download-tip').toggleClass('show');
});

$('.newgame-item-btns .btn-qrcode').hover(function(){
    $('.newgame-item-btns .popdown-qrcode').toggleClass('show');
});
// 下载pop条 E

tabEffect('.indextab-tab a','.indextab-con-item','mouseenter');
tabEffect('.actnewstab-tab a','.actnewstab-con ul','mouseenter');
tabEffect('.matchtab-tab a','.matchtab-con ul','mouseenter');

$('.hotgame-slide .swiper-slide').each(function(index, el) {
    $(el).addClass('rank-'+index);
});

$('.fixedbanner').on('click', '.fixedbanner-close', function(event) {
    event.preventDefault();
    $('.fixedbanner').remove();
});

// 广告图S
loadAd(15200,3,'.indexheader-slide .swiper-wrapper','<div class="swiper-slide"><a href="{url}"><img src="{img}"><span class="tit">{tit}</span></a></div>',initBannerSlide);
loadAd(15200,0,'.gl-pic-big','<a href="{url}"><img src="{img}"><span>{tit}</span></a>');
loadAd(15200,9,'.gl-pic-small:eq(0)','<a href="{url}"><img src="{img}" title="{tit}"></a>');
loadAd(15200,10,'.gl-pic-small:eq(1)','<a href="{url}"><img src="{img}" title="{tit}"></a>');
loadAd(15200,2,'.fixedbanner-wrap','<div class="fixedbanner-l"> <a href="{url}"><img src="{img}"></a> </div> <div class="fixedbanner-r"> <h3><a href="{url}">{tit}</a></h3> </div> <div class="fixedbanner-close"></div>',function(){
    $('.fixedbanner').show();
});
loadAd(15200,4,'.newgame-slide .swiper-wrapper','<div class="swiper-slide"><a href="{url}"><img src="{img}"></a></div>',initNewgameSlide);
loadAd(15200,5,'.tallad-slide .swiper-wrapper', '<div class="swiper-slide"><a href="{url}"><img src="{img}"></a></div>',initTalladSlide);
loadAd(15200,6,'.actnews-slide .swiper-wrapper', '<div class="swiper-slide"><a href="{url}"><img src="{img}"></a></div>',initActnewsSlide);
loadAd(15200,7,'.match-slide .swiper-wrapper',   '<div class="swiper-slide"><a href="{url}"><img src="{img}"></a></div>',initMatchSlide);
loadAd(15200,8,'.video-slide .swiper-wrapper',   '<div class="swiper-slide"><a href="{url}"><img src="{img}"></a></div>',initVideoSlide);
// 广告图E

// 数据统计
// 热门游戏
$('.hotgame-slide').on('click', '.swiper-slide .download-tip a', function(event) {
    // event.preventDefault();
    /* Act on the event */
    var folder=$(this).closest('.swiper-slide').data('folder');
    var plat='';
    if($(this).has('.icon-color-ios')){
        plat='ios'
    };
    if($(this).has('.icon-color-and')){
        plat='android'
    };
    tryPgvSendClick({hottag:'web201605.index.hotgame.'+folder+plat});
});
$('.hotgame-slide').on('click', '.hotgame-item a img', function(event) {
    // event.preventDefault();
    /* Act on the event */
    var folder=$(this).closest('.swiper-slide').data('folder');
    tryPgvSendClick({hottag:'web201605.index.hotgame.'+folder+'icon'});
});
// 新游介绍
$('.newgame-item').on('click', '.download-tip a', function(event) {
    // event.preventDefault();
    /* Act on the event */
    var folder=$(this).closest('.newgame-item').data('folder');
    var plat='';
    if($(this).has('.icon-color-ios')){
        plat='ios'
    };
    if($(this).has('.icon-color-and')){
        plat='android'
    };
    tryPgvSendClick({hottag:'web201605.index.newgame.'+folder+plat});
});
$('.newgame-item').on('click', '.btn-home', function(event) {
    // event.preventDefault();
    /* Act on the event */
    var folder=$(this).closest('.newgame-item').data('folder');
    tryPgvSendClick({hottag:'web201605.index.newgame.'+folder+'home'});
});
$('.newgame-item').on('click', 'a.more', function(event) {
    // event.preventDefault();
    /* Act on the event */
    var folder=$(this).closest('a.more.newgame-item').data('folder');
    tryPgvSendClick({hottag:'web201605.index.newgame.'+folder+'more'});
});

// 屏幕底部横幅
$('.fixedbanner').on('click', '.fixedbanner-close', function(event) {
    tryPgvSendClick({hottag:'web201605.index.fixedbanner.close'});
});
$('.fixedbanner').on('click', '.fixedbanner-r', function(event) {
    tryPgvSendClick({hottag:'web201605.index.fixedbanner.link'});
});
$('.fixedbanner').on('click', '.fixedbanner-l', function(event) {
    tryPgvSendClick({hottag:'web201605.index.fixedbanner.pic'});
});
