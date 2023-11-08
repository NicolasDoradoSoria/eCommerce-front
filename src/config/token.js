import AxiosClient from "./Axios"

const Token = token => {
    if(token){
        AxiosClient.defaults.headers.common['x-auth-token'] = token
    }else{
        delete AxiosClient.defaults.headers.common['x-auth-token']
    }
}

export default Token