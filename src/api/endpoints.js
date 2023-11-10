import axios from 'axios'

import { base_url, get_products, get_products_params } from './urls';

export const instance = axios.create({
    baseURL: base_url,
    timeout: 1000,
    headers: {
        accept: 'application/json',
    }
  });



export async function getProductDetails(id) {
    const url = "whateverTheUrlIs"  
    const res = await instance.get(url)

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

export async function getProductsList(page) {
    const res = await instance.get(get_products, {
        params:{
            [get_products_params.limit]: 1,
            [get_products_params.page]: page
        }
    })

    if (await res.status != 200){
        throw Error(res)
    }

    return await res.data
}