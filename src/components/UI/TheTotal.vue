<script setup lang="ts">
import {ref, watchEffect} from "vue";
import {IProduct} from "../../interfaces/IProduct.ts";
const props = defineProps<{
    products?:IProduct[]
    productTotal?:number
}>();
const total = ref<number>(0);
if (props.products){
    watchEffect(() => {
        const products = [...props.products];
        total.value = 0;
        products.forEach(item => {
            total.value += item.cost * (100 - item.discont)/100 * item.quantity;
        })
    });

}else if(props.productTotal || props.productTotal === 0){
    watchEffect(() => {total.value = <number>props.productTotal;})
}else{
    total.value = 0;
}

</script>

<template>
    <div class="total">
        <span class="text">Итоговая стоимость: </span>
        <span class="cost">${{ total }}</span>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables";

.cost {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: $cost-color;
}

.text {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: $base-color;
}
</style>