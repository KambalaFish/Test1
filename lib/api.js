import axios from "axios";

const instance = axios.create({
    baseURL: process.env.WP_URL
})

export async function getCategories(){
    const result = await instance.get(`/wp-json/wc-bookings/v1/products/categories`);
    return result.data;
}

export async function getCategoryBySlug(slug){
    const category = await instance.get(`/wp-json/wc-bookings/v1/products/categories`, {
        params: {
            slug: slug
        }
    });
    return category.data[0];
}

export async function getCategoryProductsById(id){
    const productsByCategoryId = await instance.get(`/wp-json/wc-bookings/v1/products`,{
        params:{
            category: id
        }
    });
    return productsByCategoryId.data;
}

export async function getPageBySlug(slug){
    const page = await instance.get(`/wp-json/wp/v2/pages`,{
        params:{
            slug: slug
        }
    });
    return page.data[0];
}