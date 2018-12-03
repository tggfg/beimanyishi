<template>
	<div class="classify">
		<div class="search" @click="handlesearch()">
			<div class="sear">
				输入关键字
			</div>
		</div>
		<ul class="nav">
			<li v-for="(item,index) in navs" :class="curIndex==index?'active':''"
			@click="handleId(item.id,index)" :key="index">
			{{item.name}}
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
import axios from "axios";
import Vuex from "vuex";
export default{
<<<<<<< HEAD
	created(){

		axios({
			method: "get",
			url: "http://www.bmyss.xyz:8080/bmys/goods/getAllGoodsType",
		}).then((data) => {
			// console.log(data.data.data);
			data.data.data.map((item)=>{
				if(item.level==1){
					this.navs.push(item);
				}
			})
		})
=======
	created(){		
>>>>>>> wangyanru
		// axios({
		// 	methods:"get",
		// 	url:"http://localhost:3000/list"
		// }).then((data)=>{
		// 	data.data.map((item)=>{
		// 		if(item.level==1){
		// 			this.navs.push(item);
		// 		}
		// 	})
<<<<<<< HEAD
    // })
    // console.log(this.$route.query);

  this.curIndex=this.$route.query.index;
      this.id=this.$route.query.val;
      console.log(this.$route.query.val)
      if(this.$route.query){
      this.$router.push({name:"nav",query:{val:this.id,index:this.curIndex}})
}
  this.$router.push({name:"nav",query:{val:1001,index:0}})


      //



	},
	data(){
		return{
      navs:[],
      id:"",
=======
		// })	
		// 
		// 
		if(this.$route.query.val){
			console.log(this.$route.query);
			this.id=this.$route.query.val;
			this.curIndex = this.$route.query.index;
		}	
			this.$router.push({name:"nav",query:{val:this.id,index:this.curIndex}});		
		axios({
			method: "get",
			url: "/bmys/goods/getAllGoodsType",
		}).then((data) => {
			data.data.data.map((item)=>{
				if(item.level==1){
					this.navs.push(item);
				}
			})
		
			
		})
	},
	data(){
		return{
			id:1001,
			navs:[],
>>>>>>> wangyanru
			curIndex:0,
		}
	},
	methods:{
		handleId(id,index){
			this.curIndex=index;
			this.$router.push({name:"nav",query:{val:id,index:index}});
		},
		handlesearch(){
			this.$router.push("/search");
		}
	}
}
</script>
<style>
.classify{
	width:100%;
	height:100%;
}
.classify>.search{
	width:100%;
	height:.56rem;
	margin-top:.4rem;
}
.classify>.search>.sear{
	margin: 0 30px;
	height: 100%;
	border-radius: 6px;
	line-height:.56rem;
	font-size: 12px;
	color: #999;
	background: #f4f4f4 url(../../../static/icon/sousuo@2x.png) no-repeat .15rem center;
	background-size:.4rem .4rem;
	padding-left: .7rem;font-family: PingFangSC-Medium;
}
.classify>.nav{
	width: 100%;
	height: .74rem;
	/* background: yellowgreen; */
	display: flex;
	justify-content: space-around;
	line-height: .74rem;
	border-bottom:1px solid #e5e5e5;
	font-family: PingFangSC-Medium;
}
.classify>.nav>li{
	width: 1.5rem;
	height: 100%;
	text-align: center;
	font-size: 14px;
	color: #5a5a5a;
}
.classify>.nav>.active{
	border-bottom: 1px solid #000;
	color: #1c1c1c;
}
</style>
