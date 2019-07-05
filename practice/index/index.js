import $ from "../lib/jquery.js"
class Index {
    constructor(config) {
        this.name = "weijinlong";
        this.render();
    }
    render() {
        document.getElementById("inner").innerHTML = "tpl";
        //post请求
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/wdltest',
            data: { name: 'wdl', pass: '123' },
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log(err)
            }
        })

    }
}

new Index();