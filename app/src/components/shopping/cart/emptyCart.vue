<template>
    <div class="emptyCart">
        <div class="emptyCart-header">购物车</div>
        <div class="emptyCart-img">
            <img src="static/img/emptyCart_03.jpg" alt="">
        </div>
        <div class="emptyCart-tips">您的购物车中没有商品</div>
        <div class="goBuy" @click="handleGoBuy()">去购物</div>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    created() {
        let str = localStorage.product ? localStorage.product : '';
        if (str) {
            this.$router.push('/cart');
        }
    },
    methods: {
        handleGoBuy() {
            this.$router.push('/home');
        }
    }
}
</script>

<style scoped>
    .emptyCart {
        padding-top: .4rem;
    }
    .emptyCart-header {
        height: .87rem;
        text-align: center;
        line-height: .87rem;
        font-size: 18px;
        color: #030303;
        border-bottom: 1px solid #DCDCDC;
    }
    .emptyCart-img img {
        width: 1.98rem;
        height: 1.74rem;
        margin: 0 auto;
        margin-top: 2.05rem;
    }
    .emptyCart-tips {
        margin-top: .56rem;
        text-align: center;
        font-size: 12px;
        color: #5A5A5A;
    }
    .goBuy {
        width: 2.02rem;
        height: .62rem;
        margin: 0 auto;
        margin-top: .35rem;
        text-align: center;
        line-height: .62rem;
        font-size: 12px;
        color: #5A5A5A;
        border: 1px solid #979797;
        border-radius: 7px;
    }
</style>
