// alert("aaa")
$(".scale").on("click", function() {
    var _this = this;
    $(this).addClass("scaleChange");
    setTimeout(function() {
        $(_this).removeClass("scaleChange");
    }, 2000);
})