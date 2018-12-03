<template>
	<div class="cart">
		<div class="cart-header">
			<h2>购物车</h2>
			<h3>编辑</h3>
		</div>
		<cartContent-com @pay="getVal"></cartContent-com>
		<div class="cart-footer">
			<p>
				<span>总金额</span>
				<span>￥<em>{{price}}</em></span>
			</p>
			<p @click="handlePay()">结算 ({{count}})</p>
		</div>
	</div>
</template>

<script>
import Vuex from 'vuex';
import cartContent from './cartContent.vue';
export default {
	components: {
		'cartContent-com': cartContent
	},
	data() {
		return {
			price: '',
			count: '',
			freight: ''
		}
	},
	methods: {
		getVal(val) {
			this.price = val[0].sumPrice;
			this.count = val[0].sumCount;
			this.freight = val[1];
		},
		handlePay() {
			this.$router.push({name: 'pay', query: {price: this.price, freight: this.freight}});
		},
		...Vuex.mapActions({
			handleAddProduct: 'cart/handleAddProduct'
		})
	},
	beforeDestroy() {
		//{"0":{"src":"static/img/goodsAdd_03.jpg","name":"宽松衬衫-男","price":119,"color":"蓝色","size":"170/M","num":5}}
		let isLogin = true;
		if (isLogin) {
			let str = localStorage.product;
			let obj = JSON.parse(str);
			console.log(obj);
			this.handleAddProduct(obj);
		} else {
			alert('用户未登录');
		}
	}
}
</script>

<style scoped>
	.cart {
		padding-top: .4rem;
		height: 100%;
	}
	.cart-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: .87rem;
		border-bottom: 1px solid #DCDCDC;
	}
	.cart-header h2 {
		padding-left: 3.23rem;
		text-align: center;
		font-size: 18px;
		color: #030303;
	}
	.cart-header h3 {
		padding-right: .32rem;
		font-size: 18px;
		color: #5A5A5A;
	}
	.cart-footer {
		display: flex;
		position: fixed;
		bottom: .98rem;
		height: .9rem;
		line-height: .9rem;
		font-size: 14px;
	}
	.cart-footer p:nth-child(1) {
		width: 5.44rem;
		height: .9rem;
		background: #fff;
	}
	.cart-footer p:nth-child(1) span:nth-child(1) {
		padding-left: .23rem;
		padding-right: .43rem;
		color: #030303;
	}
	.cart-footer p:nth-child(1) span:nth-child(2) {
		color: #b72941;
	}
	.cart-footer p:nth-child(1) span:nth-child(2) em {
		font-size: 18px;
	}
	.cart-footer p:nth-child(2) {
		width: 2.06rem;
		text-align: center;
		background: #384355;
		color: #fff;
	}
</style>
