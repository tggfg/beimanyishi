<template>
	<div class="clothesin">

    <div class="tou">
    </div>

    <div class="clothe">
      <router-link :to='{name:"clothes"}'>
      <p><</p>
      </router-link>
    </div>



	</div>
</template>


<script>

</script>


<style>

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

</style>
