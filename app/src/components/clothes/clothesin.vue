<template>
	<div class="clothesin">

    <div class="tou">
    </div>

    <div class="clothe">
      <router-link :to='{name:"clothes"}'>
      <p><</p>
      </router-link>
    </div>


    <!-- <div class="wrapper" ref="salcmesWrapper">
      <div class="content"> -->

        <div class="content">
          <div class="tu" v-for="(item,index) in goods">
            <img :src="item.goodimg" />
            <p class="zi">{{item.goodzi}}</p><p class="qian">{{item.good$}}</p>
          </div>
        </div>

      <!-- </div>
    </div> -->

	</div>
</template>


<script>
// import BScroll from "better-scroll";
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      goods: state => state.clothes.goods
    })
  },
  methods: {
    ...Vuex.mapActions({
      handlehome: "clothes/handlehome"
    })
  },
  created() {
    this.handlehome();
  },
  // mounted(){
  //     this.scroll = new BScroll(this.$refs.salesWrapper,{
  //     click:true,
  //     pullUpLoad:true,
  //   });
  // }
}
</script>


<style>
.clothesin{
  height:100%;
  display: flex;
  flex-direction: column;
}
.content{
  flex:1;
  overflow: auto;
  margin-bottom:0.98rem;
}
.tou {
  height: 0.4rem;
  width: 100%;
}
.clothe {
  height: 0.84rem;
  font-size: 0.72rem;
  text-align: center;
  border-bottom: 0.01rem solid #dcdcdc;
}
.clothe > a {
  font-size: 0.4rem;
  padding-top: 0.19rem;
  float: left;
  margin-left: 0.2rem;
}
.tu {
  width: 3.1rem;
  height: 5rem;
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
.qian {
  font-size: 0.5rem;
  float: right;
  color: red;
}
*{
  font-weight: normal;
}
.wrapper{
  position: absolute;
  top:1.3rem;
  bottom:0;
  width:100%;
  overflow: hidden;
}
</style>
