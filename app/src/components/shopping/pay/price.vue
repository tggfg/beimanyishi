<template>
    <div class="price">
        <div class="price-title">订单金额</div>
        <div class="price-content">
            <p>
                <span>商品金额</span>
                <span>￥{{val.price}}</span>
            </p>
            <p>
                <span>运费</span>
                <span>￥{{val.freight}}</span>
            </p>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        val: Object
    }
}
</script>

<style scoped>
    .price {
        height: 2.54rem;
        margin-top: .2rem;
        background: #fff;
    }
    .price-title {
        height: .96rem;
        line-height: .96rem;
        padding-left: .32rem;
        font-size: 16px;
        color: #1E1E1E;
        border-bottom: 1px solid #F4F4F4;
    }
    .price-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 1.58rem;
        padding: .37rem .32rem .37rem .32rem;
    }
    .price-content p {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #1E1E1E;
    }
</style>
