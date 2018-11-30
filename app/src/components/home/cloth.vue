<template>
<div class="cloth">
<div class="wrapper"  ref="clothWrapper">
	<div class="yifu  content" >
		<p class="bigtu">
			<img :src="bigPic">
		</p>
		<div class="smalltu">
			<ul>
				<li v-for="(item,index) in small">
					<img :src="item.picture">
					<p>{{item.name}}</p>
				</li>
				<li class="both">
					<img src="../../../static/icon/fanhui2@2x.png">
					<p>全部商品</p>
				</li>
				<li class="both">
					<img src="../../../static/icon/fenlei@2x.png">
					<p>更多分类</p>
				</li>
			</ul>
		</div>
		<!-- 二级图片 -->
		<div class="picturetwo">
			<!-- 标题 -->
			<div class="header">
				上新爆款
			</div>
			<!-- 商品列表 -->
			<div class="fz">
			  <ul class="fuzhuang">
			    <li v-for="(item,index) in sptu">
				  <img :src="item.picture">
				  <p class="js">{{item.name}}</p>
				  <p class="jieshao">
				  <span>${{item.price}}</span>
				  <!-- <span class="old">${{item.oldprice}}</span> -->
				  </p>
				</li>	
			  </ul>
			</div>
		</div>
	</div>
</div>
</div>
</template>
<script>
	import Vuex from "vuex";
	import axios from "axios";
	import BScroll from 'better-scroll';
	export default {
		data(){
			return{
				pageNum: 1,
				index:0,
				bigPic:"",
				navs:[],
				small:[],
				id:1,
				data:[]
			}
		},
		computed: {
			...Vuex.mapState({
				xiaotu: state => state.home.xiaotu,
				sptu:state=>state.home.sptu,
			})
		},
		methods: {
			...Vuex.mapActions({
				handleSmall: "home/handleSmall",
				handleTwopicture:"home/handleTwopicture",
				handleRoute:"home/handleRoute",
				
			}),
			...Vuex.mapMutations({
				handleRemove:"home/handleRemove"
			})

		},
		created() {
			this.index=this.$route.query.index;
			this.id =this.$route.query.id;
			axios({
			methods:"get",
			url:"http://www.bmyss.xyz:8080/bmys/goods/getAllGoodsType"
			}).then((data)=>{
				this.data=data.data.data;
				// console.log(data.data);
				data.data.data.map((item)=>{
					if(item.level==1){
						this.navs.push(item);
					}
					if(item.level==3&&item.parentId==2001){
						if(this.small.length<8){
							this.small.push(item);
						}
					}
				})
				// console.log(this.small)
			this.bigPic=this.navs[this.index].picture;
		
			})
			this.handleSmall();
			this.handleTwopicture({pageNum:this.pageNum,id:this.id});
		},
		beforeRouteUpdate(to,from,next){
			this.small=[];
			
			this.pageNum=1;
			this.index=to.query.index;
			this.id=to.query.id;
			this.bigPic=this.navs[this.index].picture;
			
			this.data.map((item)=>{
				if(this.id==1001&&item.level==3&&item.parentId==2001){
					if(this.small.length<8 ){
						this.small.push(item);
					}
				}else if(this.id==1002&&item.level==3&&(item.parentId==2002||item.parentId==2006)){
					if(this.small.length<8){
						this.small.push(item);
					}
				}else if(this.id==1003&&item.level==3&&(item.parentId==2003||item.parentId==2007)){
					if(this.small.length<8){
						this.small.push(item);
					}
				}else if(this.id==1004&&item.level==3&&(item.parentId==2004||item.parentId==2008)){
					if(this.small.length<8){
						this.small.push(item);
					}
				}else if(this.id==1005&&item.level==3&&(item.parentId==2005||item.parentId==2009)){
					if(this.small.length<8){
						this.small.push(item);
					}
				}
			})
			this.handleRoute({pageNum:this.pageNum,id:this.id});
			this.handleSmall();
		  this.handleTwopicture({pageNum:this.pageNum,id:this.id})
			next();
			this.handleRemove();

		},
		mounted() {
			this.scroll = new BScroll(this.$refs.clothWrapper, {
				click: true,
				pullUpLoad: true,
				
			});
			
			this.scroll.on("pullingUp", () => {
				this.handleTwopicture({pageNum:++this.pageNum,id:this.id});	
			})
			
		},
	updated () {
		//重新计算高度
		this.scroll.refresh();
		//当数据加载完毕以后通知better-scroll
		this.scroll.finishPullUp();
	},
	}
</script>
<style scoped>
	.yifu {
		width: 100%;
		/* height: 100%; */
		/* padding-bottom: .98rem; */
		overflow: auto;
		position:absolute;
		top:0rem;
	}

	.bigtu {
		width: 100%;
	}

	.yifu .bigtu img {
		width: 100%;
		height: 3.6rem;
	}

	.yifu>.bigtu>p {
		background: yellow;
	}

	.smalltu ul {
		width: 100%;
	}

	.smalltu ul {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		/* background:#ccc; */
		margin-top: 20px;
	}

	.smalltu li {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0 6px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	.smalltu ul li p {
		text-align: center;
	}

	.yifu .smalltu img {
		width: 0.75rem;
		height: 0.75rem;
	}

	.yifu .both img {
		width: 0.5rem;
		height: 0.5rem;
	}

	.yifu .both {
		text-align: center;
		padding-top: 12px;
	}

	.picturetwo .header {
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		background: #fff;
		text-align: center;
		font-size: 14px;
		font-weight: 900;
		border-top: 0.4px solid gray;
		border-bottom: 0.4px solid gray;
	}
	.fz{
	 width:100%;
	 height:100%;

	}
	.fz .fuzhuang{
	width:100%;
	display:flex; 
	justify-content: space-between;
	flex-wrap: wrap;
	padding:0 13px;
	font-size:16px;
    }
   .fuzhuang ul li{
	width:50%;
   }
	.fuzhuang img{
	width:3.4rem;
	height:4.6rem;
	}
	.fz .fuzhuang .old{
	 text-decoration: line-through;
	}
	.fz .fuzhuang .jieshao{
	width:100%;
	height:1rem;
	margin-top:5px;
	}
	.fz .fuzhuang  .js{
	margin-top:5px;	
	}
    .jieshao span:nth-child(1){
	  font-size:20px;
	}

.cloth  .wrapper {
	       position:absolute;
			top: 2rem;
			bottom: .98rem;
			width: 100%;
			overflow: hidden;
			
 }
</style>
