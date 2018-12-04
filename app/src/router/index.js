import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home/home.vue"
import classify from "../components/classify/classify.vue"
import clothes from "../components/clothes/clothes.vue"
import personal from "../components/personal/personal.vue"
import shopping from "../components/shopping/shopping.vue"
import listdetail from "../components/classify/listdetail.vue";
import listcloth from "../components/classify/listcloth.vue";
import nav from "../components/classify/nav";
import total from "../components/classify/total";
import totalcloth from "../components/classify/totalcloth";
//lmc
import clothesin from "../components/clothes/clothesin";
import gy from "../components/clothes/gy"
import qp from "../components/clothes/qp"
import youhui from "../components/clothes/youhui"
//pk
import login from "../components/login/login.vue"
import register from "../components/register/register.vue"
import forgetpasword from "../components/forgetpasword/forgetpasword.vue"

// syx
import discount from "../components/home/discount.vue"
import index from "../components/home/index.vue"
import cloth from "../components/home/cloth.vue"
import tehui from "../components/home/tehui/tehui.vue"
import tehui1 from "../components/home/tehui/tehui1.vue"
import tehui2 from "../components/home/tehui/tehui2.vue"
import tehui3 from "../components/home/tehui/tehui3.vue"
import search from "../components/home/search.vue";
import message from "../components/home/message.vue";
import find from "../components/home/Find.vue";
//订单路由
import orderPayment from "../components/personal/myorder/orderPayment.vue";
import orderDeliver from "../components/personal/myorder/orderDeliver.vue";
import orderEvalute from "../components/personal/myorder/orderEvalute.vue";
import orderReceive from "../components/personal/myorder/orderReceive.vue";
import orderReturn from "../components/personal/myorder/orderReturn.vue";
Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      redirect: "/home/index"
    },
    {
		path:"/",
		redirect:"/home/index"
	},
	{
		path:"/home/index",
		name:"home",
		component:home,
	 children:[
	 {
	 path:"/home/index",
	 name:"index",
	 component:index,
	 },
	 {
	 path:"cloth",
	 name:"cloth",
	 component:cloth,
	 },
	 ]
  },
  {
	  path: "/login",
	  name: "login",
	  component: login,
  },
  {
	  path: "/register",
	  name: "register",
	  component: register,
  },
  {
	  path: "/forgetpasword",
	  name: "forgetpasword",
	  component: forgetpasword,
  },
  {
    path:"/clothesin",
    name:"clothesin",
    component:clothesin
  },
  {
    path:"/qp",
    name:"qp",
    component:qp
  },
  {
    path:"/gy",
    name:"gy",
    component:gy
  },
  {
    path:"/youhui",
    name:"youhui",
    component:youhui
  },

	  {
	  path:"/discount",
	  name:"discount",
	  component:discount,
	  children:[
		  {
		  path:"tehui/:index",
		  name:"tehui",
		  component:tehui,
		  },
		 {
		 path:"tehui1/:index",
		 name:"tehui1",
		 component:tehui1,
		 },
		 {
		 path:"tehui2/:index",
		 name:"tehui2",
		 component:tehui2,
		 },
		 {
		 path:"tehui3/:index",
		 name:"tehui3",
		 component:tehui3,
		 },
			  ]
	  },
	  {
		  path:"/message",
		  name:"message",
		  component:message
	  },
	 {
	 path:"/classify",
	 name:"classify",
	 component:classify,
	 children:[
		 {
			 path:"nav",
			 name:"nav",
			 component:nav
		 }
	 ]
	 },
	 {
		path:"/listdetail",
		name:"listdetail",
		component:listdetail,
		children:[
			{
				path:"listcloth",
				name:"listcloth",
				component:listcloth
			}
		]
	 },
	 {
		path:"/total",
		name:"total",
		component:total,
		children:[
			{
				path:"totalcloth",
				name:"totalcloth",
				component:totalcloth
			}
		]
	 },
	 {
	 path:"/clothes",
	 name:"clothes",
	 component:clothes
	 },

	 {
	 path:"/shopping",
	 name:"shopping",
	 component:shopping
   },
{
	 path:"/personal",
	 name:"personal",
	 component:personal
   },
   {
	path: "/myorder/orderPayment",
	name: "orderPayment",
	component: orderPayment,
  },
  {
	path: "/myorder/orderEvalute",
	name: "orderEvalute",
	component: orderEvalute,
  },
  {
	path: "/myorder/orderReceive",
	name: "orderReceive",
	component: orderReceive,
  },
  {
	path: "/myorder/orderDeliver",
	name: "orderDeliver",
	component: orderDeliver,
  },
  {
	path: "/myorder/orderReturn",
	name: "orderReturn",
	component: orderReturn,
  },
   {
		path:"/search",
		name:"search",
		component:search
	 },
	 {
		path:"/search",
		name:"search",
		component:search
	  },
   {
		path:"/find",
		name:"find",
		component:find
		},
  ]

})
