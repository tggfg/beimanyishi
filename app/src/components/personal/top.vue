<template>
    <div class="title">
        <div class="title_top"></div>
        <div class="title_com">
             <router-link to="login">
            <p>{{name?name:"登录/注册"}}</p>
            <p @click="handleLoginOut()">{{name?"退出":""}}</p>
             </router-link>
            <img src="static/img/goodsAdd_05.jpg" />
        </div>
    </div>
</template>

<script>
import Vuex from "Vuex";
export default {

   computed:{
        ...Vuex.mapState({
            name:state=>state.login.name
        })
    },
     methods: {
       ...Vuex.mapMutations({
         handleT:"login/handleT"
      }),
      handleLoginOut(){
        this.handleT();
        this.$router.push("/personal")
      }
}
}
</script>

<style>
.title{
    width: 100%;
    height:3.76rem;
    background:#384355;
}
.title_top{
    height: .4rem;
    width: 100%;
}
.title_com{
    height: 3.36rem;
    width:100%;
    position: relative;
}
.title_com>a{
    font-size: 18px;
    color: #FFF;
    position: absolute;
    left:1.16rem;
    top:1.3rem;
    font-weight:600;
}
.title_com>img{
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top:.98rem;
    right:.32rem;
    border-radius: 50%;
}
</style>
