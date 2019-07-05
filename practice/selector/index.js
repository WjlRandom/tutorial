/**
 * 下拉菜单选择器
 * @class Selector
 * @constructor
 * @param {Array} items [{title:'标题',value:'对应值', "type": "1","enable":"true" //可用状态}]
 * @param {function} callback 回调函数
 * @return {value} 返回选择的内容
 */
require('./index.less');
require('@br/lib/zepto.min');
var Events = require('@br/lib/events');
var Tpl = require('./index.ejs');

function Selector() {
    this.init.apply(this, arguments);
}

$.extend(Selector.prototype, Events, {
    init: function (items, callback, errrorfn) {
        this.data = {
            items: items
        };
        if (window.BrBridge && window.BrBridge.env.isApp) {
            this.singleSelector(items, callback, errrorfn);
        } else {
            this.render();
            this.events(callback);
        }

    },

    events: function (callback) {
        var self = this;

        $('.J_selector_mask').on('touchmove', function (event) {
            event.stopPropagation();
            event.preventDefault();
        });

        $('.J_selector_mask').on('click', function () {
            self.oncancel();
        });

        $('.J_selectItem').on('tap', function (event) {
            $(this).addClass('J_selected').siblings().removeClass('J_selected');
            event.stopPropagation();
        });


        $('.J_cancleSelect').on('click', function (event) {
            self.oncancel(callback);
            event.stopPropagation();
        });

        $('.J_confirmSelect').on('click', function (event) {
            self.onconfirm(callback);
            event.stopPropagation();
        });
    },


    render: function () {
        this.el = $(Tpl(this.data));
        $('body').append(this.el);
    },

    singleSelector: function (array, callback, errrorfn) {
        var self = this;
        var _type = 'dataType';
        if (array[0].type) {
            _type = array[0].type;
        }
        window.BrBridge.call('Common', 'singleWheelSelector', {
            type: _type,
            option: array,
            show: false
        }, function (res) {
            self.trigger('action', res);
            typeof callback == "function" && callback.call(callback, res);
        }, function (err) {
            self.trigger('error', res);
            typeof errrorfn == "function" && errrorfn.call(errrorfn, err);
        });
    },

    onconfirm: function (callback) {
        var index = $('.J_selected').index();
        var _type = 'dataType';
        if (this.data.items[index].type) {
            _type = this.data.items[index].type;
        }
        var _data = {
            data: {
                type: _type,
                option: this.data.items[index]
            },
            code: '200'
        };
        this.trigger('action', _data);
        if (typeof callback == 'function') {
            callback.call(callback, _data);
        }
        this.close();
    },

    oncancel: function (callback) {
        if (typeof callback == "function") {
            callback.call(callback, {
                code: '201',
                data: '单选弹出框消失成功'
            });
        }
        this.trigger('action', {
            code: '201',
            data: '单选弹出框消失成功'
        });
        this.close();
    },

    close: function () {
        var self = this;
        this.el.eq(0).animate({
            opacity: 0
        }, 400, 'ease-out', function () {
            self.el.remove();
        });
    }

});

module.exports = Selector;

/* DEMO
 var selector = require('@br/common/selector/index');
 new selector([{
 title: '七个工作日以内',
 value: 1
 }, {
 title: '30天（含）以内',
 value: 2
 }, {
 title: '30-60天（含）以内',
 value: 3
 }, {
 title: '60-90天（含）以内',
 value: 4
 }, {
 title: '90天以上',
 value: 5
 }, {
 title: '90天以上asdasdasdasd12点击大四的',
 value: 5
 }], function(data) {
 console.log('您选择的是：' + data);
 });*/