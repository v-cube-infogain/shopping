import axios from 'axios';

const productsURL = "https://dummyjson.com/products";
const catergoryURL = "https://dummyjson.com/products/categories";
const productsByCategoryURL = "https://dummyjson.com/products/category"

export const getAllProductsService = () =>
    axios.get(productsURL);

export const getProductCategoryService = () =>
    axios.get(catergoryURL);

export const getProductsByCategoryService = (category) =>
    axios.get(`${productsByCategoryURL}/${category}`);