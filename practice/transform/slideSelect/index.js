// import Data from "./data.js"

function Index() {
    this.init.apply(this, arguments);
}

Index.prototype = {
    init: function() {
        this.bind();
        this.startY = 0;
        this.listHeight = $(".select-list")[0].offsetHeight;
        this.originTop = Number($(".select-list").css("top").replace("px", ""));
    },
    renderDom: function() {
        // var wrap = document.getElementById("selectWrap");
        // var html = "";
        // Data.forEach(function(item, index) {

        // })
    },
    bind: function() {
        var ctx = this;
        $(".select-inner").on("touchstart", function(e) {
            ctx.touchStart(e);
        });
        $(".select-inner").on("touchmove", function(e) {
            ctx.touchMove(e);
        });
        $(".select-inner").on("touchend", function(e) {
            ctx.touchEnd(e);
        });

    },
    touchStart: function(e) {
        var touch = e.originalEvent.targetTouches[0];
        var y = touch.pageY;
        this.startY = y;
    },
    touchMove: function(e) {
        var touch = e.originalEvent.targetTouches[0];
        var y = touch.pageY;
        this.move = y - this.startY;
        var top = parseInt(this.move + this.originTop);
        // console.log(move);
        // console.log(this.originTop);
        // console.log(top)
        if (this.move < 0 && Math.abs(top) >= this.listHeight - 50) { //向上滑动
            top = -this.listHeight + 50
        } else if (this.move > 0 && top >= 0) { //向下滑动
            top = 0;
        }
        setTimeout(function() {
            $(".select-list").css("top", top);
        }, 10);

    },
    touchEnd: function(e) {
        var top = Number($(".select-list").css("top").replace("px", ""));
        if (this.move < 0) {
            if (Math.abs(top) != this.listHeight - 50) {
                top = -(Math.abs(top) - Math.abs(top) % 50) - 50;
            }
        } else {
            if (Math.abs(top) != 0) {
                top = -(Math.abs(top) - Math.abs(top) % 50);
            }
        }
        this.originTop = top;
        $(".select-list").css("top", top);
    }
}
new Index();