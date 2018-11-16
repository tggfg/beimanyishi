<template>
<div id="nav">
  <ul class="list">
	 <li v-for="(item,index) in navs" :class="activeIndex==index?'active':''" @click="handleClick(index)">
  <router-link :to="{name:'item.name'}">{{item.title}}</router-link>
	 </li>
  </ul>

</div>
</template>
<script>

export default{
 data(){
	 return{
		 navs:[
			{
			name:"home",
		  title:"首页" ,
      },
			{
		 name:"discount",
		 title:"限时优惠",
      },
			{
			name:"girl",
		  title:"女装 " ,
      },
			{
		 name:"boy",
		 title:"男装 " ,
      },
			{
		 name:"children",
		 title:"儿童  " ,
		 },
		 {
		 name:"smallbaby",
		 title:"婴幼儿" ,
     },
		 {
		 name:"yundong",
		 title:"运动 ", 
		 }
	  ],
		activeIndex:0
	 }
 },
 methods:{
	 handleClick(index){
		 this.activeIndex=index;
	 }
 }
}
</script>
<style>
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
	font-size:16px;
	text-align:center;
	/* background: red; */
   margin-right:12px;
}
::-webkit-scrollbar {
display: none;/*隐藏滚轮*/
}
#nav>.list>.active{
	text-align: center;
	color:#555555;
	border-bottom:2px solid black;
}
</style>
