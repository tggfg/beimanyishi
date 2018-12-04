<template>
    <div class="goodsContent">
        <div class="goodsContent-img">
            <img :src="goods.picture" alt="">
        </div>
        <div class="goodsContent-info">
            <span>{{goods.name}}</span>
            <span>￥{{goods.price}}</span>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    created() {
        this.handleGoodsContent(this.$route.query.goodId);
    },
    computed: {
        ...Vuex.mapState({
            goods: state => state.goodsDetails.goods
        })
    },
    methods: {
        ...Vuex.mapActions({
            handleGoodsContent: 'goodsDetails/handleGoodsContent'
        })
    }
}
</script>

<style scoped>
    .goodsContent {
        height: 9.44rem;
        padding: 0 .34rem;
        border-bottom: 10px solid #F4F4F4;
    }
    .goodsContent-img img {
        width: 6.82rem;
        height: 8.16rem;
    }
    .goodsContent-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 1.08rem;
        padding: 0 .18rem;
    }
    .goodsContent-info span:nth-child(1) {
        font-size: 16px;
        color: #1E1E1E;
    }
    .goodsContent-info span:nth-child(2) {
        font-size: 16px;
        color: #A82A20;
    }
</style>
