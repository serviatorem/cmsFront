import {IProduct} from "./interfaces/IProduct.ts";
import {ref} from "vue";


export const modalEditOpen = ref<boolean>(false);
export const modalEditData = ref<IProduct>();
export const modalAddOpen = ref<boolean>(false);
export const modalImageOpen = ref<boolean>(false);
export const modalImageData = ref<string>();

export const productsVisionPage = ref<number>(1);
export const productCountToShow = ref<number>(10);


export const products = ref<IProduct[]>([
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”1',
        category: 'Абрикосы',
        income: 'Доход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”2',
        category: 'Абрикосы',
        income: 'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”3',
        category: 'Абрикосы',
        income: 'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”4',
        category: 'Абрикосы',
        income: 'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”5',
        category: 'Абрикосы',
        income: 'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”6',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”7',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”8',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”9',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”10',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”11',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”12',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”13',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”14',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”15',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”16',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”17',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”18',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”19',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”20',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”21',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”22',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”23',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”24',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”25',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },
    {
        id: Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 100000000),
        name: 'Настольная игра “На 4-х ногах”26',
        category: 'Абрикосы',
        income:'Расход',
        cost: 100,
        description: '',
        image: 'https://avatars.mds.yandex.net/i?id=7a71386f4b1c9a75126f2cd6c860f4b700857333-8491910-images-thumbs&n=13',
    },

])

export const setProducts = (payload: Array<IProduct>) => {
    products.value = payload;
    localStorage.setItem('products', JSON.stringify(products.value));
}
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products.value))
} else {
    // @ts-ignore
    products.value = JSON.parse(localStorage.getItem('products'))
}