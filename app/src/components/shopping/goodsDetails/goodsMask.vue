<template>
    <div class="goodsMask" @click="handleMask()"></div>
</template>

<script>
export default {
    methods: {
        handleMask() {
            this.$emit('mask', false);
        }
    }
}
</script>

<style scoped>
    .goodsMask {
        position: fixed;
        top: .4rem;
        z-index: 99;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.24;
    }
</style>
