<template>
    <div class="userInfo">
        <p>李某某 *********526</p>
        <p>北京 北京市 昌平区 北京市昌平区沙河镇沙阳路18号</p>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .userInfo {
        height: 1.42rem;
        padding-left: .32rem;
        padding-top: .24rem;
        background: #fff;
    }
    .userInfo p:nth-child(1) {
        line-height: .51rem;
        font-size: 16px;
        color: #1E1E1E;
    }
    .userInfo p:nth-child(2) {
        line-height: .51rem;
        font-size: 14px;
        color: #1E1E1E;
    }
</style>
