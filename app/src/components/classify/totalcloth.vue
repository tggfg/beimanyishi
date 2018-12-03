<template>
    <div class="wrapper" ref="wrapper">
        <div class="cloth  content" >
            <div v-for="(item,index) in pic" class="pic" @click="handleCloth(item.id)">
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
import  axios from "axios";
import BScroll from "better-scroll";
export default {
    created(){
        this.id=this.$route.query.id;
        // console.log(this.id)
        switch(this.id){
            case 1001:this.handlePic({id1:1001,pageNum:1});break;
            case 1002:this.handlePic({id1:1002,pageNum:1});break;
            case 1003:this.handlePic({id1:1003,pageNum:1});break;
            case 1004:this.handlePic({id1:1004,pageNum:1});break;
            case 1005:this.handlePic({id1:1005,pageNum:1});break;
        }
        this.handleRoute({id1:this.id,pageNum:1})
    },
    data(){
        return{
            id:0,
            pageNum:1
        }
    },
    filters:{
        "price":(val,params)=>{
            return params+val;
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
            // alert(1)
        this.handlePic({id1:this.id,pageNum:++this.pageNum})
        })
    },
    beforeRouteUpdate(to,from,next){
         this.id=to.query.id;
         this.handleRoute({id1:this.id,pageNum:1})
        next();
    },
    methods:{
    handleId(index,id){
        this.curIndex=index;
        this.handlePic({id1:id})
    },
    ...Vuex.mapActions({
        handlePic:"classify/handlePic",
        handleRoute:"classify/handleRoute"
    }),
    handleCloth(){
        // 给购物车传商品id
        // this.$rouer.push({name:"",query:{goodId:id}});
}
}
}
</script>
<style scoped>
.wrapper{
    position: absolute;
    z-index: 1;
    top:1.6rem;
    bottom: .98rem;
    width:100%;
    overflow: hidden;
}
.cloth{
    overflow: hidden;
}
.cloth>.pic{
    width: 3.4rem;
    height: 5.2rem;
    float: left;
    margin:0 0 10px 12px;
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
