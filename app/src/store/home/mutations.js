export default{
	handleBanner(state,params){
		state.banner=params;
		// console.log(state.banner)
	},
	handleCloth(state,params){
		state.goodslist=[...state.goodslist,...params];
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
		 console.log(state.sp);
		state.sp3=[...state.sp3,...params];
	
	},
	handleSmall(state,params){
		state.xiaotu=[...params];
	},
	handleTwopicture(state,params){
		state.sptu=[...state.sptu,...params];
		
	},
   handleBottom(state,params){
	   state.showBottom =params;
   },
   clearArray(state){
	   state.sp=[]
   },
//    clearPagenum(state){
// 	   state.pageNum=1;
//    }
}