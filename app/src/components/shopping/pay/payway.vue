<template>
    <div class="payway">
        <div class="payway-title">支付方式</div>
        <div class="payway-content">
            <p>
                <span></span>
                <span>
                    <img src="static/img/weixin@2x.png" alt="">
                </span>
                <span>微信支付</span>
            </p>
            <p>
                <span></span>
                <span>
                    <img src="static/img/zhifubao@2x.png" alt="">
                </span>
                <span>支付宝支付</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .payway {
        height: 2.54rem;
        margin-top: .2rem;
        background: #fff;
    }
    .payway-title {
        height: .96rem;
        line-height: .96rem;
        padding-left: .32rem;
        font-size: 16px;
        color: #1E1E1E;
        border-bottom: 1px solid #F4F4F4;
    }
    .payway-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 1.58rem;
        padding: .37rem .32rem .37rem .32rem;
    }
    .payway-content p {
        display: flex;
        font-size: 14px;
        color: #1E1E1E;
    }
    .payway-content p span:nth-child(1) {
        width: .32rem;
        height: .32rem;
        border: 1px solid #D8D8D8;
        border-radius: .16rem;
    }
    .payway-content p span:nth-child(2) {
        padding-left: .24rem;
        padding-right: .18rem;
    }
    .payway-content p span:nth-child(2) img {
        width: .4rem;
        height: .32rem;
    }
</style>
