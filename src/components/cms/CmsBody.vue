<script setup lang="ts">

import TheProducts from "../product/TheProducts.vue";
</script>

<template>
  <div class="body">
    <div class="body__header">
        <p class="body__header-item">id</p>
        <p class="body__header-item">наименование</p>
        <p class="body__header-item">категория</p>
        <p class="body__header-item">тип</p>
        <p class="body__header-item">цена</p>
    </div>
      <TheProducts/>
  </div>
</template>

<style scoped lang="scss">
  @import "@/assets/css/variables";
  .body{
    min-height: 550px;
    &__header{
      padding: 15px;
      width: 100%;
      gap:20px;
      display: grid;
      grid-template-columns: 1fr 290px repeat(3,1fr) 20px 20px 20px;
      background: $background-color;

      &-item{
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color:$base-color;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      &-item:nth-child(4),&-item:nth-child(5){
        text-align: center;
      }
    }

  }
</style>