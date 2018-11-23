<template>
    <div class="services">
        <div class="services-top">
            <p>我的服务</p>
        </div>
        <div class="services-bot">
            <ul>
                <li>
                    <img src="static/img/youhun@2x.png" >
                    <p>优惠券</p>
                </li>
                <li @click="handleCollGo()">
                    <img src="static/img/shoucang@2x.png" >
                    <p>收藏</p>
                </li>
                <li>
                    <img src="static/img/liuyan@2x.png" >
                    <p>系统反馈</p>
                </li>
                <li>
                    <img src="static/img/dingwei@2x.png" >
                    <p>地址</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="static/img/pinpai@2x.png" >
                    <p>品牌日志</p>
                </li>
                <li>
                    <img src="static/img/liuyan@2x.png" >
                    <p>留言客服</p>
                </li>
                <li>
                    <img src="static/img/shezhi@2x.png" >
                    <p>设置</p>
                </li>
                <li>
                   
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Vuex from "vuex";
export default {
  
methods:{
    handleCollGo(){
          this.$router.push("/second/collection")
      }
  },
}
</script>

<style scoped>
.services{
    width:100%;
    height:2.68rem ;
    background: #fff;
}
.services-top{
    width:100%;
    height:.98rem;
    border-bottom: 0.5px solid #F1F1F1 ;
    padding-top:.21rem;
    font-size: 14px;
}
.services-top > p:nth-child(1){
    float: left;
    color:#000;
    font-weight: 600;
    margin-left: .34rem;
    margin-right: .34rem;
}
.services-top > p:nth-child(2){
    float: left;
    color:#9B9B9B;
    font-weight: 600;
    margin-left:3.45rem;
}
.services-top > i{
    color:#999999;
    font-weight: 900;
}
.services-bot>ul{
    display: flex;
    justify-content:space-around;
    align-items: flex-start;
    align-content: center;
    padding: 0 3px;
}
.services-bot>ul:nth-child(1){
    margin-bottom:.41rem;
}
.services-bot>ul>li{
    display: flex;
    flex-direction:column;
    width: 25%;
    margin-top: .36rem;
    align-items: center;
}
.services-bot>ul>li>img{
    width: 27px;
    height:27px;
    
}
.services-bot>ul>li>p{
    margin-top: .36rem;
}
</style>

