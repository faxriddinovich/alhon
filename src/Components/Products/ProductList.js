import React from 'react'
import { product } from '../../MockData/MockData'
import './responsive.scss'

function ProductList() {
  return (
    <>
        <div className='list-box'>
            <h1>Bizning mahsulotlar</h1>
            {product.map(item=><div className='box-item' key={item.id}>
                
                <div className='item-img'>
                    <img src={item.img} alt="Photo" />
                </div>
                
                <div className='text-box'>
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                </div>
                
            </div>)}
        </div>
    </>
  )
}

export default ProductList