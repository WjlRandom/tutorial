function Index() {
    this.init.apply(this, arguments)
}
Index.prototype = {
    init: function() {
        var _this = this;
        $(".submit").click(function() {
            _this.submitFn();
        })
    },
    submitFn: function() {
        var data = {
            source: $(".source").val(),
            channel: $(".channel").val(),
            convert: $(".convert").val(),
            start: $(".start").val(),
            end: $(".end").val()
        }
        var list = this.getChannelIdData(data);
        axios.post('/saveGdtId', {
                source: data.source,
                list: list
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    getChannelIdData(config) {
        var arr = [];
        var L = config.end - config.start + 1;
        var start = parseInt(config.start);
        var end = parseInt(config.end);
        for (var i = start; i < end + 1; i++) {
            var obj = {};
            obj.channelName = config.channel + i;
            obj.convertId = config.convert;
            arr.push(obj);
        }
        return arr;
    }

}
new Index()