import axios from 'axios'

import { base_url, get_products } from './urls';

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
    return await getProductsList()
}

export async function getProductsList() {
    const res = await instance.get(get_products)

    if (await res.status != 200){
        throw Error(res)
    }

    return await res.data.products
}