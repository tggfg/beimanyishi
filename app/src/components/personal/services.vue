<template>
    <div class="services">
        <div class="services-top">
            <p>我的服务</p>
        </div>
        <div class="services-bot">
            <ul>
                <li>
                  <router-link to="youhui" class="yhj">
                    <img src="static/img/youhun@2x.png" >
                    <p>优惠券</p>
                    </router-link>
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
                  <router-link to="clothesin" class="rz">
                    <img src="static/img/pinpai@2x.png" >
                    <p>品牌日志</p>
                    </router-link>
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
  methods: {
    handleCollGo() {
      this.$router.push("/second/collection");
    }
  }
};
</script>

<style scoped>
.services {
  width: 100%;
  height: 2.68rem;
  background: #fff;
}
.services-top {
  width: 100%;
  height: 0.98rem;
  border-bottom: 0.5px solid #f1f1f1;
  padding-top: 0.21rem;
  font-size: 14px;
}
.services-top > p:nth-child(1) {
  float: left;
  color: #000;
  font-weight: 600;
  margin-left: 0.34rem;
  margin-right: 0.34rem;
}
.services-top > p:nth-child(2) {
  float: left;
  color: #9b9b9b;
  font-weight: 600;
  margin-left: 3.45rem;
}
.services-top > i {
  color: #999999;
  font-weight: 900;
}
.services-bot > ul {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
  padding: 0 3px;
}
.services-bot > ul:nth-child(1) {
  margin-bottom: 0.41rem;
}
.services-bot > ul > li {
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-top: 0.36rem;
  align-items: center;
}
.services-bot > ul > li > img {
  width: 27px;
  height: 27px;
}
.services-bot > ul > li > p {
  margin-top: 0.36rem;
}
.yhj> img {
  width: 27px;
  height: 27px;
  margin-top:0.05rem;
  margin-bottom: 0.36rem;
  margin-left: 0.15rem;
}

.yhj> p {
  padding-left: 0.03rem;
}
.rz> img {
  width: 27px;
  height: 27px;

  margin-bottom: 0.36rem;
  margin-left: 0.2rem;
}

.rz> p {
  padding-left: 0.03rem;
}
</style>

