(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
         appcan.closeWin(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});

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
        var lv0 = appcan.listview({
            selector : "#listview0",
            type : "thinLine",
            hasAngle : true,
            hasControl : true,
            hasSubTitle : true
        });
        lv0.set([{
            title : "推送设置"
        }, {
            title : "字体设置",
            subTitle : "系统字体"
        }, {
            title : "正文字号",
            subTitle : "中"
        }, {
            title : "正文全屏",
            switchBtn : {
                mini : true,
                value : false
            }
        }]);
        var lv = appcan.listview({
            selector : "#listview1",
            type : "thinLine",
            hasAngle : true,
            hasControl : true,
            hasSubTitle : true
        });
        lv.set([{
            title : "离线设置",
        }, {
            title : "仅WIFI网络下在图片",
            switchBtn : {
                mini : true,
                value : false
            }
        }, {
            title : "重要消息气泡提醒",
            switchBtn : {
                mini : true,
                value : true
            }
        }]);
        
        var lv1 = appcan.listview({
            selector : "#listview2",
            type : "thinLine",
            hasAngle : false,
            hasControl : true,
            hasSubTitle : true
        });
        lv1.set([{
            title : "清理缓存",
            subTitle : "1.2MB"
        }]);
        
        var lv2 = appcan.listview({
            selector : "#listview3",
            type : "thinLine",
            hasAngle : true,
            hasControl : true,
            hasSubTitle : true
        });
        lv2.set([{
            title : "应用推荐"
        }, {
            title : "意见反馈"
        }, {
            title : "关于"
        }]);
    })
})($);