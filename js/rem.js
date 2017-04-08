/* javascript */
!(function(win, doc){
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        //var winWidth =  window.innerWidth;
        var winWidth = $(window).width();
        //console.log(winWidth);
        if(winWidth<320) width=320;
        // doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ;
        
        // 2016-01-13 订正
        // 640宽度以上进行限制 需要css进行配合
        var size = (winWidth / 640) * 100;
        //var size =  Math.floor(winWidth/640*100);
        //doc.documentElement.style.fontSize = (size < 295? size : 295) + 'px' ;
        $("html").css("font-size",size);
    }
 
    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    
    var timer = null;
 
    win.addEventListener(evt, function () {
        clearTimeout(timer);
 
        timer = setTimeout(setFontSize, 300);
    }, false);
    
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
 
            timer = setTimeout(setFontSize, 300);
        }
    }, false);
 
    // 初始化
    setFontSize();
 
}(window, document));


