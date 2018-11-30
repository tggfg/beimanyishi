export default{
	handleBanner(state,params){
		state.banner=params;
		// console.log(state.banner)
	},
<<<<<<< HEAD
	handleCloth(state,params){
		state.goodslist=[...state.goodslist,...params];
=======
	handleGoodsFlagToggle(state){
		state.goodslist = [];
	
	},
	handleGoodsFlagToggle1(state){
		state.sp = [];
	},
	handleGoodsFlagToggle2(state){
		state.sp1 = [];
	},
	handleGoodsFlagToggle3(state){
		state.sp2 = [];
	},
	handleGoodsFlagToggle4(state){
		state.sp3 = [];
	},
	handleRemove(state){
		state.sptu=[];
	},
	handleCloth(state,params){
			
			state.goodslist=[...state.goodslist,...params];
		
		
>>>>>>> shangshang
	},
	handleId(state,params){
	
	},
	handleTehui(state,params){
		// console.log(state.sp);
		state.sp=[...state.sp,...params];
		// console.log(state.sp);
	},
	handleTehui1(state,params){
		// console.log(state.sp);
		state.sp1=[...state.sp1,...params];
		// console.log(state.sp);
	},
	handleTehui2(state,params){
		// console.log(state.sp);
		state.sp2=[...state.sp2,...params];
		// console.log(state.sp);
	},
	handleTehui3(state,params){
<<<<<<< HEAD
		 console.log(state.sp);
=======
		 // console.log(state.sp);
>>>>>>> shangshang
		state.sp3=[...state.sp3,...params];
	
	},
	handleSmall(state,params){
		state.xiaotu=[...params];
	},
	handleTwopicture(state,params){
<<<<<<< HEAD
		state.sptu=[...state.sptu,...params];
		
	},
=======

		state.sptu=[...state.sptu,...params];
		
	},
// 	handleRoute(state){
// 		state.sptu=[...state.sptu,...params];
// 		
// 	},
>>>>>>> shangshang
   handleBottom(state,params){
	   state.showBottom =params;
   },
   clearArray(state){
	   state.sp=[]
   },
<<<<<<< HEAD
//    clearPagenum(state){
// 	   state.pageNum=1;
//    }
=======
	 clearArray1(state){
	 	state.sp1=[]
	 },
	 clearArray2(state){
	 state.sp2=[]
	 },
	 clearArray3(state){
	 state.sp3=[]
	 },
	 handleMenu(state,params){
		 state.data=params;
	},
	 handleFind(state,params){
		 console.log(params);
		 state.sousuo = params;
  }
>>>>>>> shangshang
}