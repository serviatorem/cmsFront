<script setup lang="ts">

const props = defineProps<{
    text: string
}>();
</script>

<template>
    <button class="button">{{ props.text }}</button>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables";

.button {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  padding: 10px 15px;
  color: #FFFFFF;
  border-radius: 6px;
  min-width: fit-content;
  border: none;
  outline: none;
  cursor: pointer;
  background: $button-color;
}
</style>