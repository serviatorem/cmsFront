<script setup lang="ts">
import {IProduct} from "../../interfaces/IProduct.ts";
import {modalEditData, modalImageData, modalImageOpen, setProducts} from "../../store.ts";
import {modalEditOpen} from "../../store.ts";
import {computed, ref} from "vue";
import ProductDescription from "./ProductDescription.vue";

const openDescription = ref<boolean>(false);
const props = defineProps<{
    product: IProduct
}>();
const deleteItem = () => {
    if (localStorage.getItem('products')) {
        const productTemp = JSON.parse(localStorage.getItem('products') || '{}')
        const productFilter = productTemp.filter((item: IProduct) => {
            return item.id !== props.product.id
        })

        setProducts(productFilter);
    }
}

const possibleOpenDescription = computed(() => {
    return openDescription.value && props.product.description
})
</script>

<template>
    <div
            class="product"
            @click="openDescription = !openDescription"
    >
        <p class="product__item">{{ product.id }}</p>
        <p class="product__item">{{ product.name }}</p>
        <p class="product__item">{{ product.category }}</p>
        <p class="product__item">{{ product.income }}</p>
        <p class="product__item">${{ product.cost }}</p>
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
                @click="deleteItem()"
                class="product__image delete"
                src="@/assets/images/ant-design_delete-outlined.svg"
                alt="delete"
        >
    </div>
    <ProductDescription
            :description="product.description"
            v-if="possibleOpenDescription"
    />
</template>

<style scoped lang="scss">

.product {
  padding: 15px 15px 0;
  gap: 20px;
  width: 100%;
  display: grid;
  cursor: pointer;
  grid-template-columns: 1fr 290px repeat(3, 1fr) 20px 20px 20px;

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