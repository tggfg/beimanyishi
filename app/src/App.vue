<template>
  <div id="app">
 
    <router-view/>
		<!-- <footer-com></footer-com> -->
  </div>
</template>

<script>
import footer from "./components/common/footer.vue"
import Vuex from 'vuex'
export default {
	components:{
		"footer-com":footer
	},
	computed: {
		...Vuex.mapState({
			flag: state => state.flag
		})
	}
}
</script>

<style>
	#app {
		height: 100%;
	}
</style>
