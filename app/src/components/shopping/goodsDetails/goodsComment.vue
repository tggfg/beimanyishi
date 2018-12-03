<template>
    <div class="goodsComment">
        <ul class="goodsComment-list">
            <li class="goodsComment-item" v-for="(item, index) in goodsComments">
                <div class="goodsComment-item-img">
                    <img :src="item.icon" alt="">
                </div>
                <div class="goodsComment-item-des">
                    <p>订单后四位：{{item.orderNum}}-江苏省</p>
                    <p>{{item.content}}</p>
                    <p>
                        <span>{{item.color}}-{{item.size}}</span>&nbsp;&nbsp;
                        <span>{{item.time}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    created() {
        this.handleGoodsComment();
    },
    computed: {
        ...Vuex.mapState({
            goodsComments: state => state.goodsDetails.goodsComments
        })
    },
    methods: {
        ...Vuex.mapActions({
            handleGoodsComment: 'goodsDetails/handleGoodsComment'
        })
    }
}
</script>

<style scoped>
    .goodsComment-list {
        width: 100%;
        padding: 0 .34rem;
    }
    .goodsComment-item {
        display: flex;
        width: 100%;
        height: 1.98rem;
        padding: .16rem 0 .2rem 0;
        border-bottom: 1px solid #DCDCDC;
    }
    .goodsComment-item-img {
        margin-top: .28rem;
        margin-left: .35rem;
        margin-right: .4rem;
    }
    .goodsComment-item-img img {
        width: .92rem;
        height: 1.15rem;
    }
    .goodsComment-item-des p{
        line-height: .6rem;
        font-size: 14px;
        color: #1E1E1E ;
    }
    .goodsComment-item-des p span {
        color: #5A5A5A ;
    }
</style>
