import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        accept: 'application/json',
        Authorization: `Token`,
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
    const url = "whateverTheUrlIs"  
    const res = await instance.get(url)

    if (await res.status != 200){
        throw Error(res);
    }
    
    return await res.data
}