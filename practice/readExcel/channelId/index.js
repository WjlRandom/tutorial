var fs = require('fs');

function getChannelIdData(arr) {
    let channel = {};
    arr.forEach(config => {
        for (let i = config.start; i < config.end + 1; i++) {
            channel[config.name + i] = config.id ? config.id : "1"
        }
    });
    fs.writeFileSync("index.json", JSON.stringify(channel), "utf8");
    console.log("完成");
}
getChannelIdData([{
        name: "gdtyy",
        start: 30,
        end: 50,
        id: "1108995730"
    },
    // {
    //     name: "dyyr",
    //     start: 239,
    //     end: 250,
    //     id: "1602311690404878"
    // }


]);