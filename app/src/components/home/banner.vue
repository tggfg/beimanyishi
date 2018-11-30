<template>
<div >
	<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner"  :key="index">
			<img :src="item.src">
		</div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</div>
</template>
<script>
import Vuex from "vuex";
import "../../../node_modules/swiper/dist/css/swiper.css";
// 这步引用的swiper.js
import Swiper from "swiper";
export default{
created(){
		this.handleBanner()
	},
 computed:{
	 ...Vuex.mapState({
		 banner:state=>state.home.banner,
	 })
 },
  methods:{
	  ...Vuex.mapActions({
		  handleBanner:"home/handleBanner"
	})
  },
  // 所有的生命周期在哪里操作dom最合适在mounted
  mounted(){
    new Swiper ('.swiper-container', {
		 loop: true, // 循环模式选项
     autoplay:{
		   disableOnInteraction:false,
	   },


    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

  })
  },
}
</script>
<style>
.swiper-slide	img{
	width:100%;
	height:100%;
/* 	position:fixed;
	z-index:1; */

}

</style>
