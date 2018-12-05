<template>
    <div class="order">
        <div class="header">
            <img src="static/img/fanhui@2x.png" alt="">
            我的订单
        </div>
        <div class="section">
            <figure v-for="orderItem in orderNavs" :key="orderItem.type" tag="figure" @click="handleChange(orderItem.type)">
                <figcaption>
                    <span>{{orderItem.title}}</span>
                    <i>{{orderItem.num}}</i>
                </figcaption>
            </figure>
        </div>
    </div>
</template>
<script>
export default {
  name: "orderOne",
  data() {
    return {
      orderNavs: [
        { title: "待付款", num: 1, type: 1},
        { title: "待发货", num: 1, type: 2},
        { title: "待收货", num: 1, type: 3},
        { title: "待评价", num: 1, type: 4},
        { title: "待退货/退款", num: 1, type: 5 }
      ]
    }
  },
  methods:{
      handleChange(index){
          switch (index){
              case 1:
                this.$router.push("./orderPayment");
                break;
              case 2:
               this.$router.push("./orderDeliver");
               break;
              case 3:
                this.$router.push("./orderReceive");
                break;
              case 4:
                this.$router.push("./orderEvalute");
                break;
              case 5:
                this.$router.push("./orderReturn");
          }
      }
  }
};
</script>
<style scoped>
.order{
    background: #F4F4F4;
    width:100%;
    height:100%;
}
.header {
    background:#fff;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #1e1e1e;
  position: relative;
  height:.5rem;
  line-height: .5rem;
  margin-top: .6rem;
  text-align: center;
}
.header img {
  position: absolute;
  left: .36rem;
  top: .1rem;
  width: .16rem;
  height: .3rem;
  display: block;
}
.section {
    background:#fff;
  width: 100%;
  height:1.24rem;
  display: flex;
  justify-content: space-between;
  padding: 0.48rem 0.34rem 0;
}
.section figure {
  height: 0.76rem;
  margin: 0;
 
}
.section figure figcaption {
  display: flex;
  flex-direction: column;
}
figcaption span,
figcaption i {
  display: block;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  font-style: normal;
  color: #384355;
}
figcaption .active{
    border-bottom: 2px solid #384355;
}
.goods{
    width:100%;
    height:100%;
    display:flex;
    flex:1;
    overflow:auto;
}
</style>


