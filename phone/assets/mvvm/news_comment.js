var Service = new MVVM.Service({
    pretreatment: function(data, option) {
        return data;
    },
    dosuccess: function(data, option) {
        return data;
    },
    doerror: function(e, err, option) {
        return err;
    },
    validate: function(data, option) {
        return 0;
    },
    ajaxCall: function(data, option) {
        var self = this;
        var data = [{
            "avator":"\'news_comment/css/myImg/comImg.png\'",
            "username":"xxxxxxxx",
            "time":"1小时前",
            "city":"青岛市",
            "content":"kjskdjk",
            "followReply":[{
                "replyName":"shoujia",
                "replyContent":"good point"
            },{
                "replyName":"oooo",
                "replyContent":"werwrrwrwr"
            }],
            "praise":"10"
        }, {
            "avator":"\'news_comment/css/myImg/comImg.png\'",
            "username":"jjjjjj",
            "time":"30分钟前",
            "city":"南阳市",
            "content":"sdasdfsfasewsdgg",
            "followReply":[{
                "replyName":"45454545",
                "replyContent":"ssddddffdsfds"
            },{
                "replyName":"88888",
                "replyContent":"asdafasfdsabf"
            }],
            "praise":"5"
        }];
        option.success(self.dosuccess(data, option));
        /*appcan.request.ajax({
                url: "",
                type: "GET",
                data: this.pretreatment(data, option),
                dataType: "",
                contentType: "application/x-www-form-urlencoded",
                success: function(data) {
                    var res = self.validate(data, option);
                    if (!res) option.success(self.dosuccess(data, option));
                    else option.error(self.doerror(data, res, option));
                },
                error: function(e, err) {
                    option.error(self.doerror(e, err, option));
                }
            });*/
    }
});
var Model_Collection = MVVM.Model.extend({
    defaults: {},
    computeds: {},
    sync: function(method, model, options) {
        switch (method) {
        case "create":

            break;
        case "update":

            break;
        case "patch":

            break;
        case "delete":

            break;
        default:
            break;
        }
    }
})
var Collection = new(MVVM.Collection.extend({
    initialize: function() {
        return;
    },
    parse: function(data) {
        return data;
    },
    model: Model_Collection,
    sync: function(method, collection, options) {
        switch (method) {
        case "read":
            Service.request({}, options);
            break;
        default:
            break;
        }
    }
}))();
var ViewModel = new(MVVM.ViewModel.extend({
    el: "#comment",

    initialize: function() {
        this.collection.fetch({})
        return;
    },
    collection: Collection

}))();