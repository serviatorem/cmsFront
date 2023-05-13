<script setup lang="ts">
import {modalEditData, modalEditOpen} from '../../store.ts';
import ModalContent from "./ModalContent.vue";

</script>

<template>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header">

                <h2 class="modal__header-title">
                    Изменить товар
                </h2>

                <p class="modal__header-id">id:{{ modalEditData?.id }}</p>
                <img
                        class="modal__close"
                        src="@/assets/images/close.svg"
                        alt="close"
                        @click="modalEditOpen = false"
                >
            </div>
            <div class="modal__body">
                <ModalContent :product = 'modalEditData'/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables";

.modal {


  &__close {
    position: absolute;
    top: -60px;
    right: -40px;
    cursor: pointer;
  }

  &__content {
    margin: 0 auto;
    max-width: 580px;
    width: 100%;
  }

  &__header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #C6C2DE;
    position: relative;

    &-title {
      color: $base-color;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    &-id {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 12px;
      text-transform: uppercase;

      color: #C5C5C5;
    }

  }
}
</style>