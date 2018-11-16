<template>
    <div class="women">
        <div class="womem_left">
            <p @click="handleQuan(parentId)">全部商品</p>
            <p @click="handleBao()">商品爆款</p>
            <ul>
                <li v-for="(item,index) in navs" :class="curIndex==index?'active':''"
                @click="handleClick(index,item.id)">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="women_right">
            <div class="bigImg">
                <img :src="bigsrc" alt="">
            </div>
            <div class="xia">
                <div v-for="(item,index) in small" class="small" @click="handlePic(parentId, parentId2,item.id,index)">
                   <img :src="item.picture" alt="">
                   <span>{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
import axios from "axios";
import Vuex from "vuex";
export default {
    created(){
        this.parentId=this.$route.query.val;
        axios({
			methods:"get",
			url:"http://localhost:3000/list"
		}).then((data)=>{
            this.data=data.data;
             this.data.map((item)=>{
                if(item.parentId==this.parentId&&item.level==2){
                this.navs.push(item);
                }
                //第三级菜单的初始化
                  if(item.parentId==6&&item.level==3){
                        this.small.push(item);
                    }                
            }) 
        })        
    },
    data(){
        return{
            curIndex:0,
            bigsrc:"static/listimg/topw.png",//二级菜单的大图
            navs:[],
            small:[],
            parentId:1,
            data:[],
            parentId2:6
        }
    },
    methods:{
        handleClick(index,id){
            this.curIndex=index;
            this.bigsrc=this.navs[index].picture;
            this.parentId2=id;
            this.small=[];
            this.data.map((item)=>{
               if(item.parentId==id&&item.level==3){
                   this.small.push(item);
               }              
            })
        },
    handleQuan(id){
            //全部商品的路由跳转，将一级菜单的id传过去
        this.$router.push({name:"total",query:{idOne:id}});
        },
    handleBao(){
        console.log("商品爆款");

    },
    handlePic(id1,id2,id3,index){
        //路由跳转到三级菜单的具体页面
        this.$router.push({name:"listdetail",
        query:{level1:id1,level2:id2,level3:id3,index}})
    }
    },
   beforeRouteUpdate(to,from,next){
      this.parentId=to.query.val;
      //三级菜单初始化，需后期修改
      switch(this.parentId){
          case 1: this.parentId2=6;break;
          case 2:this.parentId2=7;break
      }    
      this.curIndex=0;
      this.navs=[];
      this.small=[];
       this.data.map((item)=>{
        if(item.parentId==this.parentId&&item.level==2){
            this.navs.push(item);
        }
        //路由更新后根据第一级菜单和第二级菜单进行初始化第三级菜单
         switch(this.parentId){
            case 1: if(item.parentId==6){
                        this.small.push(item);
                        this.bigsrc="static/listimg/topw.png"
                    };break;
            case 2: if(item.parentId==7){
                        this.small.push(item);
                        this.bigsrc="static/listimg/manshirt.png";
                    };break;    
            }
        })
            next()
    }

}
</script>
<style>
.women{
    margin-top: .35rem;
    display: flex;
}
.women>.womem_left{
    /* float: left; */
    width:6rem;
}
.women>.womem_left>p:nth-child(2){
  margin-bottom: .4rem;
}
.women>.womem_left>ul>li,.women>.womem_left>p{
    font-size: 14px;
    color: #5a5a5a;
    height: .65rem;
    line-height: .65rem;
    padding: 0 .19rem;
}
.women>.womem_left>ul>.active{
    border-left:2px solid #000;
    color: #1c1c1c;
}
.women_right{
    margin-right: .4rem;
    margin-left: 10px;
}
.women_right>.bigImg{
    width: 5.0rem;

}
.women_right>.bigImg>img{
    width: 100%;
}
.women_right>.xia{
    margin-top: .3rem;
    display: flex;
    flex-wrap: wrap;
     justify-content: space-between; 
}
.women_right>.xia>.small{
    /* float: left; */
    width: 1.1rem;
    height: 1.1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-left: 5px
}
.women_right>.xia>.small>img{
  width: 100%;
 
}
.women_right>.xia>.small{
    margin-right: 20px;
}
.women_right>.xia>.small>span{
    font-size: 10px;
    margin-top: 10px ;
    text-align: center
}
</style>

