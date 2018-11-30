<template>

	<div class="home">
		<div class="all">
	<!-- 	<div class="header"></div> -->
		<div class="search">
		<p class="search_l">
		<img src="../../../static/icon/logo@2x.png">
		</p>
		<div class="search_c" @click="handleSearch()">
		<span>输入关键字</span>
		</div>
		<p class="search_r">
		<div class="search_r_xin">
		<img src="../../../static/icon/xiaoxi@2x.png">
		<span>消息</span>
		</div>
		</p>
		</div>
	  <div id="nav">
	  <ul class="list">
			<li @click="handleshou()" :class="shouye" >首页</li>
			<li @click="handlxian()" class="youhui">限时优惠</li>
		 <li v-for="(item,index) in navs" :class="activeIndex==index?list:''" @click="handleClick(index,item.id)">
	 <!-- <router-link :to="{name:item.name}">{{item.title}}</router-link> -->
	 {{item.name}}
		 </li>
	  </ul>
	   </div>
		</div>
   <router-view></router-view>
	</div>	
</template>
<script>
import axios from "axios";
import Vuex from "vuex";
export default{
	data(){
		return{
    
      		 navs:[

      	  ],
			shouye:"active",
			list:"",
      		activeIndex:0,
					comName:"suoyou-com"
      	 }
       },

  methods:{
      	 handleClick(index,id){
      		 this.activeIndex=index;
					 this.shouye="";
					 this.list="active";
					
	        this.$router.push({name:"cloth",query:{index:index,id:id}});
				
      	 },
				 handleSearch(){
				  this.$router.push({name:"search"});
				 },
				 handleshou(){
					 this.$router.push({name:"index"});
					 this.shouye="active";
					 this.list="";
				 },
				 handlxian(){
					 this.$router.push({name:"discount"})
				 }
       
		
	},
	created(){
		axios({
		methods:"get",
		url:"http://www.bmyss.xyz:8080/bmys/goods/getAllGoodsType"
		}).then((data)=>{
			data.data.data.map((item)=>{
				if(item.level==1){
					this.navs.push(item);
				}
			})
		
		})
	   this.$router.push({name:"index"});
     // this.handleMenu();
  },

}
</script>
<style>
.home{
	  width:100%;
	  height: 100%;
    padding-bottom: .98rem;
    overflow: auto;
}
.page{
	 position:absolute;
	 top:2.4rem;
}

.home .search{
   width:100%;
   height:0.64rem;
   background:#fff; 
   position:fixed;
    top:0.6rem;
		/* left:0.4rem; */
	margin-left:10px;
	 z-index:200;
}
.search_c{
	float:left;
	width:4.46rem;
	height:0.56rem;
	background: #F4F4F4 url(../../../static/icon/sousuo@2x.png) no-repeat 10px center;
	background-size:0.28rem 0.28rem;
    border-radius: 5px;
	margin-left:0.66rem;
	margin-right:0.66rem;
	border: 1px solid #999999;
}
.search_c span{

	margin-left:30px;
	line-height:0.56rem;
	font-family: .PingFangSC-Regular;
	font-size: 14px;
	color: #5A5A5A;
	
}
.search_l>img{
	width:0.58rem;
	height:0.58rem;
    margin-left:0.16rem;
		float:left;
}
.search_r_xin{
	/* background: #000066; */
	display: flex;
	flex-direction: column;
	justify-content: center; */
	align-items: center;
	margin-right:0.5rem;
}
.search_r_xin img{
	width:0.36rem;
	height:0.36rem;
	
}
.all{
	width: 100%;
	height:2rem;
	position:fixed;
	z-index:200;
	background: #fff;
	top:0;
	padding-top:0.4rem;

}
.shangpin{
	width:100%;
	height:100%;
}
/* nav */
#nav{
	width:100%;
	height:0.72rem;
	 background: #fff; 
	position:fixed;
  top:1.68rem;
	line-height: 0.6rem;
	overflow-x: auto;
	z-index:100;

}
#nav>.list{
	width:120%;
	overflow-x: auto;
	text-align:center;
	display:flex;
	/* text-align: center; */
	/* justify-content: space-around; */
}
#nav>.list>li{
   /* float:left; */
    width: 20%;
	font-size:16px;
	text-align:center;
    /* background: orangered; */
}
::-webkit-scrollbar {
display: none;/*隐藏滚轮*/
}
#nav>.list>.active{
	text-align: center;
	color:#555555;
	border-bottom:2px solid black;
}
#nav>.list>.youhui{
	/* margin-left:8px; */
	width:2.8rem;
	
}
</style>