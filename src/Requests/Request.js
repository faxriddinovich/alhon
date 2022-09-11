import axios from "axios";


export function getProducts(){
    return axios({
        method:"GET",
        url:"https://api.alhon.uz/products"
    })
}

export function getPhotoSlides(){
    return axios({
        method:"GET",
        url:"https://api.alhon.uz/slides"
    })
}

export function getDataForSlider(){
    return axios({
        method:"GET",
        url:"https://api.alhon.uz/mahsulotlars"
    })
}