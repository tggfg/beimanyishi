<template>
    <div class="login">
        <img src="../../../static/img/beijing4@2x.png">
        <div class="login-user">
            手机号
            <input type="number" v-model="phone" placeholder="请填写手机号">
        </div>
        <div class="login-user">
            密码
            <input type="password" v-model="password" placeholder="请填写密码">
        </div>
        <button @click="loginHandle">登录</button>
        <div class="login_bottom">
            <router-link to="/forgetpasword">忘记密码</router-link>
            <router-link to="/register">注册</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vuex from "vuex";
export default {
    data() {
        return {
            phone: '',
            password: ''
        }
    },



    methods: {
       ...Vuex.mapMutations({
         handleName:"login/handleName"
      }),
        loginHandle: function() { // 点击登录按钮
             if (this.phone === '') {
                alert('手机号为必填项')
                return
            }else{
                var reg = /^1[3456789]\d{9}$/;
                if(!reg.test(this.phone)){
                    alert("请输入正确的手机号");
                    return
                }
            }
            if (this.password === '') {
                alert('密码为必填项')
                return
            }else{
                var pasw = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
                if(!pasw.test(this.password)){
                    alert("请输入6-16位字母数字组合的密码");
                    return
                }
            }
            axios.get('http://www.bmyss.xyz:8080//bmys/user/login', {
                params:{
                    mobile: this.phone,
                    password: this.password
                }
            })
            .then((response) => {
                if (response.data.code === 1002) { // 假设后端给了登录成功的信息
                console.log(response);
                this.handleName(this.phone);
                    this.$router.push('/home/index') // 跳转到home页
                }else{
                    alert("账号密码错误")
                }
            })
            .catch(function (error) {
                alert('网络错误，请稍后再试')
            })
        }
    }
}
</script>
<style scoped>
.login {
    margin-top: .4rem;
    height: 100%;
    overflow: hidden;
    z-index: 100;
    background: #ffffff;
    position: absolute;
    left: 0;
    top: 0;
}
img {
  width: 2rem;
  height: 2rem;
  margin: 1.2rem 2.72rem 2.12rem 2.76rem;
}
.login-user {
  width: 4.38rem;
  height: .44rem;
  line-height: .4rem;
  margin: 0 1.56rem .56rem 1.56rem;
  border-bottom: 1px solid #5a5a5a;
  color: #5a5a5a;
  font-size: .28rem;
  font-family: PingFangSC-Regular;
}
input {
  border: none;
  width: 3rem;
}
button {
  width: 4.4rem;
  height: .88rem;
  background: #384355;
  margin: .4rem 1.54rem .64rem 1.56rem;
  color: #ffffff;
  font-size: 16px;
}
.login_bottom {
  display: flex;
  justify-content: space-between;
  width: 4.38rem;
  margin: auto 1.56rem;
}
a {
  font-size: 12px;
  line-height: .36rem;
  color: #5a5a5a;
  text-decoration: none;
}
</style>
