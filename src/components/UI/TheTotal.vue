<script setup lang="ts">
import {ref, watchEffect} from "vue";
import {IProduct} from "../../interfaces/IProduct.ts";

const props = defineProps<{
    products?: IProduct[]
    productTotal?: number
    text?: string
}>();
const total = ref<number>(0);
const income = ref<number>(0);
const expense = ref<number>(0);
if (props.products) {
    watchEffect(() => {
        total.value = 0;
        income.value = 0;
        expense.value = 0;
        props.products?.forEach(item => {
            if (item.income === 'Доход') {
                income.value += Number(item.cost);

            } else if (item.income === 'Расход') {
                expense.value += Number(item.cost);

            }
        })
        total.value = income.value - expense.value
    });

} else if (props.productTotal || props.productTotal === 0) {
    watchEffect(() => {
        total.value = <number>props.productTotal;
    })
} else {
    total.value = 0;
}

</script>

<template>
    <div
            class="income"
            v-if="products"
    >
        <span class="text">доходы: </span>
        <span class="cost">{{ income }}$</span>
    </div>
    <div
            class="income"
            v-if="products"
    >
        <span class="text">расходы: </span>
        <span class="cost">{{ expense }}$</span>
    </div>
    <div class="total">
        <span class="text">{{ text }}: </span>
        <span class="cost">{{ total }}$</span>
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