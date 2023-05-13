<script setup lang="ts">

import TheButton from "../UI/TheButton.vue";
import {modalAddOpen} from "../../store.ts";
</script>

<template>
  <div class="header">
    <TheButton
            text="Добавить товар"
            @click="modalAddOpen = true"
    />
  </div>
</template>

<style scoped lang="scss">
  @import "@/assets/css/variables";
  .header{
    width: 100%;
    padding: 15px 20px;
    text-align: right;
  }
</style>