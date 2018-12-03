<template>
	<div class="clothes">
  <div class="tou"></div>
  <div class="clothe">
  <h2>穿搭</h2>
  </div>
   <router-link to="discount">
     <div class="center-one">
      <p>无惧严寒，温暖时尚也有型</p>
      <img src="static/img/穿搭@2x_03.gif">
     </div>
  </router-link>

 <router-link to='discount'>
  <div class="center-two">
      <p>无惧严寒，温暖时尚也有型</p>
      <img src="static/img/穿搭@2x_01_03.gif">
  </div>
  </router-link>

<router-link to='discount'>
    <div class="center-three">
      <p>无惧严寒，温暖时尚也有型</p>
      <img src="static/img/穿搭@2x_22.gif">
    </div>
</router-link>

	</div>
</template>


<script>
export default({

})




</script>


<style>
.tou{
    height:0.4rem;
    width: 100%;

    }
.clothe{
    height:0.84rem;
    font-size: 0.72rem;
    text-align: center;
    border-bottom: 0.01rem solid #DCDCDC ;
}
.clothe>h2{
    font-size: 0.36rem;
    padding-top: 0.19rem;

}
.center-one{
  width:6.86rem ;
  height:3.3rem ;
  margin: 0.3rem auto;
}
.center-one>img{
    width:6.86rem ;
    height:2.7rem ;
    margin: 0.1rem auto;
}
.center-one>p{
  padding-top:0.2rem;
  font-size:0.28rem;
  color:#5A5A5A;
}
.center-two{
  width:6.86rem ;
  height:3.3rem ;
  margin: 0.3rem auto;
}
.center-two>img{
    width:6.86rem ;
    height:2.7rem ;
    margin: 0.1rem auto;
}
.center-two>p{
  padding-top:0.2rem;
  font-size:0.28rem;
  color:#5A5A5A;
}
.center-three{
  width:6.86rem ;
  height:3.3rem ;
  margin: 0.3rem auto;
}
.center-three>img{
    width:6.86rem ;
    height:2.7rem ;
    margin: 0.1rem auto;
}
.center-three>p{
  padding-top:0.2rem;
  font-size:0.28rem;
  color:#5A5A5A;
}


</style>
