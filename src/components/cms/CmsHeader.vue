<script setup lang="ts">

import TheButton from "../UI/TheButton.vue";
import {modalAddOpen, products} from "../../store.ts";
import {ref,watch} from "vue";
const searchedText = ref<string>('');
watch(searchedText,()=>{
    products.value = JSON.parse(localStorage.getItem('products')).filter((item)=>{
        return item.name.includes(searchedText.value)
    })
})

</script>

<template>
  <div class="header">
      <input
              type="search"
              placeholder="поиск по имени"
              class="header__search"
              v-model="searchedText"
      >
    <TheButton
            text="Добавить запись"
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
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    &__search{
      background: $background-color;
      border-radius: 6px;
      border:none;
      outline: none;
      padding: 10px;
      width: 70%;
    }
  }
</style>