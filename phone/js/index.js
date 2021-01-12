(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {});
    appcan.button("#nav-right", "btn-act",
    function() {
        appcan.openWinWithUrl('news_set','news_set.html');
    });
    appcan.button(".nav-btn", "btn-act", function() {
        appcan.openWinWithUrl('news_set','news_set.html');
    })
    var tabview_Tab_header = appcan.tab({
        selector: $("#Tab_header"),
        hasIcon: false,
        hasAnim: false,
        hasLabel: true,
        hasBadge: false,
        index: 0,
        data : [{
            label : "头条",
        }, {
            label : "娱乐",
        }, {
            label : "科技",
        }, {
            label : "军事",
        }, {
            label : "互联网",
        }]
    });

    appcan.ready(function() {
        $.scrollbox($("body")).on("releaseToReload",
        function() { //After Release or call reload function,we reset the bounce
            $("#ScrollContent").trigger("reload", this);
        }).on("onReloading",
        function(a) { //if onreloading status, drag will trigger this event
        }).on("dragToReload",
        function() { //drag over 30% of bounce height,will trigger this event
        }).on("draging",
        function(status) { //on draging, this event will be triggered.
        }).on("release",
        function() { //on draging, this event will be triggered.
        }).on("scrollbottom",
        function() { //on scroll bottom,this event will be triggered.you should get data from server
            $("#ScrollContent").trigger("more", this);
        }).hide();
        //用于谷歌调试
        //uexWidget.setLogServerIp("",1);
    })

    var tabview_Tab_footer = appcan.tab({
        selector: $("#Tab_footer"),
        hasIcon: true,
        hasAnim: false,
        hasLabel: true,
        hasBadge: false,
        index: 0,
        data : [{
            label : "新闻",
            icon : "fa-home"
        }, {
            label : "订阅",
            icon : "fa-file-text-o"
        }, {
            label : "图片",
            icon : "fa-file-image-o"
        }, {
            label : "视频",
            icon : "fa-play-circle-o"
        }]
    });
    tabview_Tab_footer.on('click',function(obj,index){
        if(index == 2){
            appcan.openWinWithUrl('news_photoList','news_photoList.html');
        }
    })
       var slider = appcan.slider({
            selector : $("#slider"),
            aspectRatio : 9 / 16,
            hasLabel : true,
            hasIndicator: false,
            hasCircle: true,
           site:'Right', 
            index : 1
        });
        slider.set([{
            img : "index/css/myImg/news1.jpg",
            label : "哭泣的丽都"
        }, {
            img : "index/css/myImg/news2.jpg",
            label : "客机失联谜团或许永远无法解开"
        }, {
            img : "index/css/myImg/news3.png",
            label : "姚明3岁女儿1米3，遗传公式推测未来身高超1米9"
        }]);
        slider.on("clickItem", function(index, data) {
            appcan.openWinWithUrl('news_articlecommon', 'news_articlecommon.html');
        })
        var updateData = [{
            title : "国务院严格控制新国务院严格控制新设行政许可国务院严格控制新设行政许可国务院严格控制新设行政许可国务院严格控制新设行政许可设行政许可",
            describe : "国务院总理李克强21日国务院严格控制新设行政许可国务院严格控制新设行政许可国务院严格控制新设行政许可国务院严格控制新设行政许可主持召开国务院常务会议，决定出台严格控制新设行政许可的",
            note : "2021-01-04",
            icon : "index/css/myImg/newsImg1.png"
        }, {
            title : "国务院严格控制新设行政许可",
            describe : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的",
            note : "2021-01-04",
            icon : "index/css/myImg/newsImg2.png"
        }, {
            title : "国务院严格控制新设行政许可",
            describe : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的",
            note : "2021-01-04",
            icon : "index/css/myImg/newsImg3.png"
        }, {
            title : "国务院严格控制新设行政许可",
            describe : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的",
            note : "2021-01-04",
            icon : "index/css/myImg/newsImg1.png"
        }, {
            title : "国务院严格控制新设行政许可",
            describe : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的",
            note : "2021-01-04",
            icon : "index/css/myImg/newsImg2.png"
        }, {
            title : "国务院严格控制新设行政许可",
            describe : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的",
            note : "2021-01-04",
            icon : "index/css/myImg/newsImg3.png"
        }, {
            title : "国务院严格控制新设行政许可",
            describe : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的",
            note : "2021-01-04",
            icon : "index/css/myImg/newsImg1.png"
        }, {
            title : "国务院严格控制新设行政许可",
            describe : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的",
            note : "2021-01-04",
            icon : "index/css/myImg/newsImg2.png"
        }, {
            title : "国务院严格控制新设行政许可",
            describe : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的",
            note : "2021-01-04",
            icon : "index/css/myImg/newsImg3.png"
        }];
        var lv1 = appcan.listview({
            selector : "#listview",
            type : "thickLine",
            hasIcon : true,
            hasAngle : false
        });
        lv1.set(updateData);

        lv1.on('click', function(ele, context, obj, subobj) {
            appcan.openWinWithUrl('news_articlecommon', 'news_articlecommon.html');
        })
         $("#importantNews").on('click',function(){
            console.log('发生了点击事件')
            // appcan.openWinWithUrl('news_articlecommon', 'news_articlecommon.html');
            appcan.openWinWithUrl('important_news', 'important_news.html');           
            console.log('====================')
         })
})($);