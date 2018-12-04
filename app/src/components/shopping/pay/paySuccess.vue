<template>
    <div class="paySuccess">
        <div class="paySuccess-header">
            <div class="paySuccess-header-back" @click="handleBack()">
                <img src="static/img/fanhui@2x.png" alt="">
            </div>
            <h2 class="paySuccess-header-title">确认订单</h2>
            <div></div>
        </div>
        <div class="paySuccess-center">
            <div class="paySuccess-center-img">
                <img src="static/images/duihao@2x.png" alt="">
            </div>
            <div class="paySuccess-center-price">{{price}}元</div>
            <div class="paySuccess-center-shop">北京贝曼衣舍旗舰店</div>
            <div class="paySuccess-center-btn">查看订单</div>
        </div>
        <div class="paySuccess-footer">
            <div class="paySuccess-footer-user">李某某&nbsp;&nbsp;********526</div>
            <div class="paySuccess-footer-addr">北京 北京市 昌平区 北京市昌平区沙河镇沙阳路18号</div>
            <div class="paySuccess-footer-price">实付:￥{{price}}</div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.price = this.$route.query.price;
    },
    data() {
        return {
            price: ''
        }
    },
    methods: {
        handleBack() {
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    .paySuccess {
        position: relative;
        z-index: 100;
        height: 100%;
        padding-top: .4rem;
    }
    .paySuccess-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .96rem;
        padding-left: .32rem;
        padding-right: .32rem;
        border-bottom: 1px solid #F4F4F4;
    }
    .paySuccess-header-back img {
        width: .26rem;
        height: .42rem;
    }
    .paySuccess-center {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 3.68rem;
        border-bottom: .2rem solid #F4F4F4;
    }
    .paySuccess-center-img img{
        width: .84rem;
        height: .84rem;
    }
    .paySuccess-center-price {
        font-size: 18px;
        color: #1E1E1E;
    }
    .paySuccess-center-shop {
        font-size: 14px;
        color: #1E1E1E;
    }
    .paySuccess-center-btn {
        width: 1.4rem;
        height: .56rem;
        text-align: center;
        line-height: .56rem;
        border: 1px solid #384355;
        border-radius: 6px;
    }
    .paySuccess-footer {
        height: 100%;
        background: #fff;
        padding-left: .33rem;
        line-height: .48rem;
        font-size: 14px;
        color: #1E1E1E;
    }
</style>
