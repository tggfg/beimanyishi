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
<<<<<<< HEAD
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
=======
	if(params<5){
		console.log(params)
			axios({
							method:"get",
					url:"http://localhost:3000/yifu?_page="+params+"&_limit=2",
							// url:"http://localhost:8080/static/json/list.json?_page="+params+&_limit="4",
							}).then((data)=>{
							// console.log(data.data)
							commit("handleCloth",data.data)
							})
			}
   },
   handleTehui({commit,state},params){
    console.log(params);
	  if(params[0]<3){
   	axios({
   		method:"get",
   		url:"http://www.bmyss.xyz:8080/bmys/discounts/moduleOneGoodsList?pageNum="+params[0]+"&goodsTypeId="+params[1],
   		}).then((data)=>{
   		console.log(data);
   		commit("handleTehui",data.data.data.data);
        // state.sp=[];
   		})
		 }
  },
     handleTehui1({commit,state},params){
      console.log(params);
			if(params[0]<3){
      axios({
     	method:"get",
     	url:"http://www.bmyss.xyz:8080/bmys/discounts/moduleTwoGoodsList?pageNum="+params[0]+"&"+"goodsTypeId="+params[1],
     	}).then((data)=>{
			console.log(data.data.data.data)
     	commit("handleTehui1",data.data.data.data)
     })  	
		 }
    },
	handleTehui2({commit,state},params){
	console.log(params);
	if(params[0]<3){
	axios({
		method:"get",
		url:"http://www.bmyss.xyz:8080/bmys/discounts/moduleThreeGoodsList?pageNum="+params[0]+"&"+"goodsTypeId="+params[1],
		}).then((data)=>{
		console.log(data.data.data);
		commit("handleTehui2",data.data.data.data);
	})  	
	}
	},
	handleTehui3({commit,state},params){
	console.log(params);
	if(params[0]<3){
	axios({
		method:"get",
		url:"http://www.bmyss.xyz:8080/bmys/discounts/moduleFourGoodsList?pageNum="+params[0]+"&"+"goodsTypeId="+params[1],
		}).then((data)=>{
		console.log(data.data.data.data);
		commit("handleTehui3",data.data.data.data)
	})  	
	}
	},
   handleSmall({commit}){
   axios({
   	method:"get",
   	url:"http://www.bmyss.xyz:8080/bmys/goods/getAllGoodsType",
   	// url:"http://localhost:8080/static/json/list.json?_page="+params+&_limit="4",
   	}).then((data)=>{
   	// console.log(data.data.data)
   	commit("handleSmall",data.data.data);
>>>>>>> shangshang
   	})
   },
   handleId({commit},index){
	   commit("handleId",index);
   },
   handleTwopicture({commit},params){
<<<<<<< HEAD
	  axios({
	  	method:"get",
	  	url:"http://localhost:3000/sptu?_page="+params+"&_limit=4",
	  	}).then((data)=>{
		console.log(data);
	  	commit("handleTwopicture",data.data)
	  })  
   }
=======
	if(params.pageNum<6){
	  axios({
	  	method:"get",
	  	url:"http://www.bmyss.xyz:8080/bmys/goods/findGoodsByTypeId?pageNum="+params.pageNum+"&_limit=4"+"&typeId_1="+params.id,
	  	}).then((data)=>{
		  console.log(data.data.data);
	  	commit("handleTwopicture",data.data.data.data)
	  })  
		}
   },
	 handleRoute({commit,state},params){
		 // console.log(params.id)
		 state.sptu=[];
		 axios({
		 	method:"get",
		 	url:"http://www.bmyss.xyz:8080/bmys/goods/findGoodsByTypeId?pageNum="+params.pageNum+"&_limit=4"+"&typeId_1="+params.id,
		 	}).then((data)=>{

		 	commit("handleTwopicture",data.data.data)
		 })  
	 },
	 handleMenu({commit},params){
		 axios({
		 	methods:"get",
		 	url:"http://localhost:3000/list"
		 }).then((data)=>{
			commit("handleMenu",data.data)
		 	
		 })
	 },
	 handleFind({commit},params){
		 console.log(params);
		 axios({
		 	method:"get",
		 	url:"http://www.bmyss.xyz:8080/bmys/goods/searchGoods?input="+params.val+"&pageNum="+params.pageNum,
		 	}).then((data)=>{
		   console.log(data);
		   commit("handleFind",data.data.data.data); 
		 })
	 }
>>>>>>> shangshang
}