//import $ from 'zepto';
import "./index.less";
import API from "@api";
import Query from "@public/lib/query";
import ConfirmService from "@components/confirmService/index"
class Index {
    constructor(...args) {
        this.data = {
            personId: Query.query('personId'),
            personActivityId: Query.query('personActivityId'),
            serviceChargeId: Query.query('serviceChargeId'),
            // equipmentId: Query.query('equipmentId'),
        }
        this.getCustomerInfo(); //获取顾客信息
    }
    render(data) {
        new ConfirmService({
            el: $(".container"),
            data: data
        });
    }
    getCustomerInfo() {
        debugger;
        var json = {
            personId: this.data.personId,
        };
        var url = API.getPersonActivityInfo;
        if(this.data.personActivityId != null){
            json["personActivityId"] = this.data.personActivityId;
        }else{
            url = API.getServicePayInfo;
            json["serviceChargeId"] = this.data.serviceChargeId;

        }
        API.request(url, json, (res) => {
            if (res.code == 200) {
                this.render(res.data);
            }
        }, (err) => {
            console.log(err);
        })
    }
}
new Index();