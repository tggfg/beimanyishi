<template>
	<div class="clothesin">
    <div class="tou">
    </div>

    <div class="clothe">
      <router-link to="personal">
      <p><&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp品牌日志</p>
      </router-link>
    </div>
<router-link to="gy">
    <div class="rizhitop">
      <img src="../../../static/images/品牌日志@2x_03.gif">
    </div>
</router-link>

<router-link to="qp">
    <div class="rizhixq ">
        <img src="../../../static/images/品牌日志@2x_07.gif">
          <p>关于诚衣</p>
    </div>
</router-link>

    <router-link to="qp">
      <div class="rizhixq ">
        <img src="../../../static/images/品牌日志@2x_10.gif">
          <p>关于诚衣</p>
    </div>
    </router-link>

    <router-link to="qp">
      <div class="rizhixq ">
        <img src="../../../static/images/品牌日志@2x_14.gif">
          <p>关于诚衣</p>
    </div>
    </router-link>

    <router-link to="qp">
          <div class="rizhixq ">
        <img src="../../../static/images/品牌日志@2x_12.gif">
          <p>关于诚衣</p>
    </div>
    </router-link>

	</div>
</template>


<script>
import Vuex from 'vuex';
import axios from "axios"
  export default{
    computed:{
      ...Vuex.mapState({
        imgLists:state=>state.clothesin.imgLists

      })
    },
    methods:{
      ...Vuex.mapActions({
		  handleImgList:"clothesin/handleImgList"
	  })
    },
    created(){
      this.handleImgList()
    // axios({
    //   method:'get',
    //   url:"http://www.bmyss.xyz:8080/bmys//goods/getAllGoodsType",
    // }).then((data)=>{
    //   console.log(data);
    // })

    }
  }
</script>


<style>
.clothesin {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  background: #fff;
}
.tou {
  height: 0.4rem;
  width: 100%;
}
.clothe {
  height: 0.84rem;
  font-size: 0.72rem;
  text-align: center;
}
.clothe > a {
  font-size: 0.4rem;
  padding-top: 0.19rem;
  float: left;
  margin-left: 0.2rem;
}
.tu {
  width: 3.1rem;
  height: 4.7rem;
  margin: 5% 2% 0 5%;
  float: left;
}
.tu > img {
  width: 100%;
  height: 4.6rem;
}
.zi {
  padding-top: 0.15rem;
  font-size: 0.29rem;
  float: left;
}
.rizhitop > img {
  width: 7.3rem;
  height: 3.75rem;
  padding-left: 0.15rem;
}

.rizhixq {
  width: 7.3rem;
  height: 1.75rem;
  margin: 0.33rem auto;
  border-bottom: 0.01rem solid #ccc;
}
.rizhixq > img {
  width: 2rem;
  height: 1.6rem;
  padding-left: 0.2rem;
  float: left;
}
.rizhixq > p {
  font-size: 0.4rem;
  padding-top: 0.5rem;
  margin-left: 2.5rem;
}
</style>
