<script setup lang="ts">


import {
    productsVisionPageUp,
    productsVisionPageDown,
    productIndexThatStartShow,
    productIndexThatEndShow
} from "../../pagination.ts";
import {productCountToShow, products} from "../../store.ts";




</script>

<template>
    <div class="footer">
      <div class="footer__count-pagination">
          количество сделок на странице
          <select name="selectPagination" id="selectPagination" class="footer__select" v-model="productCountToShow">

              <option :value="10" selected>10</option>
              <option :value="15">15</option>
              <option :value="20">20</option>
              
          </select>
      </div>
      <div class="footer__pagination">
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
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables";

.footer {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  padding: 15px 20px;
  gap: 50px;
  &__count-pagination{
    display: flex;
    align-items: center;
    gap: 15px;

  }

  &__select{
    border: none;
    outline: none;
  }

  &__pagination{
    display: flex;
    gap: 50px;
    align-items: center;
  }
  
  &__text,&__count-pagination,&__select {
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