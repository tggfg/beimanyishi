<template>
	<!-- <div class="wrapper"> -->
	<div class="shang">
		<div class="nav3">
<<<<<<< HEAD
		<ul>
		<li v-for="(item,index) in nav1" :class="activeIndexnow==index?'active4':''"  @click="handleClick1(index)">
			{{item.title}}
		</li>
		</ul>
=======
			<ul>
				<li v-for="(item,index) in nav1" :class="activeIndexnow==index?'active4':''" @click="handleClick1(index)">
					{{item.title}}
				</li>
			</ul>
>>>>>>> shangshang
		</div>
		<div class="shangyi con wrapper" ref="wrapper">
			<ul class="content">
				<li v-for="(item,index) in sp2">
<<<<<<< HEAD
					<img :src="item.src">
=======
					<img :src="item.picture">
>>>>>>> shangshang
					<p>
						<span>{{item.name}}</span>
						<span>￥{{item.price}}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	import Vuex from "vuex";
	export default {
<<<<<<< HEAD
		components: {

		},
		data() {
			return {
				pageNum: 1,
				inum:1,
				
								nav1:[
									{
									id:1,
									name:"tehui2",
									title:"女装"
									},
									{
									id:2,
									name:"tehui2",
									title:"男装"
									},
									{
									id:3,
									name:"tehui2",
									title:"童装"
									},
									{
									id:4,
									name:"tehui2",
									title:"婴幼儿"	
									},
									{
									id:5,
									name:"tehui2",
									title:"运动"
									}
								],
								activeIndexnow:0,
				
=======
	
		data() {
			return {
				pageNum: 1,
				inum: 1001,
				activeIndexnow: 0,
				nav1: [{
						id: 1001,
						name: "tehui2",
						title: "女装"
					},
					{
						id: 1002,
						name: "tehui2",
						title: "男装"
					},
					{
						id: 1003,
						name: "tehui2",
						title: "童装"
					},
					{
						id: 1004,
						name: "tehui2",
						title: "婴幼儿"
					},
					{
						id: 1005,
						name: "tehui2",
						title: "运动"
					}
				],
>>>>>>> shangshang
			}
		},
		computed: {
			...Vuex.mapState({
				sp2: state => state.home.sp2,
			})
		},
<<<<<<< HEAD
   beforeRouteUpdate(to,from,next) {
		this.id2 = to.params.id2;
		 // console.log(this.id);
		next();
		this.inum = this.id2;
		console.log(this.inum);
	  },
//     props:{
// 			id:Number,
// 		},
		methods: {
			...Vuex.mapActions({
				handleTehui2: "home/handleTehui2",
			}),
					handleClick1(index){
							this.activeIndexnow = index;
						this.$router.push({name:this.nav1[index].name,query:{
							index:this.nav1[index].id},
							})			
=======
		beforeRouteUpdate(to, from, next) {
			
			this.index = to.params.index;
			// this.id = to.params.id;
			this.activeIndexnow = this.index-1001;
			// console.log(this.index);
			next();
			this.clearArray2();
			this.inum = this.index;
			this.pageNum =1;
			this.handleTehui2([this.pageNum, this.inum]);
			this.handleGoodsFlagToggle3();

		},

		methods: {
			...Vuex.mapActions({
				handleTehui2: "home/handleTehui2",

			}),
			...Vuex.mapMutations({
				clearArray2: "home/clearArray2",
				handleGoodsFlagToggle3:"home/handleGoodsFlagToggle3"

			}),
			handleClick1(index) {
				this.activeIndexnow = index;
				this.$router.push({
					name: this.nav1[index].name,
					params: {
					index: this.nav1[index].id,
					},
				})
>>>>>>> shangshang
			},
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper, {
				click: true,
				pullUpLoad: true
			});
			this.scroll.on("pullingUp", () => {
<<<<<<< HEAD
				console.log(this.inum)
				this.handleTehui2([++this.pageNum,this.inum]);
=======
				// console.log(this.inum)
				this.handleTehui2([++this.pageNum, this.inum]);
>>>>>>> shangshang
			})
		},
		updated() {
			//重新计算高度
			this.scroll.refresh();
			//当数据加载完毕以后通知better-scroll
			this.scroll.finishPullUp();
<<<<<<< HEAD
			
		},
		created() {
			console.log(this.inum);
			this.handleTehui2([this.pageNum,this.inum]);
=======

		},
		created() {
			console.log(this.inum);
			this.inum=this.$route.params.index;
			this.handleTehui2([this.pageNum, this.inum]);
>>>>>>> shangshang
		},

	}
</script>
<style>
	.shangyi {
		margin-top: 0px;
		background: #fff;
		position: relative;
		top: 4.4rem;
	}

	.shangyi img {
		width: 100%;
		height: 4.4rem;
	}

	.shangyi ul {
		padding: 0 13px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-bottom: 0.98rem;
	}

	.shangyi ul li {
		width: 48%;

	}

	.shangyi p {
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 16px;
	}

	.shangyi p span:nth-child(2) {
		color: red;
	}

	.shang .wrapper {
		position: absolute;
		top: 3.28rem;
		bottom: 0.98rem;
		width: 100%;
		overflow: hidden;
	}
<<<<<<< HEAD
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
=======

	.nav3 {
		width: 100%;
		position: fixed;
		top: 2.5rem;
		z-index: 3
	}

	.nav3 ul {
		width: 100%;
		background: #fff;
		display: flex;
		height: 0.64rem;
		align-items: center;
		padding-left: 5px;
		/* color:yellow; */
	}

	.nav3 ul li {
		margin-right: 30px;
		float: left;
		font-size: 14px;
	}

	.nav3 .active4 {
		background: #fff;
		color: red;
>>>>>>> shangshang
	}
</style>
