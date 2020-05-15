<template>
    <div class="goodsAdd">
        <div class="goodsAdd-content">
            <div class="goodsAdd-content-color">
                <div class="goodsAdd-content-color-top">
                    <div class="goodsAdd-content-img">
                        <img :src="goods.picture" alt="">
                    </div>
                    <div class="goodsAdd-content-color-price">
                        <p>￥{{goods.price}}</p>
                        <p>已选择：{{color}}-{{size}}</p>
                    </div>
                    <div class="goodsAdd-content-cancel" @click="handleCancel()">
                        <img src="static/img/quxiao@2x.png" alt="">
                    </div>
                </div>
                <div class="goodsAdd-content-color-select">
                    <p>颜色</p>
                    <p>
                        <span
                            v-for="(item, index) in goodsAdd.goodsColor"
                            :style="{background: item.color, backgroundClip: 'content-box'}"
                            :class="activeIndex == index ? 'active' : ''"
                            @click="handleActiveIndex(item, index)"
                            :key="index"
                        ></span>
                    </p>
                </div>
            </div>
            <div class="goodsAdd-content-size">
                <p>尺码</p>
                <p>
                    <span
                    v-for="(item, index) in goodsAdd.goodsSize"
                    :class="onIndex == index ? 'on' : ''"
                    @click="handleOnIndex(item, index)"
                    :key="index"
                    >{{item}}</span>
                </p>
            </div>
            <div class="goodsAdd-content-num">
                <p>购买数量</p>
                <p>
                    <span @click="handleReduce()">-</span>
                    <span>{{num}}</span>
                    <span @click="handleAdd()">+</span>
                </p>
            </div>
        </div>
        <div class="goodsAdd-btn" @click="handleConfirm()">确认</div>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    created() {
        this.handleGoodsAdd();
    },
    data() {
        return {
            activeIndex: -1,
            onIndex: -1,
            color: '',
            size: '',
            num: 1
        }
    },
    computed: {
        ...Vuex.mapState({
            goods: state => state.goodsDetails.goods,
            goodsAdd: state => state.goodsDetails.goodsAdd
        })
    },
    methods: {
        ...Vuex.mapActions({
            handleGoodsAdd: 'goodsDetails/handleGoodsAdd'
        }),
        handleCancel() {
            this.$emit('mask', false);
        },
        handleActiveIndex(item, index) {
            this.activeIndex = index;
            this.color = item.colorName;
        },
        handleOnIndex(item, index) {
            this.onIndex = index;
            this.size = item;
        },
        handleAdd() {
            this.num++;
        },
        handleReduce() {
            if (this.num > 1) {
                this.num--;
            }
        },
        handleConfirm() {
            let str = localStorage.product ? localStorage.product : '';
            let obj = this.convertStrToObj(str);
            if (this.goodsAdd.id in obj) {
                obj[this.goodsAdd.id].num += this.num;
            } else {
                obj[this.goodsAdd.id] = {
                    "src": this.goods.picture,
                    "name": this.goods.name,
                    "price": this.goods.price,
                    "color": this.color,
                    "size": this.size,
                    "num": this.num
                };
            }
            localStorage.product = JSON.stringify(obj);
            //{"0":{"src":"static/img/goodsAdd_03.jpg","name":"宽松衬衫-男","price":119,"color":"蓝色","size":"170/M","num":5}}
            console.log(localStorage.product);
            // if (isLogin) {
            //     let product = {
            //         "uid": 1,
            //         "gid": this.goods.id,
            //         "src": this.goods.goodsMinSrc,
            //         "name": this.goods.goodsName,
            //         "price": this.goods.goodsPrice,
            //         "color": this.color,
            //         "size": this.size,
            //         "num": this.num
            //     };
            //     this.handleAddProduct(product);
            // } else {

            // }
            this.$emit('mask', false);
            this.$emit('prompt', true);
        },
        convertStrToObj(str) {
            if (!str) {
                return {};
            }
            return JSON.parse(str);
        }
    }
}
</script>

<style scoped>
    .goodsAdd {
        position: fixed;
        bottom: 0;
        z-index: 100;
        width: 100%;
        height: 8.44rem;
    }
    .goodsAdd-content {
        height: 7.24rem;
        padding: 0 .34rem;
        background: #fff;
    }
    .goodsAdd-content-color {
        height: 3.19rem;
        border-bottom: 1px solid #DCDCDC;
    }
    .goodsAdd-content-color-top {
        height: 1.38rem;
    }
    .goodsAdd-content-color-price {
        margin-left: 2.26rem;
        padding-top: .36rem;
    }
    .goodsAdd-content-color-price p {
        line-height: .46rem;
        font-size: 14px;
        color: #1E1E1E;
    }
    .goodsAdd-content-color-price p:nth-child(1) {
        color: #A82A20;
    }
    .goodsAdd-content-color-select {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 1.09rem;
        margin: .39rem .32rem 0 .36rem;
        font-size: 14px;
        color: #1E1E1E;
    }
    .goodsAdd-content-color-select p:nth-child(2) {
        display: flex;
    }
    .goodsAdd-content-color-select p:nth-child(2) span {
        width: .6rem;
        height: .6rem;
        padding: 0.04rem;
        margin-right: .28rem;
    }
    .goodsAdd-content-color-select p:nth-child(2) .active {
        border: 2px solid #ccc;
    }
    .goodsAdd-content-size {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 2.82rem;
        padding: .45rem 0 .32rem .36rem;
        border-bottom: 1px solid #DCDCDC;
    }
    .goodsAdd-content-size p {
        font-size: 14px;
        color: #1E1E1E;
    }
    .goodsAdd-content-size p:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 1.4rem;
    }
    .goodsAdd-content-size p:nth-child(2) .on {
        background: #384355;
        color: #fff;
    }
    .goodsAdd-content-size p:nth-child(2) span {
        width: 2rem;
        height: .6rem;
        text-align: center;
        line-height: .6rem;
        background: #F4F4F4;
        border-radius: 7px;
    }
    .goodsAdd-content-num {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: .36rem;
        height: 1.23rem;
        font-size: 14px;
    }
    .goodsAdd-content-num p:nth-child(2) {
        display: flex;
    }
    .goodsAdd-content-num p:nth-child(2) span:nth-child(1), .goodsAdd-content-num p:nth-child(2) span:nth-child(3){
        width: .4rem;
        height: .4rem;
        text-align: center;
        line-height: .4rem;
        background: #F4F4F4;
    }
    .goodsAdd-content-num p:nth-child(2) span:nth-child(2) {
        width: .68rem;
        height: .4rem;
        text-align: center;
        line-height: .4rem;
    }
    .goodsAdd-content-img {
        position: absolute;
        top: -0.22rem;
        left: .64rem;
        width: 1.6rem;
        height: 1.6rem;
        padding-top: 0.09rem;
        border: 1px solid #f1f1f1;
        border-radius: 6px;
        background: #fff;
    }
    .goodsAdd-content-img img {
        width: 1.03rem;
        height: 1.29rem;
        margin: 0 auto;
    }
    .goodsAdd-content-cancel {
        position: absolute;
        top: .28rem;
        right: .52rem;
    }
    .goodsAdd-content-cancel img {
        width: .28rem;
        height: .28rem;
    }
    .goodsAdd-btn {
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        font-size: 18px;
        color: #fff;
        background: #384355;
    }
</style>
