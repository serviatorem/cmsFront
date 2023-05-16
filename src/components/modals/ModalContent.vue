<script setup lang="ts">
import {IProduct} from "../../interfaces/IProduct.ts";
import TheTotal from "../UI/TheTotal.vue";
import TheButton from "../UI/TheButton.vue";
import {ref, watchEffect} from "vue";
import {modalAddOpen, modalEditOpen, setProducts} from "../../store.ts";

const props = defineProps<{
    product?: IProduct
}>();
const productTotal = ref<number>(0);
const cost = ref(props.product?.cost || 0);
const income = ref(props.product?.income || 'Выберите тип');
const name = ref(props.product?.name || '');
const description = ref(props.product?.description || '');
const category = ref(props.product?.category || '');
const image = ref(props.product?.image || '');

const productAdd = () => {
    if (props.product) {
        const product: IProduct = ({
            id: props.product?.id || 0,
            name: name.value,
            category: category.value,
            income: income.value,
            cost: cost.value,
            description: description.value,
            image: image.value
        })
        const editedProducts = JSON.parse(localStorage.getItem('products') || "{}");
        console.log(product);
        console.log(props.product);
        const editedItemIndex = editedProducts.findIndex((el:IProduct) => el.id === props.product?.id);
        editedProducts.splice(editedItemIndex, 1)
        editedProducts.splice(editedItemIndex,0,product)
        setProducts(editedProducts)
        modalEditOpen.value = false;
    } else {
        const product: IProduct = {
            id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
            name: name.value,
            category: category.value,
            income: income.value,
            cost: cost.value,
            description: description.value,
            image: image.value
        }
        const updateProducts = JSON.parse(localStorage.getItem('products') || "{}");
        updateProducts.unshift(product)
        setProducts(updateProducts);
        modalAddOpen.value = false;
    }
}
watchEffect(()=>{productTotal.value = cost.value})
</script>

<template>
    <div class="modalContent">
        <div class="modalContent__form">
            <label class="modalContent__label">
                Наименование
                <input
                        type="text"
                        class="modalContent__input name"
                        v-model="name">
            </label>
            <label class="modalContent__label">
                Описание
                <textarea
                        class="modalContent__input description"
                        v-model="description"></textarea>
            </label>
            <label class="modalContent__label">
                Категория
                <input
                        type="text"
                        class="modalContent__input category"
                        v-model="category">
            </label>

            <label class="modalContent__label">
                Тип
                <select
                        class="modalContent__input income"
                        v-model="income"
                >
                    <option value="Выберите тип" selected>Выберите тип</option>
                    <option value="Доход">Доход</option>
                    <option value="Расход">Расход</option>
                </select>
            </label>
            <label class="modalContent__label">
                Цена
                <input
                        type="text"
                        class="modalContent__input cost"
                        v-model=cost
                >
            </label>
            <label class="modalContent__label">
                Ссылка на изображение
                <input
                        type="text"
                        class="modalContent__input image"
                        v-model="image"
                >
            </label>
        </div>
        <div class="modalContent__footer">
            <TheTotal
                    :product='product'
                    :productTotal='productTotal'
                    text = 'итоговая цена'
            />
            <TheButton
                    text="Добавить товар"
                    @click='productAdd()'
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables";

.modalContent {
  margin-top: 20px;
  padding: 25px;
  background: #FFFFFF;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  &__form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  &__label {
    display: flex;
    gap: 5px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    /* Fonts/Primary Variant */

    color: $base-color;
    flex-direction: column;
  }

  &__label:nth-child(2) {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;

  }

  &__input {
    resize: none;
    height: 100%;
    min-height: 40px;
    width: 100%;
    background: $background-color;
    border-radius: 6px;
    border: none;
    outline: none;
    padding: 10px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.discont {
  &__label {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;

    input[type = checkbox] {
      display: none;
    }

    input {
      max-width: 200px;
    }
  }

  &__checkbox {
    width: 40px;
    height: 40px;
    background-color: $background-color;
    color: $background-color;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type=checkbox] + &__checkbox:before {
    content: "\2713";
    display: block;
    font-size: 30px;
    line-height: 22px;
    text-align: center;
    vertical-align: middle;
    transition: color ease .3s;
    height: 20px;
    width: 20px;
    border: none;
    background-color: $background-color;
    color: $background-color;
  }

  input[type=checkbox]:checked + &__checkbox:before {
    color: #000;
  }
}
</style>