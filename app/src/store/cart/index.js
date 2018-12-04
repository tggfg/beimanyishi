import axios from 'axios'

const state = {

}

const mutations = {

}

const actions = {
    handleAddProduct({commit}, params) {
        for (var key in params) {
            var gId = key;
            var num = params[key].num;
            var color = params[key].color;
            var size = params[key].size;
        }
        axios({
            method: 'post',
            url: '/bmys/cart/addCart',
            data: {
                num: num,
                gId: gId,
                color: color,
                size: size
            }
        }).then((res) => {
            console.log(res);
        })
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3000/products',
        //     data: params
        // }).then((res) => {
        //     console.log(res);
        // })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}