<script setup lang="ts">


import {
    productsVisionPageUp,
    productsVisionPageDown,
    productIndexThatStartShow,
    productIndexThatEndShow
} from "../../pagination.ts";
import {products} from "../../store.ts";




</script>

<template>
    <div class="footer">
        <div class="footer__pages">
            <span class="footer__text">{{ productIndexThatStartShow +1 }}-{{productIndexThatEndShow}} of {{ products.length }}</span>
        </div>
        <div class="footer__nav">
            <img
                    src="@/assets/images/prev.svg"
                    alt="prev"
                    class="footer__prev"
                    @click="productsVisionPageDown()"
            >
            <img
                    src="@/assets/images/next.svg"
                    alt="next"
                    class="footer__next"
                    @click="productsVisionPageUp()"
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables";

.footer {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  gap: 50px;
  padding: 15px 20px;

  &__text {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    color: $base-color;
    letter-spacing: 0.05em;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  &__nav img {
    width: 15px;
    cursor: pointer;
    height: 15px;
  }
}
</style>