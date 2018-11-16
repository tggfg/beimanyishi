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
       <div class="wrapper" ref="wrapper">
        <div class="cloth  content" >
            <div v-for="(item,index) in pic" class="pic" @click="handleCloth()">
           <a href="##">
               <img :src="item.picture" alt="">
           </a>
           <p>{{item.name}}</p>
           <p>{{item.price | price("￥")}}</p>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import  axios from "axios";
import BScroll from "better-scroll";
export default {
created(){
    this.idOne=this.$route.query.idOne;//一级菜单的id
    this.curIndex=this.idOne-1;//一级菜单的下标
    axios({
			methods:"get",
			url:"http://localhost:3000/list"
		}).then((data)=>{
             data.data.map((item)=>{
                if(item.level==1){
                this.navs.push(item);
                }
             })
        })
        // 初始化全部商品
        switch(this.idOne){
            case 1:this.handlePic({id1:1});break;
            case 2:this.handlePic({id1:2});break;
            case 3:this.handlePic({id1:3});break;
            case 4:this.handlePic({id1:4});break;
            case 5:this.handlePic({id1:5});break;
        }       
},
filters:{
        "price":(val,params)=>{
            return params+val;
        }
    },
data(){
   return{
       navs:[],
       curIndex:0
   }
},
 computed:{
        ...Vuex.mapState({
            pic:state=>state.classify.pic
        })
    },
    mounted(){
       this.scroll =  new BScroll(this.$refs.wrapper,{
            click:true,
            pullUpLoad:true
        });
        this.scroll.on("pullingUp",()=>{
            alert(1)
        })
    },
methods:{
    handleId(index,id){
        this.curIndex=index;
        this.handlePic({id1:id})
    },
     handleCloth(){
            alert(1);
    },
    ...Vuex.mapActions({
        handlePic:"classify/handlePic"
    })
}
}
</script>

<style scoped>
.total{
    width:100%;
    height:100%;
    margin-top:.4rem;
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
}
.total>.nav{
    width:100%;
    height: .74rem;
	/* background: yellowgreen; */
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
}
.total>.nav>.active{
    border-bottom: 1px solid #000;
	color: #1c1c1c;
}
.total>.wrapper{ 
    position: absolute;
    z-index: 1;
    top:1.6rem;
    bottom: .98rem;
    width:100%;
    overflow: hidden;
    margin-top: 10px
}
.total>.wrapper>.cloth{ 
    overflow: hidden;
}
.total>.wrapper>.cloth>.pic{
    width: 3.4rem;
    height: 5.2rem;
    float: left;
    margin:0 0 10px 12px;
}
.total>.wrapper>.cloth>.pic>p{
    font-size: 12px;
    color: #5a5a5a;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.total>.wrapper>.cloth>.pic>a>img{
    width: 100%;
    height: 75%;
}
</style>