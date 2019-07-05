import $ from "../../lib/jquery.js"
class Index {
    constructor(...args) {
        this.events()
    }
    events() {
        $(".submitBtn").click(() => {
            this.submit();
        })
    }
    submit() {
        let userName = $("#name").val();
        let userUrl = $("#url").val();
        $.ajax({
            url: "http://localhost:3000/testApi",
            data: {
                name: "www",
            },
            type: "post",
            success: (res) => {
                console.log(res)
            },
            error: () => {

            }
        });
    }

}
new Index();