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
    const res = await instance.post(get_products+search_products)

    if (await res.status != 200){
        throw Error(res)
    }

    return await res.data
}

//acá falta filtros por categoría, quizá
export async function getProductsList(options={page:"1", searchKey:"", sortType, sortOrder}) {
    console.log("called products list with", options)
    const {page, searchKey, sortOrder, sortType} = options;
    var myParams = {
        [get_products_params.limit]: limit_per_page,
        [get_products_params.page]: page,
    }

    if (sortType !== "") {
        myParams[get_products_params.header]= sortType
    }

    if (sortOrder != "") {
        myParams[get_products_params.type]= sortOrder
    }

    const res = await instance.post(
        get_products+search_products, 
        {
            [search_products_params.name]: searchKey,
        },
        {
            params: myParams
        }
        )
    
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
