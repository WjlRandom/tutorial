import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ //store对象
    state: {
        userInfo: {},
        user: "weijinlong"
    },
    mutations: {
        storeUpdateWxUser(data) {
            this.userInfo = data;
        }
    }
})