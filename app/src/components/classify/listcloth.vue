<template>
<div class="wrapper" ref="wrapper">
    <div class="cloth  content" >
        <div v-for="(item,index) in pic" class="pic" @click="handleCloth(item.id)" :key="index">
           <a href="##">
               <img :src="item.picture" alt="">
           </a>
           <p>{{item.name}}</p>
           <p>{{item.price | price("￥")}}</p>
        </div>
    </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
import axios from "axios";
export default {
    filters:{
        "price":(val,params)=>{
            return params+val;
        }
    },
    created(){
        this.id1=this.$route.query.typeId_1;
        this.id2=this.$route.query.typeId_2;
        this.id3=this.$route.query.typeId_3;
        // console.log(this.$route.query.typeId_1);
        this.handleRoute({id1:this.id1,id2:this.id2,id3:this.id3,pageNum:1})
    },
    computed:{
        ...Vuex.mapState({
            pic:state=>state.classify.pic
        })
    },
   data(){
       return{
           id1:0,
           id2:0,
           id3:0,
           pageNum:1
       }
   },
    mounted(){
       this.scroll =  new BScroll(this.$refs.wrapper,{
            click:true,
            pullUpLoad:true
        });
        this.scroll.on("pullingUp",()=>{

        this.handlePic({id1:this.id1,id2:this.id2,id3:this.id3,pageNum:++this.pageNum})
        })
    },
     beforeRouteUpdate(to,from,next){
         this.id1=to.query.typeId_1;
         this.id2=to.query.typeId_2;
         this.id3=to.query.typeId_3;
         this.handleRoute({id1:this.id1,id2:this.id2,id3:this.id3,pageNum:1})
        next();
    },
    methods:{
        handleCloth(id){
            // 给购物车传商品id
            // this.$rouer.push({name:"",query:{goodId:id}});
        },
        ...Vuex.mapActions({
            handlePic:"classify/handlePic",
            handleRoute:"classify/handleRoute"
        })
    },
    updated(){
        this.scroll.refresh();
        this.scroll.finishPullUp();
    }
}
</script>

<style scoped>
.wrapper{
    position: absolute;
    z-index: 1000;
    top:2rem;
    bottom: .98rem;
    width:100%;
    height:100%;
    overflow: hidden;
    background: #fff;
}
.cloth{
    overflow: hidden;
}
.cloth>.pic{
    width: 3.4rem;
    height: 5.2rem;
    float: left;
    margin:0 0 20px 12px;
}
.cloth>.pic>p{
    font-size: 12px;
    color: #5a5a5a;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cloth>.pic>a>img{
    width: 100%;
    height: 75%;
}
</style>

