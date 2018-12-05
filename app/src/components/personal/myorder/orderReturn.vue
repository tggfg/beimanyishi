<template>
    <div>
        <order-one></order-one>
        Return;
    </div>
</template>
<script>
import orderOne from "./orderOne"
export default {
    name:"orderReturn",
    components:{
        "order-one":orderOne
    }
}
</script>