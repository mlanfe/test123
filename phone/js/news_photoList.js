(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.closeWin(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
    appcan.button(".uinn-npic2", "btn-act",
    function() {
        appcan.openWinWithUrl("news_photoDetail","news_photoDetail.html");
    });
    var tabview_Tab = appcan.tab({
        selector: $("#Tab"),
        hasIcon: false,
        hasAnim: true,
        hasLabel: true,
        hasBadge: false,
        index: 0,
        data : [{
            label : "热点",
        }, {
            label : "独家",
        }, {
            label : "体坛",
        }, {
            label : "美图",
        }, {
            label : "明星",
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
    })
})($);