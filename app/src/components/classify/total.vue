<template>
    <div class="total">
        <div class="toper">
           <router-link :to="{name:'classify'}"> 
               <img src="../../../static/listimg/left.png"/>
            </router-link>
            <span>全部商品</span>
        </div>
        <ul class="nav">
			<li v-for="(item,index) in navs" :class="curIndex==index?'active':''" 
			@click="handleId(index,item.id)">
			{{item.name}}
			</li>
		</ul>
        <router-view></router-view>
    </div>
</template>
<script>
import Vuex from "vuex";
import  axios from "axios";
export default {
created(){
    this.id1=this.$route.query.idOne;//一级菜单的id
    this.curIndex=this.$route.query.index;//一级菜单的下标
    axios({
			methods:"get",
			url:"http://www.bmyss.xyz:8080/bmys/goods/getAllGoodsType"
		}).then((data)=>{
             data.data.data.map((item)=>{
                if(item.level==1){
                this.navs.push(item);
                }
             })
        })
        this.$router.push({name:"totalcloth",query:{id:this.id1}})      
},
data(){
   return{
       navs:[],
       curIndex:0,
       id1:1001
   }
},
methods:{
    handleId(index,id){
        this.curIndex = index;
        this.$router.push({name:"totalcloth",query:{id:id}})
    }
}

}
</script>

<style scoped>
.total{
    width:100%;
    height:100%;
    position:fixed;
    z-index: 1000;
    background: #fff;
    top:.4rem;
}
.total>.toper{
    padding-left: 10px;
    display: flex;
}
.total>.toper>a>img{
    width:.4rem;
    height:.4rem;
}
.total>.toper>span{
    font-size:16px;
    font-weight: 900;
    margin-left: 10px;
    font-family: PingFangSC-Regular;
}
.total>.nav{
    width:100%;
    height: .74rem;
	display: flex;
	justify-content: space-around;
	line-height: .74rem;
    margin-top: 10px;
    border-bottom: 1px solid #f1f1f1
}
.total>.nav>li{
    width: 1.5rem;
	height: 100%;
    text-align: center;
    font-size:16px;
    color: #5a5a5a;
    font-family: PingFangSC-Regular;
}
.total>.nav>.active{
    border-bottom: 1px solid #000;
	color: #1c1c1c;
}
</style>