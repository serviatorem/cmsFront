<script setup lang="ts">

import {productToShow} from "../../pagination.ts";
import TheProduct from "./TheProduct.vue";
</script>

<template>
    <div
            class="products"

    >
        <TheProduct
                v-for="product in productToShow"
                :key="product.id"
                :product='product'
        />

    </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables";
.products {
    min-height: 550px;
    max-height: 550px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px 0;
    &::-webkit-scrollbar{
        width: 5px;
        background: rgba(1,1,1,0);
    }
    &::-webkit-scrollbar-thumb{
        background:$button-color;
        border-radius: 5px;
    }
}

</style>