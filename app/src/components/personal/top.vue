<template>
    <div class="title">
        <div class="title_top"></div>
        <div class="title_com">
            <p>小户瑞</p>
            <p>查看并编辑个人资料</p>
            <img src="/static/img/赵老师.jpg" >
        </div>
    </div>
</template>

<script>

export default {
    
}   
</script>

<style>
.title{
    width: 100%;
    height:3.76rem;
    background:#384355; 
}
.title_top{
    height: .4rem;
    width: 100%;
}
.title_com{
    height: 3.36rem;
    width:100%;
    position: relative;
}
.title_com>p:nth-child(1){
    font-size: 18px;
    color: #FFF;
    position: absolute;
    left:.16rem;
    top:1.22rem;
    font-weight:600;
}
.title_com>p:nth-child(2){
    font-size: 14px;
    color: #FFF;
    opacity: 0.4;
    position: absolute;
    left:.16rem;
    top:1.85rem;
    font-weight:600;
}
.title_com>img{
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top:.98rem;
    right:.32rem;
    border-radius: 50%;
}
</style>
