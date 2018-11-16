import axios from "axios"
export default{
  handlehome({commit}){
    axios({
      method:'get',
      url:'',
      data:{
            id:1,
       }
        })
      .then((data)=>{
        commit('handlehome',data.data)
    })
  }
}
