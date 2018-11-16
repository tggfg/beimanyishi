<template>
    <div class="list">
        <div class="top">
           <router-link :to="{name:'classify',query:{id:level1}}"> 
               <img src="../../../static/listimg/left.png"/>
            </router-link>
            <span>{{name}}</span>
        </div>
            <ul class="nav">
                <li v-for="(item,index) in navs" :class="curIndex==index?'active':''"
                 @click="handleActive(index,item.id)">
                    {{item.name}}
                </li>               
            </ul> 
            <router-view></router-view>
    </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
export default {
    created(){
        //接收路由传的值
        this.level1=this.$route.query.level1;//一级菜单id
        this.level2=this.$route.query.level2;//二级菜单id
        this.level3=this.$route.query.level3;//三级菜单id
        this.curIndex=this.$route.query.index; //三级菜单下标 
        axios({
			methods:"get",
			url:"http://localhost:3000/list"
        }).then((data)=>{
            this.navs=[]
            data.data.map((item)=>{
                if(item.id==this.level2){
                     this.name=item.name;            
                }
                if(item.parentId==this.level2){
                    this.navs.push(item);
                }
            })
        })
        this.$router.push({name:"listcloth",
        query:{
            "typeId_1":this.level1,
            "typeId_2":this.level2,
            "typeId_3":this.level3
            }
        })
    },
    data(){
        return{
            curIndex:0,
            level1:"",
            level2:"",
            level3:"",
            name:"",
            navs:[]
        }
    },
    methods:{
        handleActive(index,id){
            this.curIndex=index;
            this.level3=id;
            this.$router.push({name:"listcloth",
        query:{
            "typeId_1":this.level1,
            "typeId_2":this.level2,
            "typeId_3":this.level3
            }
        })
        }
    }
}
</script>
<style>
.list{
width: 100%;
 background: #fff;
 z-index: 1000;
}
.top{
    position: fixed;
    margin:.4rem 0 0 .5rem;
    display: flex;
}
.top>a>img{
    width:.4rem;
    height:.4rem;
}
.top>span{
    font-size:16px;
    font-weight: 900;
    margin-left: 10px;
}
.list>.nav{
    padding-top: 50px;
    padding-left: 10px;
    min-width: 610px;
    /* display: flex; */
    overflow-x: auto;
    border-bottom: 1px solid #f1f1f1
}
.list>.nav>li{
    float: left;
    font-size: 14px;
    margin-right: 15px;
    padding-bottom: 10px;
}
.list>.nav>.active{
    border-bottom: 2px solid#4e311f;
}
</style>
