import axios from 'axios';

const baseURL= "http://170.239.85.65:4000/"

export function listProducts(){
    return axios.get(`${baseURL}/products`);
}

export function getProduct(id) {
    return axios.get(id).then(res =>{return res.data});
}
