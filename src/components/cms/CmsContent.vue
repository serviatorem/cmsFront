<script setup lang="ts">

import CmsHeader from "./CmsHeader.vue";
import CmsBody from "./CmsBody.vue";
import CmsFooter from "./CmsFooter.vue";
</script>

<template>
  <div class="cms">
      <CmsHeader/>
      <CmsBody/>
      <CmsFooter/>
  </div>
</template>

<style scoped lang="scss">
  .cms{
    background: white;
    margin-top: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
</style>