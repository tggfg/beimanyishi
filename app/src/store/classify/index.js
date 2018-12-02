import axios from "axios";
const state={
    pic:[]
}
const mutations={
    handlePic(state,params){
        state.pic=[...state.pic,...params];
        // console.log(state.pic)
    }
}
const actions={
    handlePic({commit},params){
        // console.log(params.pageNum)
        var pic=[];
        if(params.id1&&params.id2&&params.id3){
        axios({
			methods:"get",
			url:"/bmys/goods/findGoodsByTypeId?typeId_1="+params.id1+"&typeId_1="+params.id2+"&typeId_3="+params.id3+"&pageNum="+params.pageNum,
        }).then((data)=>{
            pic=data.data.data.data;
            commit("handlePic",pic);
            // console.log(pic)
            })
        }else if(params.id1){
            axios({
                methods:"get",
                url:"/bmys/goods/findGoodsByTypeId?typeId_1="+params.id1+"&pageNum=1",
            }).then((data)=>{
                pic=data.data.data.data;
                commit("handlePic",pic);
                })
                
        }
            
    },
    handleRoute({commit,state},params){
        state.pic=[];
        var pic=[];
        if(params.id1&&params.id2&&params.id3){
        axios({
			methods:"get",
			url:"/bmys/goods/findGoodsByTypeId?typeId_1="+params.id1+"&typeId_1="+params.id2+"&typeId_3="+params.id3+"&pageNum="+params.pageNum,
        }).then((data)=>{
            pic=data.data.data.data;
            commit("handlePic",pic);
            // console.log(pic)
            })
        }else if(params.id1){
            axios({
                methods:"get",
                url:"/bmys/goods/findGoodsByTypeId?typeId_1="+params.id1+"&pageNum=1",
            }).then((data)=>{
                pic=data.data.data.data;
                commit("handlePic",pic);
                })
                
        }
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions,
}