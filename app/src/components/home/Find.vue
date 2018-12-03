<template>
	<!-- 商品 -->
	<div class="result">
		<div class="sch">
			<p @click="handleSearch()"><img src="../../../static/img/images/left.png"></p>
			<p><input type="text"  :value="val" @click="handleTiao()"></p>
			<p>消息</p>
		</div>
		<!-- 导航 -->
		<div class="navv">
			<ul>
			   <li v-for="(item,index) in navs" :class="activeIndex==index?'active':''" @click="handleClick(index,item.title)" :key="index">
				   {{item.title}}
			   </li>
			</ul>
		</div>
		<div class="goodfind">
			<div class="wrapper" ref="Wrapper">
			<div class="content">
			<div v-for="(item,index) in sousuo" class="god" :key="index">
				<img :src="item.picture">
				<p>{{item.name}}</p>
				<p>{{item.price}}</p>
			</div>
			</div>
			 </div>
		 </div>
	</div>
</template>
<script>
	import Vuex from "vuex";
	import BScroll from 'better-scroll';
	export default {
		created(){
			this.val=this.$route.query.val;
			if(this.val=="男"){
				this.activeIndex=1;
			}
			this.pageNum= this.$route.query.pageNum;
		},
		data(){
			return{
				// pageNum:1,
				val:"",
				navs:[
					{
					name:"girl",
					title:"女装 " ,
					},
					{
					name:"boy",
					title:"男装 " ,
					},

				],
				activeIndex:0

			}
		},
		computed: {
			...Vuex.mapState({
				sousuo: state => state.home.sousuo
			})
		},
		methods:{
			handleSearch(){
				this.$router.push({name:"search"})
			},
			...Vuex.mapActions({
				handleFind:"home/handleFind"
			}),
			handleClick(index,title){
				this.activeIndex=index;
				this.val=title.slice(0,1)
				this.handleFind({val:this.val,pageNum:1});

			},
			handleTiao(){
				this.$router.push("/search");
				
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.Wrapper, {
				click: true,
				// tap: true,
				pullUpLoad: true,

			});

			this.scroll.on("pullingUp", () => {
				this.handleFind({val:this.val,pageNum:++this.pageNum});
			})

		},
		updated () {
			//重新计算高度
			this.scroll.refresh();
			//当数据加载完毕以后通知better-scroll
			this.scroll.finishPullUp();
		},
	}
</script>
<style>
	.result{
		width:100%;
		height:100%;
		padding-top:0.2rem;
	}
	.goodfind {
		width: 100%;
		height: 100%;
		/* padding: 0 13px; */
		padding-top: 0.88rem;
		position: relative;
		top:1rem;
		z-index: 100;
		background: #ffffff;
		overflow: auto;

	}
	.goodfind>.wrapper>.content{
   display: flex;
   width: 100%;
	 /* position:absolute; */
	 /* margin-top:1rem; */
	 justify-content: space-between;
	 flex-wrap: wrap;
	/* position:absolute; */
	}
  .goodfind .content .god{
		/* display: flex; */
		width:45%;
		/* height:100%; */
	}

	.goodfind .god  img {
		width: 100%;
		height: 3.6rem;
	}

    .result .sch {
		position: fixed;
		background: #fff;
		line-height:1.28rem;
	}
	.result .sch  p:nth-child(1){
		margin-top:20px;
	}
	.result .sch input{
		width:5.5rem;
    height:0.56rem;
    background:#f4f4f4;
    border-radius: 5px;
    outline: none;
    border:1px solid #ccc;
		line-height:0.56rem;
		background: #F4F4F4 url("../../../static/icon/sousuo@2x.png") no-repeat 0.1rem 0.12rem;
		background-size:0.24rem 0.24rem;
		border-radius: 6px;
		outline:none;
		border:0;
		padding-left:20px;
	}
   .result .navv{
	  position:fixed;
	  top:1.2rem;
	  z-index:1001;
   }
   .result ul{
	   width:100%;
	   height:0.88rem;
	   display:flex;
	   justify-content: space-around;
   }
   .result ul li{
	   width:1.5rem;
	   height:0.88rem;
	   line-height:0.88rem;
	   text-align: center;
	   background: #fff;
	   /* border-bottom:1px solid black; */
   }
	 .goodfind>.wrapper {
			position: absolute;
	 		top: 0.88rem;
			padding:0 13px;
	 		bottom: 0.88rem;
	 		width: 100%;
	 		overflow: hidden;
	 	}
		.navv>ul> .active{
			text-align: center;
			color:#555555;
			border-bottom:2px solid black;
		}
</style>
