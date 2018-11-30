import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
       home,
    }
})

export default store;