<script setup lang="ts">

import {modalImageData, modalImageOpen} from "../../store.ts";
</script>

<template>
    <div class="modal">
        <div class="modalImage">
            <img :src="modalImageData" alt="image" class="modalImage__image">
            <img
                class="modal__close"
                src="@/assets/images/close.svg"
                alt="close"
                @click="modalImageOpen = false"
            >
        </div>

    </div>
</template>

<style scoped lang="scss">
    .modal{
        &Image{
            margin: 0 auto;
            max-width: 580px;
            width: 100%;
            position: relative;
        }
        &__close{
            position: absolute;
            top: -60px;
            right: -40px;
            cursor: pointer;
        }
    }

</style>