function Index() {
    this.init.apply(this, arguments);
}
Index.prototype = {
    init(config) {
        this.events();
    },
    events() {
        $(".file").change((e) => {
            let file = e.target.files[0];
            console.log(file);
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                $(".imgData").html(reader.result);
            }
        })
        $(".submit").click(() => {
            this.submit();
        })
    },
    submit() {
        $.ajax({
            url: "/uploadImg",
            type: "post",
            data: {
                file: $(".imgData").html()
            },
            success: function(res) {
                console.log(res);
                if (res.code == 0) {
                    var index = res.imgUrl.indexOf("/images/")
                    $(".preImg").attr("src", res.imgUrl.substring(index));
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    }
}


new Index();