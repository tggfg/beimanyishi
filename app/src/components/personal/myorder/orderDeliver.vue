<template>
    <div>
        <order-one></order-one>
         <ul>
      <li>
        <div class="top">
          <p class="top_left">
            <span>
              <img src="static/img/beijing4@2x.png" />
            </span>
            <strong>贝曼衣舍旗舰店</strong>
            <i><img src="static/img/gengduo@2x.png" alt=""/></i>
          </p>
          <p class="top_right">等待买家付款</p>
        </div>
        <div class="center">
          <img class="center_img"  src="static/img/goodsAdd_05.jpg"/>
          <div class="center_right">
            <p>贝曼衣舍冬季韩版复古宽松
              <span>￥428.00</span>
            </p>
            <p>直筒高腰裤...
              <i>×1</i>
            </p>
            <p>咖色：165/M</p>
            <p class="special">公益捐赠0.10元</p>
          </div>
        </div>
        <p class="message">运费险
          <span>确认收货前退货可理赔</span>
          <i>￥0.00×1</i>
        </p>
        <div class="bottom">
          <button class="exit">取消订单</button>
          <button class="otherpay">朋友代付</button>
          <button class="payment">付款</button>
        </div>
      </li>
    </ul>
    </div>
</template>
<script>
import orderOne from "./orderOne";
export default {
    name:"orderDeliver",
    components:{
        "order-one":orderOne
    }
}
</script>
<style scoped>
.head {
  background: #f4f4f4;
}
ul {
  margin-top: 0.2rem;
  background: #fff;
}
li {
  width: 100%;
  padding: 2.1% 3.7% 1.3% 4.3%;
}
li .top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 2.7%;
}
.top_left {
  position: relative;
}
.top_left span {
  width: 4.8%;
  height: 2.7%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
.top_left span img {
  width: 0.36rem;
}
.top_left strong{
    margin-left:.52rem;
    font-family: PingFangSC-Light;
    font-size: 12px;
    color: #1E1E1E;
    font-weight:normal;
}
.top_left i{
    width:.08rem;
    display:block;
    position:absolute;
    left:2.32rem;
    height:.192rem;
    top:.1rem;
}
.top_left i img{
    width:.08rem;
    height:.192rem;
}
.center{
    display:flex;
    justify-content:space-between;
}
.center .center_img{
    margin-top:.12rem;
    width:2rem;
    height:2.16rem;
    border:none;

}
.center_right{
    margin-top:.12rem;
    font-size:14px;
    font-family: PingFangSC-Light;
    font-size: 12px;
    color: #1E1E1E;
}
</style>
