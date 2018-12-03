<template>
    <div class="pay">
        <div class="pay-header">
            <div class="pay-header-back" @click="handleBack()">
                <img src="static/img/fanhui@2x.png" alt="">
            </div>
            <h2 class="pay-header-title">确认订单</h2>
            <div></div>
        </div>
        <div class="pay-center">
            <userInfo-com></userInfo-com>
            <price-com :val="obj"></price-com>
            <payway-com></payway-com>
        </div>
        <div class="pay-footer">
            <div class="pay-footer-left">
                <span>应付金额</span>
                <span>￥{{price}}</span>
            </div>
            <div class="pay-footer-right">提交订单</div>
        </div>
    </div>
</template>

<script>
import userInfo from './userInfo.vue';
import price from './price.vue';
import payway from './payway.vue';
export default {
    components: {
        'userInfo-com': userInfo,
        'price-com': price,
        'payway-com': payway
    },
    created() {
        this.price = this.$route.query.price;
        this.freight = this.$route.query.freight;
        this.obj = {price: this.$route.query.price, freight: this.$route.query.freight};
    },
    data() {
        return {
            price: '',
            freight: '',
            obj: {}
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
    .pay {
        height: 100%;
    }
    .pay-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .96rem;
        padding-left: .32rem;
        padding-right: .32rem;
        border-bottom: 1px solid #F4F4F4;
    }
    .pay-header-back img {
        width: .26rem;
        height: .42rem;
    }
    .pay-center {
        height: 100%;
        background: #F4F4F4;
    }
    .pay-footer {
        display: flex;
        position: fixed;
        bottom: 0;
        height: .98rem;
    }
    .pay-footer-left {
        width: 5rem;
        height: .98rem;
        line-height: .98rem;
        padding-left: .33rem;
        font-size: 16px;
        color: #1E1E1E;
        background: #fff;
    }
    .pay-footer-left span:nth-child(1) {
        font-size: 16px;
        color: #1E1E1E;
    }
    .pay-footer-left span:nth-child(2) {
        font-size: 18px;
        color: #384355;
        padding-left: .41rem;
    }
    .pay-footer-right {
        width: 2.5rem;
        height: .98rem;
        text-align: center;
        line-height: .98rem;
        font-size: 18px;
        color: #fff;
        background: #384355;
    }
</style>
