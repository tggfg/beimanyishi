<template>
<div class="se">
	<div class="sch">
	<p @click="handleSearch()"><img src="../../../static/img/images/left.png"></p>
	<p><input type="text" placeholder="请输入搜索关键字"  v-model="val" @input="handleFind({val,pageNum})" @keydown.enter="handleEnter()"></p>
	<p>消息</p>
	</div>
	<div class="hot">热门搜索</div>
	<div class="tit">
    <p>亲子装</p>
	  <p>印花T桖</p>
	  <p>新尺码XXL</p>
	  <p>儿童装</p>
	  <p>情侣装</p>
	  <p>本周排行</p>
	  <p>情侣装</p>
	  <p>休闲装</p>
    </div>
</div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
export default{

 data(){
	return{
	  val:"女装",
		pageNum:1
	}
 },
 computed:{
	...Vuex.mapState({
		showBottom:state=>state.home.showBottom,

	}),


},
methods:{
	...Vuex.mapActions({
		handleFind:"home/handleFind"
	}),
	handleSearch(){

	this.$router.push("/home/index");

	},
	handleEnter(){
  	this.$router.push({name:"find",query:{val:this.val,pageNum:this.pageNum}});

	}
}
}
</script>
<style>
.se{
	width:100%;
    height:100%;
	position:fixed;
	z-index:1000;
	background: #fff;
	padding-top: 0.4rem;

}
.se p:nth-child(1) img{
	width:0.2rem;
	height:0.4rem;
	margin-top:0.24rem;
}
.se p:nth-child(2) input{
	width:5.5rem;
	height:0.56rem;
	background:blue;
	background: #F4F4F4 url("../../../static/icon/sousuo@2x.png") no-repeat 0.1rem 0.12rem;
	background-size:0.24rem 0.24rem;
    border-radius: 6px;
	outline:none;
	border:0;
	padding-left:20px;
}
.se .sch p:nth-child(3){
	font-size:16px;
}
.sch{
	/* margin-top:0.4rem; */
	width:100%;
	height:0.88rem;
    line-height:0.88rem;

	/* background:red; */
	padding:0 17px;
	padding-bottom:1rem;
	display:flex;
	justify-content: space-between;
}
.hot{
	width:100%;
	height:1rem;
	line-height:1rem;
	/* background:pink; */
	font-size:16px;
	padding-left:16px;
	color:#ccc;
	border-top:1px solid gray;
}
.tit{
	width:70%;
	height:3rem;
    margin-left:40px;
	/* background:blue; */
	padding:0 0rem;
	font-size:14px;
	display:flex;
	flex-wrap:wrap;
	align-items:flex-end;
	justify-content:space-between;
	margin-top:27px;
}
.tit p{
	width:1.4rem;
	height:0.5rem;
	line-height:0.5rem;
	/* background:#ccc; */
	background: #F4F4F4;
     border-radius: 6px;
	 text-align:center;
	 /* margin-right:32px; */

}
</style>
