import axios from "axios";
const state={
    pic:[]
}
const mutations={
    handlePic(state,params){
        state.pic=[]
        state.pic=params;
    }
}
const actions={
    handlePic({commit},params){
        // console.log(params.id1)
        var pic=[];
        if(params.id1&&params.id2&&params.id3){
        axios({
			methods:"get",
			url:"http://localhost:3000/goodlist?typeId_1="+params.id1+"&typeId_1="+params.id2+"&typeId_3="+params.id3,
        }).then((data)=>{
            pic=data.data;
            commit("handlePic",pic);
            })
        }else if(params.id1){
            axios({
                methods:"get",
                url:"http://localhost:3000/goodlist?typeId_1="+params.id1,
            }).then((data)=>{
                pic=data.data;
                commit("handlePic",pic);
                })
                // console.log(pic)
        }
            
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions,
}