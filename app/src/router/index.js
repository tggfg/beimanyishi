import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home/home.vue"
import classify  from "../components/classify/classify.vue"
import clothes  from "../components/clothes/clothes.vue"
import personal  from "../components/personal/personal.vue"
import cart  from "../components/shopping/cart/cart.vue"
import emptyCart from '@/components/shopping/cart/emptyCart.vue'
import goodsDetails from '@/components/shopping/goodsDetails/goodsDetails.vue'
import pay from '@/components/shopping/pay/pay.vue'

Vue.use(Router)

export default new Router({
  routes: [
   {
   	path:"/",
   	redirect:"/home"
   },
   {
   	path:"/home",
   	name:"home",
   	component:home
   },
	 {
	 path:"/classify",
	 name:"classify",
	 component:classify
	 },
	 {
	 path:"/clothes",
	 name:"clothes",
	 component:clothes
	 },
	 {
	 path:"/personal",
	 name:"personal",
	 component:personal
	 },
	 {
	 path:"/cart",
	 name:"cart",
	 component:cart
	 },
	 {
		path: '/emptyCart',
		name: 'emptyCart',
		component: emptyCart
	 },
	 {
		path: '/goodsDetails',
		name: 'goodsDetails',
		component: goodsDetails
	 },
	 {
		path: '/pay',
		name: 'pay',
		component: pay
	 }
  ]
})
