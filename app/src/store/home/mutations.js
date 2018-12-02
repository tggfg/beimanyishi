export default{
	handleBanner(state,params){
		state.banner=params;
	},
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


	},
	handleId(state,params){

	},
	handleTehui(state,params){
		state.sp=[...state.sp,...params];
	},
	handleTehui1(state,params){
		state.sp1=[...state.sp1,...params];
	},
	handleTehui2(state,params){
		state.sp2=[...state.sp2,...params];
	},
	handleTehui3(state,params){
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
		 state.sousuo = params;
  }
}
