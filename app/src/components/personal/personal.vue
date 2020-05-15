<template>
	<div class="clothes">
		<top-com></top-com>
		<order-com></order-com>
		<services-com></services-com>

	</div>
</template>
<script>

import Vuex from "vuex";

import top from "./top";
import order from "./order";
import services from "./services"

export default {
	components:{
		"top-com":top,
		"order-com":order,
		"services-com":services,
	}
}
</script>
<style scoped>
.clothes{
 width:100%;
  height:100%;
  position: fixed;
  overflow:scroll;

}
</style>
