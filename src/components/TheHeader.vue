<script setup lang="ts">


import TheTotal from "./UI/TheTotal.vue";
import {products} from "../store.ts";
</script>

<template>
  <header class="header">
      <h1 class="header__title">CMS</h1>
      <div class="header__total">
          <TheTotal :products='products'/>
      </div>
  </header>
</template>

<style scoped lang="scss">
  @import "@/assets/css/variables";
  .header{
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #C6C2DE;
    &__title{
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      letter-spacing: 0.1em;
      text-transform: uppercase;
      color:$base-color;
    }
  }
</style>