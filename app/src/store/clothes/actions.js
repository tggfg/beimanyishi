import axios from "axios";
export default {
  handleImgList({commit}){
  	axios({
      method:"get",
      url:"http://www.bmyss.xyz:8080/bmys/discounts/moduleOneGoodsList?goodsTypeId=1&pageNum=1",
      }).then((data)=>{
      console.log(data.data)
      commit("handleImgList",data.data);s
       // state.sp=[];
    })
  }
}
