//rem计算公式 1rem = 页面宽度/设计稿宽度*100
!(function(e) {
  var n = document.documentElement,
    i = document.createElement("style");
  n.firstElementChild.appendChild(i);
  t();

  function t() {
    var t = n.clientWidth,
      r = "}";
    if (t > 1024) {
      r =
        ";max-width:640px;margin-right:auto!important;margin-left:auto!important;}";
      e.rem = "100";
    } else {
      e.rem = ((100 * t) / 750).toFixed(0); //750为设计稿的宽度
    }
    i.innerHTML =
      "html{font-size:" + e.rem + "px!important;}body{font-size: 14px" + r;
  }
  e.addEventListener(
    "resize",
    function() {
      t();
    },
    !1
  );
  e.addEventListener(
    "pageshow",
    function(e) {
      t();
    },
    !1
  );
})(window);
