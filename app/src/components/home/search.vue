<template>
<div>
	dgdgrttr
</div>	

</template>
<script>
import Vuex from "vuex";
export default{
 data(){
	return{
	
	}
 },
 computed:{
	...Vuex.mapState({
		showBottom:state=>state.home.showBottom,
	}),
	
},
methods:{
	...Vuex.mapMutations({
		// handleBottom:"handleBottom",
	})
}
}
</script>
<style>
</style>