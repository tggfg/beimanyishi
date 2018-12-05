<template>
    <div class="order">
        <div class="order-top">
            <p>我的订单</p>
            <p>查看全部订单</p>
            <i class =" iconfont icon-arrow-right-copy-copy-copy"></i>
        </div>
        <div class="order-bot">
            <ul>
                <router-link v-for="list in orderLists" :key="list.type" tag = "li" :to="list.path">
                    <img :src="list.img">
                    <p>{{list.title}}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            orderLists:[
                {type:1,title:"待付款",img:"static/img/qianbao@2x.png",path:"./myorder/orderPayment"},
                {type:2,title:"待发货",img:"static/img/fahuo@2x.png",path:"./myorder/orderDeliver"},
                {type:3,title:"待收货",img:"static/img/yunshu@2x.png",path:"./myorder/orderReceive"},
                {type:4,title:"待评价",img:"static/img/pinglun@2x.png",path:"./myorder/orderEvalute"},
                {type:5,title:"退款/退货",img:"static/img/tuikuan@2x.png",path:"./myorder/orderReturn"}
            ]
        }
    }
}
</script>

<style scoped>
.order{
    width:100%;
    height:2.68rem ;
    background: #fff;
}
.order-top{
    width:100%;
    height:.98rem;
    border-bottom: 0.5px solid #F1F1F1 ;
    padding-top:.21rem;
    font-size: 14px;
}
.order-top > p:nth-child(1){
    float: left;
    color:#000;
    font-weight: 600;
    margin-left: .34rem;
    margin-right: .34rem;
}
.order-top > p:nth-child(2){
    float: left;
    color:#9B9B9B;
    font-weight: 600;
    margin-left:3.45rem;
}
.order-top > i{
    color:#999999;
    font-weight: 900;
}
.order-bot>ul{
   display: flex;
   justify-content: space-around;
}
.order-bot>ul>li{
    display: flex;
    flex-direction:column;
    margin-top: .36rem;
    align-items: center;
}
.order-bot>ul>li>img{
    width: 27px;
    height:22px;
}
.order-bot>ul>li>p{
    margin-top: .36rem;
}
</style>
