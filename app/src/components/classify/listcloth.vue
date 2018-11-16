<template>
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
        this.handlePic({id1:this.id1,id2:this.id2,id3:this.id3})     
    },
    computed:{
        ...Vuex.mapState({
            pic:state=>state.classify.pic
        })
    },
     beforeRouteUpdate(to,from,next){
         this.id1=to.query.typeId_1;
         this.id2=to.query.typeId_2;
         this.id3=to.query.typeId_3;
         this.handlePic({id1:this.id1,id2:this.id2,id3:this.id3})
        next();
    },
   data(){
       return{
           id1:0,
           id2:0,
           id3:0
       }
   },
    mounted(){
       this.scroll =  new BScroll(this.$refs.wrapper,{
            click:true,
            pullUpLoad:true
        });
        this.scroll.on("pullingUp",()=>{
            // alert(1)
        })
    },
    methods:{
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

