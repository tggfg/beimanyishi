<template>
  <div class="list">
    <div class="top">
      <div  class="back" @click="handleBack()">
        <img src="../../../static/listimg/left.png">
      </div>
      <span>{{name}}</span>
    </div>

    <div class="swiper-container nav" ref="nav">
      <div class="swiper-wrapper">
       <div
        v-for="(item,index) in navs"
        :class="curIndex==index?'active swiper-slide nav-item':'swiper-slide nav-item'"
        @click="handleActive(index,item.id)"
      >{{item.name}}</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
import "../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  created() {
    //接收路由传的值
    this.level1 = this.$route.query.level1; //一级菜单id
    this.level2 = this.$route.query.level2; //二级菜单id
    this.level3 = this.$route.query.level3; //三级菜单id
    this.curIndex = this.$route.query.index; //三级菜单下标
    axios({
      methods: "get",
      url: "/bmys/goods/getAllGoodsType"
    }).then(data => {
      this.navs = [];
      data.data.data.map(item => {
        if (item.id == this.level2) {
          this.name = item.name;
        }
        if (item.parentId == this.level2) {
          this.navs.push(item);
        }
      });
    });
    this.$router.push({
      name: "listcloth",
      query: {
        typeId_1: this.level1,
        typeId_2: this.level2,
        typeId_3: this.level3
      }
    });
  },
  data() {
    return {
      curIndex: 0,
      level1: "",
      level2: "",
      level3: "",
      name: "",
      navs: []
    };
  },
  methods: {
    handleActive(index, id) {
      this.curIndex = index;
      this.level3 = id;
      this.$router.push({
        name: "listcloth",
        query: {
          typeId_1: this.level1,
          typeId_2: this.level2,
          typeId_3: this.level3
        }
      });
    },
    handleBack(){
      this.$router.push("/classify")
      // :to="{name:'classify',query:{id:level1}}"
    }
  },
  updated(){
      new Swiper(".nav",{
            freeMode:true,
            tap:true,
            click:true,
            slidesPerView: 4,
      })
  }
};
</script>
<style>
.list {
  width: 100%;
  background: #fff;
  z-index: 1000;
}
.top {
  position: fixed;
  margin: 0.4rem 0 0 0.5rem;
  display: flex;
}
.top > a > img {
  width: 0.4rem;
  height: 0.4rem;
}
.top > span {
  font-size: 16px;
  font-weight: 900;
  margin-left: 10px;
  font-family: PingFangSC-Medium;
}
.list .nav{ 
    width:100%;
    height:.8rem;
    position: relative;
    left:0;top:.98rem;
}
.list .swiper-wrapper>.nav-item{
    width:100px;
    padding:0 .3rem;
    line-height:.8rem;
     font-size: 14px;
     text-align: center;
}
.list > .nav > .swiper-wrapper>.active {
  border-bottom: 2px solid#4e311f;
}
.back{
  width:.4rem;
  height:.4rem
}
.back>img{
  width:100%
}
</style>
