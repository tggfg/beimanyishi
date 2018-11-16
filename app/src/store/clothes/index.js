import axios from 'axios'

const state = {
  goods: []
}

const actions = {
  handlehome({commit}) {
    axios({
      method: "get",
      url: "http://localhost:3000/goods"
    }).then((data) => {
      commit("handlehome", data.data)
      console.log(data)
    })
  },
}

const mutations = {
  handlehome(state, params) {
    state.goods = params
  }
}

export default {
  namespaced:true,
  state,
  actions,
  mutations
}
