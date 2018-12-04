<template>
    <div class="cartContent">
        <ul class="cartContent-list">
            <li class="cartContent-item" v-for="(item, index) in goodsList" :key="index">
                <div class="cartContent-item-img">
                    <img :src="item.src" alt="">
                </div>
                <div class="cartContent-item-info">
                    <div class="cartContent-item-info-namePrice">
                        <span>{{item.name}}</span>
                        <span>￥{{item.price}}</span>
                    </div>
                    <p class="cartContent-item-info-colorSize">{{item.color}}-{{item.size}}</p>
                    <p class="cartContent-item-info-tips">复合秋冬换新，暖心推荐活动</p>
                    <div class="cartContent-item-info-operate">
                        <div class="cartContent-item-info-operate-count">
                            <span class="reduce" @click="handleReduce(item, index)">-</span>
                            <input type="text" class="count" :value="item.num">
                            <span class="add" @click="handleAdd(item, index)">+</span>
                        </div>
                        <span class="delete" @click="handleDelete(item, index)">x</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="cartContent-total">
            <p>
                <span>共{{sum.sumCount}}件商品</span>
                <span>金额</span>
                <span>￥{{sum.sumPrice}}</span>
            </p>
            <p>
                <span>满149元免邮</span>
                <span>运费</span>
                <span>￥{{freight}}</span>
            </p>
        </div>
        <div class="cartContent-continueBuy" @click="handleContinueBuy()">继续购物</div>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    created() {
        //{"0":{"src":"static/img/goodsAdd_03.jpg","name":"宽松衬衫-男","price":119,"color":"蓝色","size":"170/M","num":5}}
        let str = localStorage.product ? localStorage.product : '';
        let obj = this.convertStrToObj(str);
        if (str) {
           for (var id in obj) {
                this.goodsList.push(obj[id]);
            } 
        }
        this.$emit('pay', [this.sum, this.freight]);
    },
    updated() {
        this.$emit('pay', [this.sum, this.freight]);
    },
    data() {
        return {
            goodsList: [],
            freight: 10
        }
    },
    computed: {
        sum() {
            let sumCount = 0, sumPrice = 0;
            this.goodsList.filter((item) => {
                sumCount += item.num;
                sumPrice += item.num * item.price;
            });
            if (sumPrice >= 149) {
                this.freight = 0;
            } else {
                this.freight = 10;
            }
            return {
                sumCount,
                sumPrice
            }
        }
    },
    methods: {
        convertStrToObj(str) {
            if (!str) {
                return {};
            }
            return JSON.parse(str);
        },
        handleReduce(item, index) {
            if (this.goodsList[index].num > 1) {
                let str = localStorage.product ? localStorage.product : '';
                let obj = this.convertStrToObj(str);
                for (var id in obj) {
                    if (obj[id].src == item.src) {
                        obj[id].num--;
                        localStorage.product = JSON.stringify(obj);
                        console.log(localStorage.product);
                        break;
                    };
                }
                this.goodsList[index].num--;
            }
        },
        handleAdd(item, index) {
            let str = localStorage.product ? localStorage.product : '';
            let obj = this.convertStrToObj(str);
            for (var id in obj) {
                if (obj[id].src == item.src) {
                    obj[id].num++;
                    localStorage.product = JSON.stringify(obj);
                    console.log(localStorage.product);
                    break;
                };
            }
            this.goodsList[index].num++;
        },
        handleDelete(item, index) {
            let str = localStorage.product ? localStorage.product : '';
            let obj = this.convertStrToObj(str);
            for (var id in obj) {
                if (obj[id].src == item.src) {
                    delete obj[id];
                    localStorage.product = JSON.stringify(obj);
                    console.log(localStorage.product);
                    break;
                };
            }
            this.goodsList.splice(index, 1);
            if (this.goodsList.length == 0) {
                localStorage.clear();
                this.$router.push('/emptyCart');
            }
        },
        handleContinueBuy() {
            this.$router.push('/home/index');
        }
    }
}
</script>

<style scoped>
    .cartContent {
        height: 100%;
        border-top: 1px solid #F1F1F1;
        margin-top: 0.09rem;
        background: #F5F5F5;
    }
    .cartContent-item {
        display: flex;
        justify-content: space-between;
        height: 2.82rem;
        border-bottom: 1px solid #F1F1F1;
        background: #fff;
    }
    .cartContent-item-img {
        width: 2.1rem;
    }
    .cartContent-item-img img {
        width: 1.03rem;
        height: 1.29rem;
        margin: 0 auto;
        margin-top: .58rem;
    }
    .cartContent-item-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 5.06rem;
        padding-top: .41rem;
        padding-bottom: .34rem;
        padding-right: .3rem;
    }
    .cartContent-item-info-namePrice {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
    .cartContent-item-info-namePrice span:nth-child(1) {
        color: #030303;
    }
    .cartContent-item-info-namePrice span:nth-child(2) {
        color: #1E1E1E;
    }
    .cartContent-item-info-colorSize, .cartContent-item-info-tips {
        font-size: 12px;
        color: #5A5A5A;
    }
    .cartContent-item-info-operate {
        display: flex;
        justify-content: space-between;
    }
    .cartContent-item-info-operate-count {
        display: flex;
    }
    .reduce, .add, .count {
        width: .88rem;
        height: .6rem;
        text-align: center;
        line-height: .6rem;
        font-size: 14px;
        border: 1px solid #DCDCDC;
    }
    .count {
        border-left: 0;
        border-right: 0;
    }
    .cartContent-item-info-operate .delete {
        font-size: 20px;
        color: #DCDCDC;
    }
    .cartContent-total {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 1.58rem;
        padding-left: 2.74rem;
        padding-top: .41rem;
        padding-bottom: .32rem;
        padding-right: .31rem;
        background: #fff;
    }
    .cartContent-total p {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #1E1E1E;
    }
    .cartContent-total p:nth-child(1) span:nth-child(1) {
        text-indent: 2em;
        width: 1.74rem;
        font-size: 12px;
        color: #5A5A5A;
    }
    .cartContent-total p:nth-child(2) span:nth-child(1) {
        width: 1.74rem;
        height: .44rem;
        text-align: center;
        line-height: .44rem;
        font-size: 12px;
        border: 1px solid #384355;
        border-radius: 7px;
    }
    .cartContent-continueBuy {
        height: .9rem;
        margin-top: .2rem;
        text-align: center;
        line-height: .9rem;
        font-size: 14px;
        color: #030303;
        background: #fff;
    }
</style>
