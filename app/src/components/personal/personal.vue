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
	height: 100%;
	width: 100%;

}
</style>
