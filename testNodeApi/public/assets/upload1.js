function Index() {
    this.init.apply(this, arguments);
}
Index.prototype = {
    init(config) {
        this.events();
    },
    events() {
        $(".submit").click(() => {
            this.submit();
        })
    },
    submit() {
        var file = $(".file")[0].files[0];
        console.log(file);
        var formData = new FormData();
        formData.append("imgFile", file);
        $.ajax({
            url: "/uploadImg1",
            type: "post",
            data: formData,
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: "text/plain;charset=utf-8", // 告诉jQuery不要去设置Content-Type请求头

            success: function(res) {
                console.log(res);
            },
            error: function(err) {
                console.log(err)
            }
        });
    }
}


new Index();