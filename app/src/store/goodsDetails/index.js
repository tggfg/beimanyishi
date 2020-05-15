import axios from 'axios';

const state = {
    goods: {},
    goodsAdd: {},
    goodsComments: [],
    products: [],
}

const mutations = {
    handleGoodsContent(state, params) {
        state.goods = params;
    },
    handleGoodsComment(state, params) {
        state.goodsComments = params;
    },
    handleGoodsAdd(state, params) {
        state.goodsAdd = params;
    },
    handleGetProduct(state, params) {
        state.num = params;
        console.log(state.num);
    }
}

const actions = {
    handleGoodsContent({commit}, params) {
        axios({
            method: 'get',
            url: '/bmys/goods/getGoodsById?id=' + params
        }).then((res) => {
            commit('handleGoodsContent', res.data.data);
            console.log(res);
        })
    },
    handleGoodsComment({commit}) {
        axios({
            method: 'get',
            url: '/bmys/goods/findEstimateByGId?gId=20&pageNum=1'
        }).then((res) => {
            commit('handleGoodsComment', res.data.data.data);
            console.log(res);
        })
    },
    handleGoodsAdd({commit}) {
        axios({
            method: 'get',
            url: '/bmys/goods/getGoodsColorAndSize'
        }).then((res) => {
            commit('handleGoodsAdd', res.data.data);
            // console.log(res);
        })
    },
    handleAddProduct({commit}, params) {

        // axios({
        //     method: 'get',
        //     url: 'http://localhost:3000/products?uid=1&gid=' + params.gid
        // }).then((res) => {
        //     console.log(res);
        //     if (res.data.length) {
        //         let goodsNum = res.data[0].num + params.num;
        //         console.log(goodsNum);
        //         console.log(res.data[0].id);
        //         alert(1);
        //         axios({
        //             method: 'patch',
        //             url: 'http://localhost:3000/products/' + res.data[0].uid,
        //             data: {
        //                 "num": goodsNum
        //             }
        //         }).then((res) => {
        //             console.log(res);
        //         })
        //     } else {
        //         axios({
        //             method: 'post',
        //             url: 'http://localhost:3000/products',
        //             data: {
        //                 "uid": params.uid,
        //                 "gid": params.gid,
        //                 "src": params.src,
        //                 "name": params.name,
        //                 "price": params.price,
        //                 "color": params.color,
        //                 "size": params.size,
        //                 "num": params.num
        //             }
        //         }).then((res) => {
        //             console.log(res);
        //         })
        //     }

        // })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
