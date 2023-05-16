<script setup lang="ts">


defineProps<{
    description: string
}>();
</script>

<template>
    <div class="description">
        <p class="description__text">
            {{ description }}
        </p>
    </div>
</template>

<style scoped lang="scss">
    .description{
        margin: 15px 30px;
        border:2px solid $base-color;
        border-radius: 8px;
        padding: 10px;
        &__text{
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            color: $base-color;
        }
    }
</style>