<template>
	<div class="classify">
		<div class="search">
			<div class="sear">
				输入关键字
			</div>
		</div>
		<ul class="nav">
			<li v-for="(item,index) in navs" :class="curIndex==index?'active':''" 
			@click="handleId(item.id)">
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
	created(){
		// axios({
		// 	method: "get",
		// 	url: "http://www.bmyss.xyz:8080/bmys/goods/getAllGoodsType",
		// }).then((data) => {
		// 	console.log(data.data);
		// })
		axios({
			methods:"get",
			url:"http://localhost:3000/list"
		}).then((data)=>{
			data.data.map((item)=>{
				if(item.level==1){
					this.navs.push(item);
				}
			})
		})
		this.$router.push({name:"nav",query:{val:1}})
	},
	data(){
		return{
			navs:[],
			curIndex:0,
		}
	},
	methods:{
		handleId(index){
			this.curIndex=index-1;
			this.$router.push({name:"nav",query:{val:index}});
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
	height: .56rem;	
	margin-top:.4rem;
}
.classify>.search>.sear{
	margin: 0 30px;
	height: 100%;
	border-radius: 6px;
	line-height: .56rem;
	font-size: 12px;
	color: #999;
	background: #f4f4f4 url(../../../static/icon/sousuo@2x.png) no-repeat .15rem center;
	background-size:.4rem .4rem;
	padding-left: .7rem;
}
.classify>.nav{
	width: 100%;
	height: .74rem;
	/* background: yellowgreen; */
	display: flex;
	justify-content: space-around;
	line-height: .74rem;
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