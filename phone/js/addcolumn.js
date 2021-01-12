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
        viewlists()
    })
    function viewlists(){
        var updateData = [{
            title : "社会",
            icon : "addcolumn/css/myImg/shehui.png"
        }, {
            title : "历史",
            icon : "addcolumn/css/myImg/lishi.png"
        }, {
            title : "军事",
            icon : "addcolumn/css/myImg/junshi.png"
        }, {
            title : "国内",
            icon : "addcolumn/css/myImg/guonei.png"
        }, {
            title : "国际",
            icon : "addcolumn/css/myImg/guoji.png"
        }, {
            title : "探索",
            icon : "addcolumn/css/myImg/tansuo.png"
        }, {
            title : "深度",
            icon : "addcolumn/css/myImg/shendu.png"
        }, {
            title : "讨论",
            icon : "addcolumn/css/myImg/taolun.png"
        }, {
            title : "娱乐",
            icon : "addcolumn/css/myImg/yule.png"
        }, {
            title : "环保",
            icon : "addcolumn/css/myImg/huanbao.png"
        }, {
            title : "时尚",
            icon : "addcolumn/css/myImg/shishang.png"
        }];
        var lv1 = appcan.listview({
            selector : "#listview",
            type : "thinLine",
            hasIcon : true,
            hasAngle:false,
            hasCheckbox : true,
            hasSmallIcon: true,
            align : 'right'
        });
        lv1.set(updateData);
    }
})($);
