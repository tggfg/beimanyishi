<template>
  <div id="app">

    <router-view/>
		<footer-com ></footer-com>
  </div>
</template>

<script>
import footer from "./components/common/footer.vue"
import Vuex from "vuex";
export default {
	components:{
		"footer-com":footer
	},
	computed:{
		...Vuex.mapState({
			showBottom:state=>state.home.showBottom,
		})
	}
}
</script>

<style>
#app{
	width:100%;
	height:100%;
}
</style>
