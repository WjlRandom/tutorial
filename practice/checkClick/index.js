class Index {
    constructor() {
        this.startClickTime = 0;
        this.endClickTime = 0;
        this.bind();
    }
    bind() {
        // $("#test").on("touchstart", function(e) {
        //     this.startClickTime = e.timeStamp;
        //     console.log(e);
        // })
        // $("#test").on("touchend", function(e) {
        //     this.endClickTime = e.timeStamp;
        //     let clickTime = this.endClickTime - this.startClickTime;
        //     console.log(clickTime);
        //     console.log(e);
        // })

        $(document).on("click", "#test", function(e) {
            console.log(e);
            let leftMin = e.target.offsetLeft;
            let leftMax = e.target.offsetLeft + e.target.offsetWidth;
            let topMin = e.target.offsetTop;
            let topMax = e.target.offsetTop + e.target.offsetHeight;
            let clickX = e.pageX;
            let clickY = e.pageY;
            if (clickX > leftMin && clickX < leftMax && clickY > topMin && clickY < topMax) {
                alert("正确点击");
            } else {
                alert("点击错误");
            }
        })
    }
}
new Index();