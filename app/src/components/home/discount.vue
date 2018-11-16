<template>
<!-- <div class="page"> -->
<div class="on">
<xianshitehui-com></xianshitehui-com>
<div class="discount">
	<ul>
	<li v-for="(item,index) in nav" :class="activeIndex==index?'active3':''" @click="handleClick(index)">
	{{item.title}}
	</li>	
	</ul>
	
</div>
<!-- <div class="nav3">
<ul>
<li v-for="(item,index) in nav1" :class="activeIndexnow==index?'active4':''"  @click="handleClick1(index)">
  {{item.title}}
</li>
</ul>
</div> -->
<router-view></router-view>
</div>
</template>
<script>
import xianshitehui from "./xianshitehui.vue";
import Vuex from "vuex";
import axios from "axios";
export default{
	components:{
	"xianshitehui-com":xianshitehui,
	},
	data(){
		return{
			nav:[
			{
			id:1,
			name:"tehui",
			title:"限时特惠任选84折"
			},
			{
			id:2,
			name:"tehui1",
			title:"双11登场立减20元"
			},
			{
			id:3,
			name:"tehui2",
			title:"欢乐双十一立减30元"
			},
			{
			id:4,
			name:"tehui3",
			title:"羽绒特惠85折起"
			},
			],
			activeIndex:0,
// 			nav1:[
// 				{
// 				id:1,
// 				name:"tehui",
// 				title:"女装"
// 				},
// 				{
// 				id:2,
// 				name:"tehui",
// 				title:"男装"
// 				},
// 				{
// 				id:3,
// 				name:"tehui",
// 				title:"童装"
// 				},
// 				{
// 				id:4,
// 				name:"tehui",
// 				title:"婴幼儿"	
// 				},
// 				{
// 				id:5,
// 				name:"tehui",
// 				title:"运动"
// 				}
// 			],
			sp:[
				{
				src:"../../../../static/img/images/限时特惠@2x_09.png",
				id:1,
				name:"针织衫",
				price:89
				},
				{
				src:"../../../../static/img/images/限时特惠@2x_09.png",
				id:1,
				name:"针织衫",
				price:89
				},
				{
				src:"../../../../static/img/images/限时特惠@2x_09.png",
				id:1,
				name:"针织衫",
				price:89
				},
				{
				src:"../../../../static/img/images/限时特惠@2x_09.png",
				id:1,
				name:"针织衫",
				price:89
				},
				{
				src:"../../../../static/img/images/限时特惠@2x_09.png",
				id:1,
				name:"针织衫",
				price:89
				},
				{
				src:"../../../../static/img/images/限时特惠@2x_09.png",
				id:1,
				name:"针织衫",
				price:89
				}
				
			],
			shuju:0,
			activeIndexnow:0,
		}
	},
	computed:{

	},
  
	methods:{
		handleClick(i){
			this.activeIndex = i;
			this.shuju=i;
		    // console.log(this.nav[i]);
		this.$router.push({name:this.nav[i].name
			 });
		},
		handleClick1(index){
			this.activeIndexnow = index;
			this.$router.push({name:this.nav1[index].name,query:{
				index:this.nav1[index].id
			},
			
		 })
	  },
	},
	created(){
		   this.$router.push({name:"tehui"});
 	}
}
</script>
<style>
.on{
	padding-top:0.4rem;
	height: 100%;
}
.discount{
	width:100%;
    overflow: scroll;
	/* position:absolute;
	 top:0.1rem; */
}
.discount ul{
	width:100%;
	display: flex;	
	position:relative;
	z-index:2;
	
}
.discount li{
  float:left;
  width:1.9rem;
  height:1.14rem;
 padding-top:10px;
  /* line-height: 1.14rem; */
  background:#F4F4F4;
  border-right:1px solid #999999;
  color:#5A5A5A;
  font-size:16px;
  text-align:center;
}
.discount .active3{
	background:#384355;
	color:#fff;

}
.nav3{
	width:100%;
	position:fixed;
	top:2.5rem;
	z-index:3
}
.nav3 ul{
	width:100%;
	background:#fff;
	display:flex;
    height:0.64rem;
	align-items: center;
	padding-left:5px;
	/* color:yellow; */
}
.nav3 ul li{
	margin-right:30px;
	float:left;
	font-size:14px;
}
.nav3 .active4{
  background:#fff;
  color:red;
}
</style>