import axios from "axios";


export function getProducts(){
    return axios.get("https://api.alhon.uz/products")
}

export function getPhotoSlides(){
    return axios.get("https://api.alhon.uz/slides")
}