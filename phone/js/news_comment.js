(function($) {
    var mask_Mask = $("#Mask");
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.closeWin(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
    appcan.button("#Box_footer", "btn-act",
    function() {
        mask_Mask.show();
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
    mask_Mask.on("touchstart",
    function(e) {
        e.preventDefault();
    });
    mask_Mask.on("touchmove",
    function(e) {
        e.stopPropagation();
    });
    mask_Mask.on("tap",
    function(e) {
        if(e.target.id == 'Mask'){
            $(e.target).removeClass("show");
            setTimeout(function() {
                $(e.target).removeClass("active");
                $("#Box_footer_maskout").addClass('uhide');
            },
            300)
        }
    });
    mask_Mask.show = function() {
        var self = this;
        self.addClass("active");
        setTimeout(function() {
            self.addClass("show");
            $("#Box_footer_maskout").removeClass('uhide');
        },
        1);
    }
    
})($);