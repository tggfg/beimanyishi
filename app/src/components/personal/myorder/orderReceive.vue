<template>
    <div>
        <order-one></order-one>
        Receive;
    </div>
</template>
<script>
import orderOne from "./orderOne";
export default {
    name:"orderReceive",
    components:{
        "order-one":orderOne
    }
}
</script>