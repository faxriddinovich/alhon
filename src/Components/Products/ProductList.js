import React, { useEffect, useState } from 'react'
import { getProducts } from '../../Requests/Request'
import './responsive.scss'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function ProductList() {

    const [products,setProducts] = useState([])
    const [pagionatedProducts,setPagionatedProducts] = useState([])
    const [btns,setBtns] = useState([])
    const [disabled,setDisabled] = useState({disabledForPrev:true,disabledForNext:false})
    const [activeIndex,setActiveIndex] = useState(0)

    function changePage(page){
        if(page === "prev"){
            if(activeIndex > 0){
                setActiveIndex(activeIndex-1)
            }
        }
        else if (page === "next"){
            if(activeIndex < Math.ceil(products.length/5)){
                setActiveIndex(activeIndex+1)
            }
        }
        else {
            setActiveIndex(page)
        }
    }

    useEffect(() => {
        let array= []
        products.map((item,index) => {
            if(index >=activeIndex*4 && index <= (activeIndex+1)*4){
                array.push(item)
            }
        })
        setPagionatedProducts(array)
    },[activeIndex])
    
    async function getData(){
        const data=await getProducts();
        let obj = btns,arr = []
        for(let i = 0; i< Math.ceil(data.data.length/4); i++){
            obj.push(i)
        }
        setBtns(obj)
        data.data.map((item,index) => {
            if(index >= 0 && index <=3){
                arr.push(item)
            }
        })
        setPagionatedProducts(arr)
        setProducts(data.data)
    }

    useEffect(() => {
        getData()
    },[])
  return (
    <>
        <div className='list-box'>
            <h1>Bizning mahsulotlar</h1>
            {pagionatedProducts.map(item=><div className='box-item' key={item.id}>
                
                <div className='item-img'>
                    <img src={item.image} alt="Photo" className='rounded' />
                </div>
                
                <div className='text-box'>
                    <h4>{item.name}</h4>
                </div>
                
            </div>)}
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='pagination'>
                            <button className='btn-prv' onClick={() => changePage("prev")}>
                                <FaAngleDoubleLeft/>
                            </button>

                            {btns.map((item,index) => <button key={item} id={index} onClick={() => changePage(index)} className={index === activeIndex ? 'active' : ""}>{index+1}</button>)}
                            
                            
                            <button className='btn-next' onClick={() => changePage("next")} >
                                <FaAngleDoubleRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductList