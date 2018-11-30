<template>
<div class="footer" v-if="showBottom">
<ul>
	 <li v-for="(item,index) in navs" k>

		 <router-link :to="{name:item.name}"><i  :class="'iconfont '+item.iname"></i>
		 <span>{{item.title}}</span></router-link>
	 </li>
</ul>
</div>
</template>
<script>
import Vuex from "vuex";
export default{
// 	props:{
// 		showBottom:Boolean,
// 	},
	data(){
		return{
			navs:[
				{
				 iname:"icon-shouye",
				  name:"home",
				  title:"首页"
				},
				{
					iname:"icon-fenlei",
				  name:"classify",
				  title:"分类"
				},
				{
					iname:"icon-yifu1",
					name:"clothes",
					title:"穿搭"
				},
				{
				  iname:"icon-ziyuan",
					name:"shopping",
					title:"购物车"
				},
				{
					iname:"icon-tianchongxing-",
					name:"personal",
					title:"个人"
<<<<<<< HEAD
				}
	  	]
=======
				}			
	  	],
		 // showBottom:true,
>>>>>>> shangshang
		}
	},
computed:{
	...Vuex.mapState({
		showBottom:state=>state.home.showBottom,
		})
}
}
</script>
<style>
	.footer {
		width: 100%;
		height: 0.98rem;
		background:rgba(250,250,250,1);
		position: fixed;
		left: 0;
		bottom: 0;
	}

	.footer>ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer>ul>li {
/* 		display: flex;
		flex-direction: column;
		justify-content:space-around; */
		width: 100%;
	height: 0.98rem;
	}

	.footer>ul>li>a {
		width: 100%;
		height: 100%;
/* 		line-height:0.98rem; */
		text-align: center;
		display: block;
		color: #fff;
	}

.footer>ul>li>.router-link-active>i {
    color:#384355;
/* 		background: #384355; */
	}
.footer>ul>li>a{
	display: flex;
	flex-direction: column;
	justify-content:center;
}
.footer>ul>li>a>i{
	font-size:20px;
	color:#e5e5e5;

}
.footer>ul>li>a>span{
	font-size:12px;
	color:#384355;
}
<<<<<<< HEAD
</style>
=======

</style>
>>>>>>> shangshang
