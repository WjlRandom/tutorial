const isMobile = browserRedirect();

class Index {
    constructor(config) {
        this.ele = config.ele;
        this.init(config.ele);
        this.touchConfig = {
                startX: 0,
                startY: 0,
                posLeft: this.ele.offset().left,
                posTop: this.ele.offset().top
            }
            // console.log(this.touchConfig);
    }
    init(ele) {
        var ctx = this;
        ele.on("touchstart", function(e) {
            ctx.dragStart(e);
        })
        ele.on("touchmove", function(e) {
            ctx.dragMove(e);
        })
        ele.on("touchend", function(e) {
            ctx.dragEnd(e);
        })
    }
    dragStart(e) {
        console.log(e);
        // console.log(e.originalEvent.touches[0]);
        var touch = e.originalEvent.touches[0];
        this.touchConfig.startX = touch.clientX;
        this.touchConfig.startY = touch.clientY;
        this.touchConfig.posLeft = this.ele.offset().left;
        this.touchConfig.posTop = this.ele.offset().top;
    }
    dragMove(e) {
        var ctx = this;
        var touch = e.originalEvent.touches[0];
        var moveX = touch.clientX - this.touchConfig.startX;
        var moveY = touch.clientY - this.touchConfig.startY;
        ctx.ele.css("left", moveX + ctx.touchConfig.posLeft);
        ctx.ele.css("top", moveY + ctx.touchConfig.posTop);
    }
    dragEnd(e) {
        this.touchConfig.posLeft = this.ele.offset().left;
        this.touchConfig.posTop = this.ele.offset().top;
        // console.log(this.touchConfig);
    }
}
new Index({
    ele: $(".drag-img")
});

function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return "phone";
    } else {
        return "pc";
    }
}