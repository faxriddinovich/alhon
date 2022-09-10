import axios from "axios";


export function getProducts(){
    return axios.get("https://api.alhon.uz/products")
}

export function getPhotoSlides(){
    return axios.get("https://api.alhon.uz/slides")
}

export function setData(firstName,lastName,phone,text){
    const headers={
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const data={
        name:firstName,
        surname:lastName,
        pone:phone,
        message:text
    }
    return axios.post('https://api.alhon.uz/contacts',headers,data).then(res => {
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}