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
// syx
import discount from "../components/home/discount.vue"
import index from "../components/home/index.vue"
import cloth from "../components/home/cloth.vue"
import tehui from "../components/home/tehui/tehui.vue"
import tehui1 from "../components/home/tehui/tehui1.vue"
import tehui2 from "../components/home/tehui/tehui2.vue"
import tehui3 from "../components/home/tehui/tehui3.vue"
import search from "../components/home/search.vue"
import clothesin from "../components/clothes/clothesin.vue"
import collection from "../components/personal/second/collection.vue"
Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      redirect: "/home/index"
    },
    {
      path: "/home/index",
      name: "home",
      component: home,
      children: [{
          path: "/home/index",
          name: "index",
          component: index,
        },
        {
          path: "cloth",
          name: "cloth",
          component: cloth,
        },

      ]
    },
    {
      path: "/discount",
      name: "discount",
      component: discount,
      children: [{
          path: "tehui",
          name: "tehui",
          component: tehui,
        },
        {
          path: "tehui1",
          name: "tehui1",
          component: tehui1,
        },
        {
          path: "tehui2",
          name: "tehui2",
          component: tehui2,
        },
        {
          path: "tehui3",
          name: "tehui3",
          component: tehui3,
        },
      ]
    },
    {
      path: "/classify",
      name: "classify",
      component: classify,
      children: [{
        path: "nav",
        name: "nav",
        component: nav
      }]
    },
    {
      path: "/listdetail",
      name: "listdetail",
      component: listdetail,
      children: [{
        path: "listcloth",
        name: "listcloth",
        component: listcloth
      }]
    },
    {
      path: "/total",
      name: "total",
      component: total
    },
    {
      path: "/clothes",
      name: "clothes",
      component: clothes
    },
    {
      path: "/personal",
      name: "personal",
      component: personal
    },
    {
      path: "/shopping",
      name: "shopping",
      component: shopping
    },
    {
      path: "clothesin",
      name: "clothesin",
      component: clothesin,
    },
    {
      path: "/second/collection",
      name: "collection",
      component: collection
    },
  ]
})
