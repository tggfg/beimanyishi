import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
<<<<<<< HEAD
import classify from "./classify";
=======
>>>>>>> shangshang
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
<<<<<<< HEAD
	modules:{
        classify,
        home
	}
=======
    modules:{
       home,
    }
>>>>>>> shangshang
})

export default store;