var http = require("http");
var https = require("https");
var cheerio = require("cheerio");
var fs = require("fs");
var iconvLite = require("iconv-lite");
var request = require("request");

function test() {
    http.get("http://cloud.myfont.me/font/fontCenter/fontcenter?pageNum=1", function(res) {
        var html = ""
        res.on("data", function(data) {
            html += data
        })
        res.on("end", function() {
            // console.log(html);
            var $ = cheerio.load(html);
            // console.log($(".web_font_list .font").html())
            var arr = []
            $(".web_font_list .font").each(function() {
                arr.push({
                    id: $(this).attr("data-id"),
                    name: $(this).attr("data-name")
                })
            })
            console.log(arr);
            fs.writeFileSync("data.js", JSON.stringify(arr))
        })
    })

    https.get("https://news.sina.com.cn/", function(res) {
        var chunks = [];
        res.on("data", function(chunk) {
            chunks.push(chunk);
        })
        res.on("end", function() {
            console.log(chunks)
            var html = iconvLite.decode(Buffer.concat(chunks), "utf-8")
            var $ = cheerio.load(html, { decodeEntities: false });
            var arr = []
            $(".list_14 a").each(function() {
                arr.push({
                    href: $(this).attr("href"),
                    text: $(this).html()
                })
            })
            console.log(arr);
            fs.writeFileSync("news.js", JSON.stringify(arr))
        })
    })

    https.get("https://news.sina.com.cn/", function(res) {
        var html = "";
        res.on("data", function(data) {
            console.log(data);
            html += data;
        })
        res.on("end", function() {
            var $ = cheerio.load(html, { decodeEntities: false });
            var arr = []
            $(".list_14 a").each(function() {
                arr.push({
                    href: $(this).attr("href"),
                    text: $(this).html()
                })
            })
            fs.writeFileSync("news1.js", JSON.stringify(arr))
        })
    })
}

request({
    url: "https://news.sina.com.cn/",
    encoding: null // 关键代码
}, function(err, res, body) {
    var html = iconvLite.decode(body, 'utf-8')
    var $ = cheerio.load(html, { decodeEntities: false });
    var arr = []
    $(".list_14 a").each(function() {
        arr.push({
            href: $(this).attr("href"),
            text: $(this).html()
        })
    })
    console.log(arr)
});

https.get("https://news.sina.com.cn/", function(res) {
    var html = "";
    res.on("data", function(data) {
        html += data;
    })
    res.on("end", function() {
        var $ = cheerio.load(html, { decodeEntities: false });
        var arr = []
        $(".list_14 a").each(function() {
            arr.push({
                href: $(this).attr("href"),
                text: $(this).html()
            })
        })
        fs.writeFileSync("news1.js", JSON.stringify(arr))
    })
})