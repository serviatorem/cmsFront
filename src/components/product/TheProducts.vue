<script setup lang="ts">

import {productToShow} from "../../pagination.ts";
import TheProduct from "./TheProduct.vue";

</script>

<template>
    <div
            class="products"
            v-for="product in productToShow"
            :key="product.id"
    >
        <TheProduct :product='product'/>
    </div>
</template>

<style scoped lang="scss">

</style>