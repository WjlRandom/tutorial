var express = require('express');
var router = express.Router();
const routerConfig = [{
        path: `/`,
        title: '首页',
        url: './home.html'
    },
    {
        path: `/home.html`,
        title: '首页',
        url: './home.html',
        title: "wwwwww"
    },
    {
        path: `/freeCard.html`,
        title: '体验卡',
        url: './freeCard.html'
    },
    {
        path: `/member.html`,
        title: '会员',
        url: './member.html'
    },
    {
        path: `/portrait.html`,
        title: '个人头像',
        url: './portrait.html'
    }

]
routerConfig.forEach(page => {
    if (page.path) {
        router.get(page.path, function(req, res, next) {
            res.render(page.url, {
                title: page.title ? page.title : "",
            });
        });
    } else {
        router.get("/error.html", function(req, res, next) {
            res.render("./error.html", {
                title: page.title ? page.title : "",
            });
        });
    }

});
module.exports = router;