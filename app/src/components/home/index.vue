<template>
<div>
<div class="idx">
	<goodslist-com></goodslist-com>
</div>
</div>
</template>
<script>
import goodslist from "./goodslist";
export default{
components:{
  "goodslist-com":goodslist,
  }
}
</script>
<style>
.idx{
	width:100%;
    height:100%;
}
</style>
