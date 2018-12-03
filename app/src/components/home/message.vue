<template>
<div class="msg">
    <div class="head">
        <router-link :to="{name:'home'}"> 
               <img src="../../../static/icon/left.png"/>
        </router-link>
       <p>消息中心</p>
    </div>
    <div class="cont">
        <dl>
            <dt>
                <img src="../../../static/icon/wuliu@2x.png" alt="">
            </dt>
            <dd>
                <p>物流助手</p>
                <p>顺丰快递45583564576,请您留意包裹dddddddddddd</p>
            </dd>
            <div class="right">
                <img src="../../../static/icon/gengduo2@2x.png" alt="">
            </div>
        </dl>
        <dl>
            <dt>
                <img src="../../../static/icon/youhui@2x.png" alt="">
            </dt>
            <dd>
                <p>优惠活动</p>
                <p>轻型羽绒.新体验</p>
            </dd>
            <div class="right">
                <img src="../../../static/icon/gengduo2@2x.png" alt="">
            </div>
        </dl>
        <dl>
            <dt>
                <img src="../../../static/icon/tongzhi@2x.png" alt="">
            </dt>
            <dd>
                <p>通知消息</p>
                <p>你的订单已经下单成功</p>
            </dd>
            <div class="right">
                <img src="../../../static/icon/gengduo2@2x.png" alt="">
            </div>
        </dl>
        <dl>
            <dt>
                <img src="../../../static/icon/liuyan2@2x.png" alt="">
            </dt>
            <dd>
                <p>在线留言</p>
                <p>您提交的问题我们将及时解决</p>
            </dd>
            <div class="right">
                <img src="../../../static/icon/gengduo2@2x.png" alt="">
            </div>
        </dl>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.msg{
    position: fixed;
    z-index: 1000;
    width:100%;
    height: 100%;
    background: #fff;
    /* margin-top: .4rem; */
    margin-top:.6rem;
    /* padding-left:.15rem; */
    font-family: PingFangSC-Regular;
}
.head>a>img{
    position: absolute;
    width: 12px;
    height: 24px;
    left:.3rem;
}
.head>p{
    text-align: center;
    font-size:14px;
}
.msg>.cont{
    margin-top: 40px;
    width: 100%;
    height: 100%;
    /* background: green; */
}
.msg>.cont>dl{
    /* background: #adff2f; */
    position: relative;
    padding:.3rem 0 0 .2rem;
    width: 100%;
    height: 1.6rem;
    margin :.5rem auto;
    display: flex;
    border-bottom:1px solid #e5e5e5;
}
.msg>.cont>dl>dt>img{
    width:1.04rem;
    height:1.04rem;
}
.msg>.cont>dl>dd{
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    margin-left: 15px;
}
.msg>.cont>dl>dd p{
    width:250px;
}
.msg>.cont>dl>dd p:nth-child(1){
    font-size: 16px;
    color:#1e1e1e;
}
.msg>.cont>dl>dd p:nth-child(2){
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color:#5a5a5a;
}
.msg>.cont>dl>.right{
    position: absolute;
    right: .3rem;
}
.msg>.cont>dl>.right>img{
    width:.18rem;
    height:.34rem;
}
</style>
