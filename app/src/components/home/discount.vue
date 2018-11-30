<template>
<!-- <div class="page"> -->
<div class="on">
<xianshitehui-com></xianshitehui-com>
<div class="discount">
	<ul>
	<li v-for="(item,index) in nav" :class="activeIndex==index?'active3':''" @click="handleClick(index)">
	{{item.title}} 
	<div  :class="jiantou==index?'jiantou':''"></div>
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
			num:0,
			num1:0,
			jiantou:0,
		}
	},
	// beforeRouteUpdate(to, from, next) { 
     // if(this.index=""){
   		// this.$router.push({name:"tehui",params:{index:1}});
      // }
// 		this.$router.push({name:"tehui",params:{index:1}});
// // 			// console.log(this.index);
// //  			next();
// // // 			this.clearArray();
// // // 			this.inum = this.index;
// // // 			this.pageNum =1;
// // // 			this.handleTehui([this.pageNum, this.inum]);
   // },
  
	methods:{
		handleClick(i){
			this.activeIndex = i;
			this.shuju=i;
			this.jiantou=i;
		  this.$router.push({name:this.nav[i].name,params:{index:1001}})
		},
		handleClick1(index){
			this.activeIndexnow = index;
			this.num++;
			this.$router.push({name:this.nav1[index].name,params:{
				index:this.nav1[index].id
			},
			
		 })
	  },
	},
	created(){
		   this.$router.push({name:"tehui",params:{index:1001}});
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
	bottom:6px;
}
.discount li{
  float:left;
  width:1.9rem;
  height:1.14rem;
 padding-top:10px;
  /* line-height: 1.14rem; */
  background:#F4F4F4 ;
	/* background-size:0.2rem; */
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
	top:2.9rem;
	z-index:3
}
.nav3 ul{
	width:100%;
	/* background:red; */
	display:flex;
  height:0.64rem;
	align-items: center;
	padding-left:15px;
	/* color:yellow; */
}
.nav3 ul li{
	margin-right:30px;
  margin-left:10px;
	float:left;
	font-size:14px;
}
.nav3 .active4{
  background:#fff;
  color:red;
}
.jiantou{
	width:10px;
	height:10px;
	background: #384355;
  margin-top:3px;
	margin-left:44px;
	/* left:50px; */
 	transform: rotate(45deg);
} 
</style>