<template>
<div class="cont">
	<ul class="content">
	  <li><img src="../../../static/icon/gengduo3@2x.png">累计评价</li>
	  <li><img src="../../../static/icon/gengduo3@2x.png">满￥99顺丰包邮</li>
	  <li><img src="../../../static/icon/gengduo3@2x.png">退货补贴</li>

	</ul>
</div>
</template>
<script>
export default{

}
</script>
<style>
.cont .content{
	width:100%;
	height:0.34rem;
	display:flex;
	justify-content:space-between ;
	padding:0rem 0.32rem;
	/* padding-top:0.24rem; */
	line-height: 0.44rem;
	margin-top:10px;

}
.cont>.content>li{
   /*  width:1.6rem; */
	  height:0.5rem;
	 /* background: red url(../../../static/icon/gengduo3@2x.png) no-repeat; */
	  background-size:0.24rem  0.24rem;
	 /* text-align: center; */
	/* padding-left:0.24rem; */
}
.cont>.content>li>img{
	width:0.24rem;
	height:0.24rem;
	line-height: 0.24rem;
	margin-top:0.1rem;
	float:left;
}
</style>
