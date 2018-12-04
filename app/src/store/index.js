import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import classify from "./classify";
import home from "./home";
import clothesin from './clothes'
import goodsDetails from './goodsDetails';
import cart from './cart';

Vue.use(Vuex);
const state = {
    // flag: true
}

const getters = {

}
const mutations = {
    // handleFlag(state, params) {
    //     state.flag = params;
    // }
}

const actions = {


}
const store =  new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
	modules:{
        classify,
        home,
        clothesin,
        goodsDetails,
        cart
	}
})

export default store;
