<template>
<div class="gy">

    <div class="tou">
    </div>
    <div class="clothe">
      <router-link to="clothesin">
      <p><&nbsp&nbsp&nbsp&nbsp品牌日志-关于贝曼</p>
      </router-link>
    </div>
    <img src="../../../static/images/关于诚衣@2x_03.gif">
  </div>
</template>
<script>
export default {

}
</script>
<style>
.gy{
 width:100%;
  height:100%;
  position: fixed;
  z-index:1000;
  background: #fff;
  overflow:scroll;
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
img{
  width: 94%;
  margin-top:0.2rem;
  margin-left: 3%;
}
</style>
