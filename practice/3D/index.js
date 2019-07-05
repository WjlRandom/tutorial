class Index {
    constructor() {
        this.rotateFn();
        $(".btn").on("click", () => {
            $(".item").eq(0).css("transform", "rotateY(60deg)")
        })

    }
    rotateFn() {
        let _this = this;
        $(".item").each(function() {
            let matrix = $(this).css("transform");
            console.log(matrix);
            let tr = $(this).css("transform");
            console.log(_this.getRotate(tr));
        })
    }
    getRotate(matrix) {
        var aa = Math.round(180 * Math.asin(matrix[0]) / Math.PI);
        var bb = Math.round(180 * Math.acos(matrix[1]) / Math.PI);
        var cc = Math.round(180 * Math.asin(matrix[2]) / Math.PI);
        var dd = Math.round(180 * Math.acos(matrix[3]) / Math.PI);
        var deg = 0;
        if (aa == bb || -aa == bb) {
            deg = dd;
        } else if (-aa + bb == 180) {
            deg = 180 + cc;
        } else if (aa + bb == 180) {
            deg = 360 - cc || 360 - dd;
        }
        return deg >= 360 ? 0 : deg;

    }
}
new Index();