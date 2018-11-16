<template>
  <div id="app">
 
    <router-view/>
		<footer-com></footer-com>
  </div>
</template>

<script>
import footer from "./components/common/footer.vue"
export default {
	components:{
		"footer-com":footer
	}
}
</script>

<style>
#app{
	width: 100%;
	height:100%;
}
</style>
