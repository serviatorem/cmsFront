<script setup lang="ts">

</script>

<template>
  <transition class="opacity" :class="open">
      <slot/>
  </transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>