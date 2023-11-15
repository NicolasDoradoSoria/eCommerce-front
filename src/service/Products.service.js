import axios from 'axios'

import { base_url, category, get_products, get_products_params, search_products, search_products_params } from './Products.urls';

const limit_per_page = 1

const instance = axios.create({
    baseURL: base_url,
    timeout: 1000,
    headers: {
        accept: 'application/json',
    }
  });



export async function getProductDetails(id) { 
    const res = await instance.get(get_products+"/"+id)

    if (await res.status != 200){
        throw Error(res);
    }
    
    return await res.data
}

export async function getProductSimilar(id) {
    //for now...    
    const res = await instance.get(get_products)

    if (await res.status != 200){
        throw Error(res)
    }

    return await res.data
}

//acá falta integrar lo da las pags, el searchKey, y maybe filtros por categoría?
export async function getProductsList(page, searchKey) {
    /*
    const res = await instance.get(get_products, {
        params:{
            [get_products_params.limit]: limit_per_page,
            [get_products_params.page]: page
        }
    })
    */


    const res = await instance.post(get_products+search_products, {
        [search_products_params.name]: searchKey,
    })
    
    if (await res.status != 200){
        throw Error(res)
    }

    return await res.data

    
}


export async function getFilters() {
    const res = await instance.get(category)

    if (await res.status != 200){
        throw Error(res);
    }
    
    return await res.data
}
