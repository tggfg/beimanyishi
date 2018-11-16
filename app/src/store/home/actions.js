import axios from "axios";
export default {
   handleBanner({commit}){
   	axios({
   		methods:"get",
   		// https://m.maizuo.com/v4/api/billboard/home?__t=1541905558870
   		 url:"http://localhost:3000/list1",

   	}).then((data)=>{
   	    // console.log(data);
   		commit("handleBanner",data.data);
   	})
    
   },
   handleCloth({commit},params){
	axios({
	      	method:"get",
			url:"http://localhost:3000/yifu?_page="+params+"&_limit=2",
	      	// url:"http://localhost:8080/static/json/list.json?_page="+params+&_limit="4",
	      	}).then((data)=>{
	      	console.log(data.data)
	      	commit("handleCloth",data.data)
	      	})
   },
   handleTehui({commit,state},params){

    console.log(params);
   	axios({
   		method:"get",
   		url:"http://localhost:3000/sp?_page="+params[0]+"&_limit=4&"+"goodsTypeId="+params[1],
   		}).then((data)=>{
   		console.log(data.data)
   		commit("handleTehui",data.data);
        // state.sp=[];
   		})
  },
     handleTehui1({commit,state},params){
     // console.log(params);
      axios({
     	method:"get",
     	url:"http://localhost:3000/sp1?_page="+params[0]+"&_limit=4"+"id="+params[1],
     	}).then((data)=>{
     	commit("handleTehui1",data.data)
     })  	
    },
	handleTehui2({commit,state},params){
	console.log(params);
	axios({
		method:"get",
		url:"http://localhost:3000/sp2?_page="+params[0]+"&_limit=4"+"id="+params[1],
		}).then((data)=>{
		commit("handleTehui2",data.data)
	})  	
	},
	handleTehui3({commit,state},params){
	console.log(params);
	axios({
		method:"get",
		url:"http://localhost:3000/sp3?_page="+params[0]+"&_limit=4"+"id="+params[1],
		}).then((data)=>{
		commit("handleTehui3",data.data)
	})  	
	},
   handleSmall({commit},params){
   axios({
   		method:"get",
   		url:"http://www.bmyss.xyz:8080/bmys/discounts/moduleOneGoodsList?goodsTypeId=1&pageNum=1",
   		}).then((data)=>{
   		// console.log(data.data)
   		// commit("handleTehui",data.data);
   
   	})
   axios({
   	method:"get",
   	url:"http://localhost:3000/smalltu",
   	// url:"http://localhost:8080/static/json/list.json?_page="+params+&_limit="4",
   	}).then((data)=>{
   	console.log(data.data)
   	commit("handleSmall",data.data)
   	})
   },
   handleId({commit},index){
	   commit("handleId",index);
   },
   handleTwopicture({commit},params){
	  axios({
	  	method:"get",
	  	url:"http://localhost:3000/sptu?_page="+params+"&_limit=4",
	  	}).then((data)=>{
		console.log(data);
	  	commit("handleTwopicture",data.data)
	  })  
   }
}