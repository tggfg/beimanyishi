<template>
<div class="xianshi">
<div class="back"><img src="../../../static/icon/fanhui@2x.png" @click="handleXianshi()"></div>
<div>限时特惠</div>
<div class="gouwuche"><img src="../../../static/icon/gouwuche@2x.png"></div>
</div>
</template>
<script>
export default{
methods:{
	handleXianshi(){
		this.$router.push({name:"index"})
	}
}
}	
</script>
<style>
.xianshi{
  display:flex;
  justify-content: space-between;
  width:100%;
/*  background:  green; */
  height:0.98rem;
  align-items: center;
  padding:0 16px;
  font-size:18px;
  font-weight: 900;
}	
.xianshi .back img{
	width:0.3rem;
	height:0.4rem;
}
.xianshi .gouwuche img{
	width:0.6rem;
	height:0.5rem;
}
::-webkit-scrollbar {
display: none;/*隐藏滚轮*/
}
</style>