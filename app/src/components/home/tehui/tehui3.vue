<template>
	<!-- <div class="wrapper"> -->
	<div class="shang">
		<div class="nav3">
			<ul>
				<li v-for="(item,index) in nav1" :class="activeIndexnow==index?'active4':''" @click="handleClick1(index)">
					{{item.title}}
				</li>
			</ul>
		</div>
		<div class="shangyi con wrapper" ref="wrapper">
			<ul class="content">
				<li v-for="(item,index) in sp3">
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
						name: "tehui3",
						title: "女装"
					},
					{
						id: 1002,
						name: "tehui3",
						title: "男装"
					},
					{
						id: 1003,
						name: "tehui3",
						title: "童装"
					},
					{
						id: 1004,
						name: "tehui3",
						title: "婴幼儿"
					},
					{
						id: 1005,
						name: "tehui3",
						title: "运动"
					}
				],
			}
		},
		computed: {
			...Vuex.mapState({
				sp3: state => state.home.sp3,
			})
		},
		beforeRouteUpdate(to, from, next) {
			
			this.index = to.params.index;
			// this.id = to.params.id;
			this.activeIndexnow = this.index-1001;
			// console.log(this.index);
			next();
			this.clearArray3();
			this.inum = this.index;
			this.pageNum =1;
			this.handleTehui3([this.pageNum, this.inum]);
			this.handleGoodsFlagToggle4();

		},

		methods: {
			...Vuex.mapActions({
				handleTehui3: "home/handleTehui3",
			}),
			...Vuex.mapMutations({
				clearArray3: "home/clearArray3",
				handleGoodsFlagToggle4:"home/handleGoodsFlagToggle4"

			}),
			handleClick1(index) {
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
				pullUpLoad: true
			});
			this.scroll.on("pullingUp", () => {
				// console.log(this.inum)
				this.handleTehui3([++this.pageNum, this.inum]);
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
			this.handleTehui3([this.pageNum, this.inum]);
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
	}
</style>
