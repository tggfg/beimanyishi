import axios from "axios";
const state={
    name:""
}
const mutations={
    handleName(state,params){
        state.name=params;
        // console.log(state.pic)
    },
    handleT(state){
      state.name="";
      // console.log(state.pic)
  },
}

export default{
    namespaced:true,
    mutations,
}
