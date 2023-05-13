import {computed} from "vue";
import {productCountToShow, products, productsVisionPage} from "./store.ts";



export const productIndexThatStartShow = computed(() => {
    return productsVisionPage.value * productCountToShow.value - productCountToShow.value;
});

export const productIndexThatEndShow = computed(() => {
    let productIndexThatEndShowT = productsVisionPage.value * productCountToShow.value

    return productIndexThatEndShowT < productsLength.value ? productIndexThatEndShowT : productsLength.value
});

export const productToShow = computed(() => {
    return products.value.slice(productIndexThatStartShow.value, productIndexThatEndShow.value)
})

const productsLength = computed(() => {
    return products.value.length
})

export function productsVisionPageUp() {
    if ((productsVisionPage.value + 1) * productCountToShow.value < productsLength.value + productCountToShow.value){
        productsVisionPage.value += 1;
    }
}

export function productsVisionPageDown() {
    if (productsVisionPage.value > 1) {
        productsVisionPage.value -= 1;
    }
}
