import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home/home.vue"
import classify  from "../components/classify/classify.vue"
import clothes  from "../components/clothes/clothes.vue"
import personal  from "../components/personal/personal.vue"
import shopping  from "../components/shopping/shopping.vue"
import collection from "../components/personal/second/collection.vue"
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
	 path:"/shopping",
	 name:"shopping",
	 component:shopping
	 },
	 {
	path:"/second/collection",
	name:"collection",
	component:collection
	},
  ]
})
