<template>
  <div class="register">
    <img src="../../../static/img/beijing4@2x.png">
    <div class="register-user">
      手机号
      <input type="number" v-model="phone">
    </div>
    <div class="register-user">
      密码
      <input type="password" v-model="password">
    </div>
    <div class="register-user">
      确认密码
      <input type="password" v-model="rePassword">
    </div>
    <div class="register-verification">
      验证码
      <input type="text" v-model="verification">
      <a @click="getVerificationHandle" v-if="lock">获取验证码</a>
      <span v-if="!lock">{{second}}秒</span>
    </div>
    <button @click="registerHandle">注册</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      phone: "",
      password: "",
      rePassword: "",
      verification: "",
      lock: true,
      second: 60
    }
  },
  methods: {
    getVerificationHandle() {
      // 首先校验用户输入的手机号 (1. 是否填写，2. 填写的手机号是否合法)
      if (this.phone === "") {
        alert("获取验证码之前必须输入手机号");
        return;
      } else {
        var reg = /^1[3456789]\d{9}$/;
        if (!reg.test(this.phone)) {
          alert("请输入正确的手机号");
          return;
        }
      }

      // 如果能执行到这里，证明用户填写的手机号合法
      // console.log(this.phone)

      this.lock = false;
      // 开启计时器
      var timer = setInterval(() => {
        if (this.second === 1) {
          this.lock = true; // 倒计时结束，按钮重新出现
          clearInterval(timer);
          this.second = 60;
        } else {
          --this.second;
        }
      }, 1000);

      // 请求代码
      axios
        .get("http://www.bmyss.xyz:8080/bmys/sign/sendcode", {
          params: {
            mobile: this.phone
          }
        }) // 里面写登录的接口名
        .then(function(response) {
          console.log(response);
          return response.data;
        })
        .then(data => {
          if (data.code == 1011) {
            return;
          } else {
            // 获取验证码失败，请稍后再试
            alert("获取验证码失败，请稍后再试");
            return;
          }
        })
        .catch(function(error) {
          alert("网络异常，请稍后再试");
          return;
        });
    },
    registerHandle: function() {
      // 点击注册按钮
      if (this.phone === "") {
        alert("手机号为必填项");
        return;
      } else {
        var reg = /^1[3456789]\d{9}$/;
        if (!reg.test(this.phone)) {
          alert("请输入正确的手机号");
          return;
        }
      }
      if (this.password === "") {
        alert("密码为必填项");
        return;
      } else {
        var pasw = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        if (!pasw.test(this.password)) {
          alert("请输入6-16位字母数字组合的密码");
          return;
        }
      }
      if (this.rePassword === "") {
        alert("确认密码为必填项");
        return;
      }
      if (this.password !== this.rePassword) {
        alert("密码和确认密码不一致");
        return;
      }
      if (this.verification === "") {
        alert("验证码为必填项");
        return;
      }
      axios
        .get("http://www.bmyss.xyz:8080/bmys/check/checkcode", {
          params:{
            code: this.verification,
            mobile: this.phone
          }
        })
        .then(function(response) {
          console.log(response);
          return response.data;
        })
        .then(data => {
          if (data.code == 1004) {
            console.log("1");
            axios
              .get("http://www.bmyss.xyz:8080/bmys/user/reg", {
                params:{
                  mobile: this.phone,
                  password: this.password,
                  repassword: this.rePassword
                }
              }) // 里面写登录的接口名
              .then(function(response) {
                return response.data;
              })
              .then(data => {
                if (data.code === 0) {
                  // 注册成功了
                  alert("注册成功");
                  this.$router.push("/login");
                } else {
                  alert("注册失败，请稍后再试");
                }
              })
              .catch(function(error) {
                alert("网络异常，请稍后再试");
                return;
              });
          } else {
            alert("验证码错误");
          }
        })
        .catch(function(error) {
          alert("网络异常，验证码获取失败");
          return;
        });
      // ... 请求注册接口
      // 请求代码
    }
  }
};
</script>
<style scoped>
.register {
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
.register-user {
  width: 4.38rem;
  height: 0.44rem;
  line-height: 0.4rem;
  margin: 0 1.56rem 0.56rem 1.56rem;
  border-bottom: 1px solid #5a5a5a;
  color: #5a5a5a;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular;
}
input {
  border: none;
  width: 3rem;
}
button {
  width: 4.4rem;
  height: 0.88rem;
  background: #384355;
  margin: 0.4rem 1.54rem 0.64rem 1.56rem;
  color: #ffffff;
  font-size: 16px;
}
.register-verification {
  width: 4.38rem;
  height: 0.44rem;
  line-height: 0.4rem;
  margin: 0 1.56rem 0.56rem 1.56rem;
  border-bottom: 1px solid #5a5a5a;
  color: #5a5a5a;
  font-size: 14px;
  font-family: PingFangSC-Regular;
}
.register-verification > input {
  width: 2rem;
}
.register-verification > a {
  font-size: 12px;
  line-height: 0.34rem;
}
</style>
