import React, { useEffect, useState } from 'react'
import { product } from '../../MockData/MockData'
import { getProducts } from '../../Requests/Request'
import './responsive.scss'

function ProductList() {

    const [products,setProducts] = useState([])

    async function getData(){
        const data=await getProducts();
        console.log(data.data)
        setProducts(data.data)
    }

    useEffect(() => {
        getData()
    },[])
  return (
    <>
        <div className='list-box'>
            <h1>Bizning mahsulotlar</h1>
            {products.map(item=><div className='box-item' key={item.id}>
                
                <div className='item-img'>
                    <img src={item.image} alt="Photo" />
                </div>
                
                <div className='text-box'>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                </div>
                
            </div>)}
        </div>
    </>
  )
}

export default ProductList