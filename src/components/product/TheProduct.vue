<script setup lang="ts">
import {IProduct} from "../../interfaces/IProduct.ts";
import {modalEditData, modalImageData, modalImageOpen, products} from "../../store.ts";
import {modalEditOpen} from "../../store.ts";

defineProps<{
    product: IProduct
}>();

</script>

<template>
    <div class="product">
        <p class="product__item">{{ product.id }}</p>
        <p class="product__item">{{ product.name }}</p>
        <p class="product__item">{{ product.category }}</p>
        <p class="product__item">{{ product.unit }}</p>
        <p class="product__item">{{ product.quantity }}</p>
        <p class="product__item">${{ product.cost * (100 - product.discont)/100 }}</p>
        <p class="product__item">${{ product.cost * (100 - product.discont)/100 * product.quantity }}</p>
        <img
                @click="modalImageOpen = true;modalImageData = product.image"
                class="product__image image"
                src="@/assets/images/clarity_picture-line.svg"
                alt="image"
        >
        <img
                @click="modalEditOpen = true;modalEditData = product"
                class="product__image edit"
                src="@/assets/images/akar-icons_edit.svg"
                alt="edit"
        >
        <img
                @click="products = products.filter(item =>{
            return item.id !== product.id;
        })"
                class="product__image delete"
                src="@/assets/images/ant-design_delete-outlined.svg"
                alt="delete"
        >
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables";

.product {
  padding: 15px;
  gap: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 290px repeat(5, 1fr) 20px 20px 20px;

  &__item {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: $text-color;
  }

  &__item:nth-child(4), &__item:nth-child(5) {
    text-align: center;
  }

  &__image {
    cursor: pointer;
  }

}
</style>