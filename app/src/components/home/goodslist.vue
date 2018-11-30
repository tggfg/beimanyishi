<template>
	<div class="goods">
		<div class="wrapper" ref="goodsWrapper">
			<div class="content">
				<banner-com></banner-com>
				<content-com></content-com>
				<div class="goodslist">
					<ul>
						<li><img src="https://s2.lativ.com.tw/m/i/Waterfall//37191_560_180915_TW_3.jpg"></li>
						<li><img src="https://s3.lativ.com.tw/m/i/Waterfall//37391_560_181115_TW.jpg"></li>
						<li>
							<p v-for="(item,index) in tiao" :class="activeIndex==index?'active2':'bo1'" @click="handleChange(index)" :key="index">{{item.title}}</p>
						</li>
						<li><img src="https://s3.lativ.com.tw/m/i/Waterfall//37239_560_180827_TW.jpg"></li>
						<!-- 商品懒加载 -->

						<li v-for="(item,index) in goodslist" @click="handleCk()" :key="index">
							<div>
								<img :src="item.src">
								<p>
									<span>{{item.name}}</span>
									<span>￥{{item.price}}</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import banner from "./banner.vue";
	import content from "./content.vue";
	import axios from "axios";
	import Vuex from "vuex";
	import BScroll from 'better-scroll';
	export default {
		components: {
			"banner-com": banner,
			"content-com": content,
		},
		data() {
			return {
				tiao: [{
						name: "qihua",
						title: "特别企划"
					},
					{
						name: "bozhu",
						title: "博主啊甘推荐款"
					},
					{
						name: "tuijian",
						title: "Bigger研究所推荐"
					},
					{
						name: "zhekou",
						title: "优享折扣"
					}
				],
				activeIndex: 0,
			    pageNum: 1,
				yifu: [
					{
						src: "../../../../static/img/images/限时特惠@2x_13.png",
						id: 1,
						name: "针织衫",
						price: 89
					},
					{
						src: "../../../../static/img/images/限时特惠@2x_13.png",
						id: 2,
						name: "卫衣",
						price: 89
					},
					{
						src: "../../../../static/img/images/限时特惠@2x_13.png",
						id: 3,
						name: "裤子",
						price: 233
					},
					{
						src: "../../../../static/img/images/限时特惠@2x_13.png",
						id: 3,
						name: "裤子",
						price: 233
					}


				]
			}
		},

		computed: {
			...Vuex.mapState({
				goodslist: state => state.home.goodslist,
				// pageNum:state=>state.home.pageNum,
			})
		},
		created() {
			// thi/s.handleNow_getNowMovie(this.pageNum);
// 			console.log(this.pageNum);
     		this.handleCloth(this.pageNum);
//
		},
		methods: {
			handleChange(index) {
				console.log(index);
				this.activeIndex = index;
			},
			...Vuex.mapActions({
				handleCloth: "home/handleCloth",
			}),
			...Vuex.mapMutations({
				handleGoodsFlagToggle:"home/handleGoodsFlagToggle"
			}),
			handleCk() {
				alert(1)
			}

		},
		mounted() {
			this.scroll = new BScroll(this.$refs.goodsWrapper, {
				click: true,
				// tap: true,
				pullUpLoad: true,

			});

			this.scroll.on("pullingUp", () => {
				this.handleCloth(++this.pageNum);
			})

		},
		updated () {
			//重新计算高度
			this.scroll.refresh();
			//当数据加载完毕以后通知better-scroll
			this.scroll.finishPullUp();
		},
		destroyed(){
			this.handleGoodsFlagToggle()
		}
	}
</script>
<style>
.goodslist {
	width: 100%;
	height: 100%;
}

.goodslist>ul {
	margin-top: 0.2rem;
	width: 100%;
	padding:0 13px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.goodslist>ul>li {
	width: 48%;
	margin-top: 10px;
	/* padding:0 10px; */
}

.goodslist>ul>li>p {
	width: 100%;
	height: 0.8rem;
	border: 1px solid black;
	margin-bottom: 20px;
	border-radius: 6px;
	text-align: center;
	line-height: 0.8rem;
	font-size: 14px;
}

.goodslist>ul>li>.bo1 {
	background: #F4F4F4;
	color: #1E1E1E;
}

.goodslist ul li img {
	width:100%;
	height:4.4rem;
}

.active1 {
	background: #6D85AC;
	color: #ffffff;
}

.goodslist>ul>li>.active2 {
	background: #6D85AC;
	color: white;
}

	/* 商品列表 */
.goodslist ul li span:nth-child(2) {
	font-size: 17px;
	color: red;
}

.goodslist ul li span:nth-child(1) {
	font-size: 14px;
}
.goodslist p {
		width: 100%;
		height: 1rem;
		padding: 0 6px;
		line-height: 1rem;
		background: #F4F4F4;
		border-radius: 6px;
		display: flex;
		justify-content: space-between;
	}

.goods .wrapper {
		position: absolute;
		top: 2.28rem;
		bottom: 0.98rem;
		width: 100%;
		overflow: hidden;
	}
</style>
