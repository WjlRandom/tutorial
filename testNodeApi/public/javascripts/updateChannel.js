function Index() {
    this.init.apply(this, arguments);
}
Index.prototype = {
    init: function() {
        var _this = this;
        $(".submit").click(function() {
            _this.submitFn();
        });
    },
    submitFn: function() {
        axios
            .post("/uploadChannel")
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};
new Index();