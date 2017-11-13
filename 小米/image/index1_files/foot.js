(function(){
    var gfooter = document.getElementById("gfooter");
    var _url = gfooter.src.split("?t=");
    var cname="foot-light";
    if(_url.length>1){
        cname = _url[1].replace(/([.*+?^=!:${}()#|[\]/\\])/g, '');
        if(cname==1){cname="foot-light"}
        if(cname==2){cname="foot-dark"}
    }
    var gameIcpUrl = gfooter.getAttribute('data-gameicpurl'),
        gameIcpNumber = gfooter.getAttribute('data-gameicpnumber'),
        age = gfooter.getAttribute('data-age'),
        gameIcpHtml = "";
    if(!age){age="18";}
    if(gameIcpNumber){
        var img='<img src="//ossweb-img.qq.com/images/sy/template2014/js/icplogo.png" width="13" height="15" style="vertical-align:middle;margin-right:3px;display:inline !important;">';
        if(gameIcpUrl && gameIcpUrl!='#'){
            gameIcpHtml = "<a target=\"_blank\" href=\""+gameIcpUrl+"\">"+img+gameIcpNumber+"</a>"
        }else{
            gameIcpHtml = img+gameIcpNumber;
        }
        gameIcpHtml += '<span class=\"foot-sprt\"> | </span>';
    }
    document.write("<div class=\"foot "+ cname +"\"><div class=\"container\"><div class=\"foot-cpright clear tool-tpline\"><div class=\"f-left foot-logos\"><a href=\"\/\/ieg.tencent.com\/\" title=\"腾讯互动娱乐\" class=\"foot-logos-game\" target=\"_blank\">腾讯互动娱乐<\/a><\/div><ul class=\"f-right foot-links\"><li>本网络游戏适合年满"+ age +"周岁(含)以上的用户使用；为了您的健康，请合理控制游戏时间。<\/li><li>抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。<\/li><li><a target=\"_blank\" href=\"\/\/ieg.tencent.com\/\">腾讯互动娱乐<\/a> <span class=\"foot-sprt\">|<\/span> <a target=\"_blank\" href=\"\/\/game.qq.com\/contract.shtml\">服务条款<\/a> <span class=\"foot-sprt\">|<\/span> <a target=\"_blank\" href=\"\/\/adver.qq.com\/\">广告服务<\/a> <span class=\"foot-sprt\">|<\/span> <a target=\"_blank\" href=\"\/\/game.qq.com\/hr\/\">腾讯游戏招聘<\/a> <span class=\"foot-sprt\">|<\/span> <a target=\"_blank\" href=\"\/\/service.qq.com\/\">腾讯游戏客服<\/a> <span class=\"foot-sprt\">|<\/span> <a target=\"_blank\" href=\"\/\/tgact.qq.com\/\">游戏活动<\/a> <span class=\"foot-sprt\">|<\/span> <a target=\"_blank\" href=\"\/\/game.qq.com\/gnav\/\">游戏地图<\/a> <span class=\"foot-sprt\">|<\/span> <a target=\"_blank\" href=\"\/\/game.qq.com\/portal2010\/business.htm\">商务合作<\/a> <span class=\"foot-sprt\">|<\/span> <a target=\"_blank\" href=\"\/\/www.qq.com\/\">腾讯网<\/a> <span class=\"foot-sprt\">|<\/span> <a target=\"_blank\" href=\"\/\/www.qq.com\/map\/\">网站导航<\/a><\/li><li class=\"f-right\"><a target=\"_blank\" href=\"\/\/www.tencent.com\/law\/mo_law.shtml?\/law\/copyright.htm\">腾讯公司版权所有<\/a><\/li><li>COPYRIGHT &copy; 1998 - 2017 TENCENT. ALL RIGHTS RESERVED.<\/li><li>"+gameIcpHtml+"<a target=\"_blank\" href=\"\/\/www.qq.com\/culture.shtml\">粤网文【2017】6138-1456号<\/a><span class=\"foot-sprt\"> | <\/span><a target=\"_blank\" href=\"\/\/game.qq.com/culture2.htm\">新出网证（粤）字010号<\/a><\/li><\/ul><\/div><\/div><\/div>");
})();

function gdelayScript(url){var obj=document.createElement("script"),lnk="src",tp="text/javascript";obj.setAttribute(lnk,url);obj.setAttribute("type",tp);document.body.appendChild(obj);return obj;};
function gaddLoad(func){var old=window.onload;if(typeof window.onload!="function"){window.onload=func;}else{window.onload=function(){old();func();}}};
gaddLoad(function(){gdelayScript("//ossweb-img.qq.com/images/js/dr/dr.js")})/*  |xGv00|87bb80a6e9328f30cef2d522bcbf27c7 */