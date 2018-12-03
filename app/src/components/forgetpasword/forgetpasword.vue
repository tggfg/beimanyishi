<template>
    <div class="forgetpasword">
        <img src="../../../static/img/beijing4@2x.png">
        <div class="register-user">
            手机号
            <input type="text">
        </div>
         <div class="register-verification">
            验证码
            <input type="text">
            <a>获取验证码</a>
        </div> 
        <div class="register-user">
            新密码
            <input type="password">
        </div> 
        <div class="register-user">
            确认密码
            <input type="password">
        </div> 
        <button>确认更改</button>
      
    </div>
</template>
<script>
export default {
    data(){
        return {
            phone: "",
            password: "",
            rePassword: "",
            verification: "",
            lock: true,
            second: 60
        }
    },
    methods:{
        
    }
}
    
</script>
<style scoped>
.forgetpasword{
    margin-top: .4rem;
    height: 100%;
    overflow: hidden;
    z-index: 100;
    background: #ffffff;
    position: absolute;
    left: 0;
    top: 0;
}
img{
    width: 2rem;
    height: 2rem;
    margin: 1.2rem 2.72rem 2.12rem 2.76rem;
}
.register-user{
  width: 4.38rem;
  height: .44rem;
  line-height: .4rem;
  margin: 0 1.56rem .56rem 1.56rem;
  border-bottom: 1px solid #5a5a5a;
  color: #5a5a5a;
  font-size: .28rem;
  font-family: PingFangSC-Regular;
}
input{
    border:none;
    width: 3rem;  
}
button{
    width: 4.4rem;
    height: .88rem;
    background: #384355;
    margin: .4rem 1.54rem .64rem 1.56rem;
    color: #ffffff;
    font-size: 16px;
}
.register-verification{
    width: 4.38rem;
    height: .44rem;
    line-height: .4rem;
    margin: 0 1.56rem .56rem 1.56rem;
    border-bottom: 1px solid #5A5A5A;
    color: #5A5A5A;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    
}
.register-verification>input{
    width: 2rem;
}
.register-verification>a{
    font-size: 12px;
    line-height: .34rem;
}
</style>
