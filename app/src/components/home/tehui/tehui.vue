<template>
	<!-- <div class="wrapper"> -->
	<div class="shang">
		<div class="nav3">
			<ul>
				<li v-for="(item,index) in nav1" :class="activeIndexnow==index?'active4':''" @click="handleClick1(index)">
					{{item.title}}
<<<<<<< HEAD
=======
					<!-- <div class="jiantou"></div> -->
>>>>>>> shangshang
				</li>
			</ul>
		</div>
		<div class="shangyi con wrapper" ref="wrapper">
			<ul class="content">
				<li v-for="(item,index) in sp">
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
				inum: 1,
				activeIndexnow: 0,
				nav1: [{
						id: 1,
=======
	
		data() {
			return {
				pageNum: 1,
				inum: 1001,
				activeIndexnow: 0,
				nav1: [{
						id: 1001,
>>>>>>> shangshang
						name: "tehui",
						title: "女装"
					},
					{
<<<<<<< HEAD
						id: 2,
=======
						id: 1002,
>>>>>>> shangshang
						name: "tehui",
						title: "男装"
					},
					{
<<<<<<< HEAD
						id: 3,
=======
						id:1003,
>>>>>>> shangshang
						name: "tehui",
						title: "童装"
					},
					{
<<<<<<< HEAD
						id: 4,
=======
						id: 1004,
>>>>>>> shangshang
						name: "tehui",
						title: "婴幼儿"
					},
					{
<<<<<<< HEAD
						id: 5,
=======
						id: 1005,
>>>>>>> shangshang
						name: "tehui",
						title: "运动"
					}
				],
			}
		},
		computed: {
			...Vuex.mapState({
				sp: state => state.home.sp,
			})
		},
		beforeRouteUpdate(to, from, next) {
<<<<<<< HEAD
			this.index = to.query.index;
=======
			// console.log( to.params.index);
			this.index = to.params.index;
			// this.id = to.params.id;
			// console.log(this.index);
			this.activeIndexnow = this.index-1001;
			
>>>>>>> shangshang
			next();
			this.clearArray();
			this.inum = this.index;
			this.pageNum =1;
			this.handleTehui([this.pageNum, this.inum]);
<<<<<<< HEAD
=======
			this.handleGoodsFlagToggle1();
>>>>>>> shangshang
		},

		methods: {
			...Vuex.mapActions({
				handleTehui: "home/handleTehui",

			}),
			...Vuex.mapMutations({
				clearArray: "home/clearArray",
<<<<<<< HEAD
			}),
			handleClick1(index) {
				this.activeIndexnow = index;
				this.$router.push({
					name: this.nav1[index].name,
					query: {
						index: this.nav1[index].id
=======
				handleGoodsFlagToggle1:"home/handleGoodsFlagToggle1"
			}),
			handleClick1(index) {
				 console.log(index);
				this.activeIndexnow = index;
				this.$router.push({
					name: this.nav1[index].name,
					params: {
					index: this.nav1[index].id,
>>>>>>> shangshang
					},
				})
			},
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper, {
				click: true,
<<<<<<< HEAD
=======
				tap:true,
>>>>>>> shangshang
				pullUpLoad: true
			});
			this.scroll.on("pullingUp", () => {
				// console.log(this.inum)
				this.handleTehui([++this.pageNum, this.inum]);
			})
		},
		updated() {
			//重新计算高度
			this.scroll.refresh();
			//当数据加载完毕以后通知better-scroll
			this.scroll.finishPullUp();

		},
<<<<<<< HEAD
		created() {
			console.log(this.inum);
=======
// 		destroyed(){
// 			this.handleGoodsFlagToggle1()
// 		},
		created() {
			console.log(this.inum);
			this.inum=this.$route.params.index;
>>>>>>> shangshang
			this.handleTehui([this.pageNum, this.inum]);
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

	.nav3 {
		width: 100%;
		position: fixed;
<<<<<<< HEAD
		top: 2.5rem;
=======
		top: 2.6rem;
>>>>>>> shangshang
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
<<<<<<< HEAD
=======
	/* 	width:1rem;
		height:0.6rem; */
		/* background: blue; */
>>>>>>> shangshang
	}

	.nav3 .active4 {
		background: #fff;
		color: red;
	}
<<<<<<< HEAD
=======

>>>>>>> shangshang
</style>
