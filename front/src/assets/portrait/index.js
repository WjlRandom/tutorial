import "./index.less";
import API from "@api";
import * as qiniu from 'qiniu-js';
import Query from "@public/lib/query";
import Toast from "@public/lib/toast";
class Index {
    constructor() {

        this.init();
        this.clip();
    }
    init() {
        this.defaultImg = Query.query("imgUrl");
        let ctx = this;
        $("#defaultImg").prop("src", this.defaultImg);
        $("#file").change(function(e) { //点击上传头像
            ctx.file = this.files[0];
            ctx.key = new Date().getTime() + "." + ctx.file.type.split('/')[1];
            ctx.putExtra = {
                // fname: ctx.file.name,
                mimeType: ["image/png", "image/jpeg"]
            }
            $(".operate").show();
            $(".default").hide();
        })
        $("#uploadCancel").click(() => {
            $(".operate").hide();
            $(".default").show();
        })
    }
    getToken() { //获取上传图片需要的token
        API.request(API.getQiniuToken, {}, (res) => {
            console.log(res);
            if (res.code == "200" && res.data) {
                this.qiniuUpload(res.data);
            }
        }, (err) => {
            console.log(err);
        })
    }
    qiniuUpload(token) { //七牛上传图片
        let observable = qiniu.upload(this.upoloadBlob, this.key, token, this.putExtra)
        let subscription = observable.subscribe({
            next: (res) => {
                // 主要用来展示进度
                let total = res.total;
                console.log("进度：" + parseInt(total.percent) + "% ")
            },
            error: (err) => {
                // 失败报错信息
                console.log(err)
            },
            complete: (res) => {
                // 接收成功后返回的信息
                console.log(res);
                this.updateProfile(res.key);
            }
        })


    }
    clip() { //裁剪图片
        let ctx = this;
        var clipArea = new PhotoClip("#clipArea", {
            size: [260, 260],
            outputSize: [320, 320],
            file: "#file",
            view: "#view", //预览图片
            ok: "#uploadImg",
            defaultImg: "", //设置初始默认图片
            loadStart: function() {
                console.log("照片读取中");
            },
            loadComplete: function() {
                console.log("照片读取完成");
            },
            clipFinish: function(dataURL) {
                console.log("截取成功");
                ctx.upoloadBlob = ctx.dataURItoBlob(dataURL);
                ctx.getToken();
            }
        });
        //clipArea.destroy();
    }
    updateProfile(imgUrl) { //保存用户头像
        API.request(API.updateProfile, {
            newHeadImageUrl: imgUrl
        }, (res) => {
            console.log(res);
            if (res.code == "200") {
                new Toast("头像保存成功");
            }
        }, (err) => {
            console.log(err);
        })
    }
    dataURItoBlob(dataURI) { //base64转换为blob对象
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // mime类型
        var byteString = atob(dataURI.split(',')[1]); //base64 解码
        var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
        var intArray = new Uint8Array(arrayBuffer); //创建视图

        for (var i = 0; i < byteString.length; i++) {
            intArray[i] = byteString.charCodeAt(i);
        }
        return new Blob([intArray], { type: mimeString });
    }
}
new Index();