<template>
    <div class="goodsDetails">
        <div class="goodsDetails-backBtn" @click="handleBack()">
            <img src="static/img/fanhui2@2x.png" alt="">
        </div>
        <div class="goodsDetails-shareBtn">
            <img src="static/img/fenxiang@2x.png" alt="">
        </div>
        <goodsContent-com></goodsContent-com>
        <goodsComment-com></goodsComment-com>
        <div class="goodsFooter">
            <div class="goodsFooter-left">
                <div class="goodsFooter-left-icon" @click="handleHome()">
                    <img src="static/img/shouye@2x.png" alt="">
                </div>
                <div class="goodsFooter-left-icon">
                    <img src="static/img/shoucang@2x.png" alt="">
                </div>
                <div class="goodsFooter-left-icon" @click="handleCart()">
                    <img src="static/img/gouwuche@2x.png" alt="">
                </div>
            </div>
            <div class="goodsFooter-center" @click="handleToggle()">加入购物车</div>
            <div class="goodsFooter-right">搭配购</div>
        </div>
        <transition name="slide">
            <goodsAdd-com v-show="show" @mask="getVal" @prompt="getInfo"></goodsAdd-com>
        </transition>
        <transition name="fade">
            <goodsMask-com v-show="show" @mask="getVal"></goodsMask-com>
        </transition>
        <transition name="slide-fade">
            <div class="goodsPrompt" v-show="on">
                <p>√</p>
                <p>加入购物车成功</p>
            </div>
        </transition>
        
    </div>
</template>

<script>
import goodsContent from './goodsContent.vue';
import goodsComment from './goodsComment.vue';
import goodsAdd from './goodsAdd.vue';
import goodsMask from './goodsMask.vue';
import Vuex from 'vuex';
export default {
    components: {
        'goodsContent-com': goodsContent,
        'goodsComment-com': goodsComment,
        'goodsAdd-com': goodsAdd,
        'goodsMask-com': goodsMask
    },
    created() {
        this.handleFlag(false);
    },
    data() {
        return {
            show: false,
            on: false
        }
    },
    methods: {
        ...Vuex.mapMutations({
            handleFlag: 'handleFlag'
        }),
        handleToggle() {
            this.show = !this.show;
        },
        getVal(val) {
            this.show = val;
        },
        getInfo(val) {
            this.on = val;
            setTimeout(() => {
                this.on = false;
            }, 1)
        },
        handleBack() {
            this.$router.back();
        },
        handleHome() {
            this.$router.push('/home');
        },
        handleCart() {
            this.$router.push('/cart');
        }
    }
}
</script>

<style scoped>
    .goodsDetails {
        padding-top: .4rem;
    }
    .goodsDetails-backBtn {
        position: absolute;
        top: .64rem;
        left: .42rem;
    }
    .goodsDetails-backBtn img {
        width: .4rem;
        height: .4rem;
    }
    .goodsDetails-shareBtn {
        position: absolute;
        top: .64rem;
        right: .42rem;
    }
    .goodsDetails-shareBtn img {
        width: .4rem;
        height: .4rem;
    }
    /* goodsfooter */
    .goodsFooter {
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.2rem;
    }
    .goodsFooter-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 3.96rem;
        height: 1.2rem;
        background: #F4F4F4;
    }
    .goodsFooter-left .goodsFooter-left-icon:nth-child(1) {
        width: 1.26rem;
    }
    .goodsFooter-left .goodsFooter-left-icon:nth-child(2) {
        width: 1.38rem;
        border-left: 1px solid #979797;
        border-right: 1px solid #979797;
    }
    .goodsFooter-left .goodsFooter-left-icon:nth-child(3) {
        width: 1.32rem;
    }
    .goodsFooter-left-icon img {
        width: .44rem;
        height: .44rem;
        margin: 0 auto;
    }
    .goodsFooter-center {
        width: 1.74rem;
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        background: #384355;
        font-size: 14px;
        color: #fff;
    }
    .goodsFooter-right {
        width: 1.8rem;
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        background: #556B8E;
        font-size: 14px;
        color: #fff;
    }
    /* 动画 */
    .slide-enter, .slide-leave-to {
        transform: translateY(100%);
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 300ms;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 300ms;
    }
    @keyframes move {
        0% {
            opacity: 0;
        }
        50% {
            opacity: .5;
        }
        100% {
            opacity: 0;
        }
    }
    .slide-fade-enter-active, .slide-fade-leave-active {
        animation: move 1.5s linear;
    }
    .goodsPrompt {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        margin: auto;
        width: 2rem;
        height: 2rem;
        background: #000;
        opacity: .5;
        text-align: center;
    }
    .goodsPrompt p:nth-child(1) {
        font-size: 60px;
        color: #fff;
    }
    .goodsPrompt p:nth-child(2) {
        font-size: 14px;
        color: #fff;
    }
</style>
