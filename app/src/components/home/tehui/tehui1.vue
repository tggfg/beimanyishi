<template>
	<!-- <div class="wrapper"> -->
	<div class="shang">
		<div class="nav3">
			<ul>
				<li v-for="(item,index) in nav1" :class="activeIndexnow==index?'active4':''" @click="handleClick1(index)">
					{{item.title}}
					<!-- <div class="jiantou"></div> -->
				</li>
			</ul>
		</div>
		<div class="shangyi con wrapper" ref="wrapper">
			<ul class="content">
				<li v-for="(item,index) in sp1">
					<img :src="item.picture">
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
	
		data() {
			return {
				pageNum: 1,
				inum: 1001,
				activeIndexnow: 0,
				nav1: [{
						id: 1001,
						name: "tehui1",
						title: "女装"
					},
					{
						id: 1002,
						name: "tehui1",
						title: "男装"
					},
					{
						id: 1003,
						name: "tehui1",
						title: "童装"
					},
					{
						id: 1004,
						name: "tehui1",
						title: "婴幼儿"
					},
					{
						id: 1005,
						name: "tehui",
						title: "运动"
					}
				],
			}
		},
		computed: {
			...Vuex.mapState({
				sp1: state => state.home.sp1,
			})
		},
		beforeRouteUpdate(to, from, next) {
			
			this.index = to.params.index;
			// this.id = to.params.id;
			this.activeIndexnow = this.index-1001;
			// console.log(this.index);
			next();
			this.clearArray1();
			this.inum = this.index;
			this.pageNum =1;
			this.handleTehui1([this.pageNum, this.inum]);
			this.handleGoodsFlagToggle2();

		},

		methods: {
			...Vuex.mapActions({
				handleTehui1: "home/handleTehui1",

			}),
			...Vuex.mapMutations({
				clearArray1: "home/clearArray1",
				handleGoodsFlagToggle2:"home/handleGoodsFlagToggle2"
			}),
			handleClick1(index) {
				console.log(index);
				this.activeIndexnow = index;
				this.$router.push({
					name: this.nav1[index].name,
					params: {
					index: this.nav1[index].id,
					},
				})
			},
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper, {
				click: true,
				tap:true,
				pullUpLoad: true
			});
			this.scroll.on("pullingUp", () => {
				// console.log(this.inum)
				this.handleTehui1([++this.pageNum, this.inum]);
			})
		},
		updated() {
			//重新计算高度
			this.scroll.refresh();
			//当数据加载完毕以后通知better-scroll
			this.scroll.finishPullUp();

		},
		created() {
			console.log(this.inum);
			this.inum=this.$route.params.index;
			this.handleTehui1([this.pageNum, this.inum]);
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
		top: 2.6rem;
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
	/* 	width:1rem;
		height:0.6rem; */
		/* background: blue; */
	}

	.nav3 .active4 {
		background: #fff;
		color: red;
	}

</style>
