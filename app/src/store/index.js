import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import classify from "./classify";
import home from "./home";
Vue.use(Vuex);
const state = {
 
}

const getters = {

}
const mutations = {

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
        home
	}
})

export default store;